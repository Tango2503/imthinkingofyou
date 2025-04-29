// pages/api/sendThought.js

import { nanoid } from 'nanoid';
import { vibesToThoughts } from '../../lib/storage/vibesToThoughts';
import { supabase } from '../../lib/storage/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { vibe, name } = req.body;

    if (!vibe || !vibesToThoughts[vibe]) {
      return res.status(400).json({ error: "That vibe doesn't exist. ✨" });
    }

    const thoughtMessage = vibesToThoughts[vibe];
    const id = nanoid(8);

    // INSERT full schema into Supabase
    const { error } = await supabase
      .from('thoughts')
      .insert([
        {
          id,
          message: thoughtMessage,
          vibe,
          name: name || null,
          is_anonymous: !name,
          has_shared: false,
          created_at: new Date().toISOString(),
          first_received_at: null,
          visit_count: 0,
          forwarded: false,
        },
      ]);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to save thought. 🌸" });
    }

    return res.status(200).json({ id });
  } else {
    return res.status(405).json({ error: 'Method not allowed.' });
  }
}