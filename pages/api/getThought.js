// pages/api/getThought.js

import { supabase } from '../../lib/supabaseClient'; // <-- Add this import

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;

    // Validate that an ID was provided
    if (!id) {
      return res.status(400).json({ error: "No thought ID provided. ✨" });
    }

    // Query Supabase for the thought by ID
    const { data: thought, error } = await supabase
      .from('thoughts')
      .select('*')
      .eq('id', id)
      .single();

    // Handle not found
    if (error || !thought) {
      console.error(error);
      return res.status(404).json({ error: "We couldn't find this thought — maybe it floated away? 🌬️" });
    }

    // Optional: Update receiver engagement stats (visit_count, first_received_at)
    let updates = {
      visit_count: (thought.visit_count || 0) + 1,
    };

    if (!thought.first_received_at) {
      updates.first_received_at = new Date().toISOString();
    }

    // Update the record (soft tracking)
    await supabase
      .from('thoughts')
      .update(updates)
      .eq('id', id);

    // Respond with the thought
    return res.status(200).json({
      message: thought.message,
      name: thought.name,
      is_anonymous: thought.is_anonymous,
      vibe: thought.vibe,
      createdAt: thought.createdAt,
      first_received_at: thought.first_received_at || updates.first_received_at,
      visit_count: (thought.visit_count || 0) + 1,
      forwarded: thought.forwarded,
    });
  } else {
    return res.status(405).json({ error: 'Method not allowed.' });
  }
}
