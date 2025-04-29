# imthinkingofyou 🌸

A quiet space for small kindnesses.  
**imthinkingofyou** allows users to send soft, emotionally curated thoughts to others without expectation of reply, helping foster quiet care in a fast-moving world.

---

## 🛠 Features

- Thought generation based on four emotional "vibes": Soft, Calm, Reflective, Passionate
- Optional name field to personalize or send anonymously
- Shareable dynamic links powered by unique IDs
- Receiver experience:
  - Gentle reveal of thought
  - Visit tracking (visit count, first time opened)
  - Forwarding tracking (future-ready)
- Soft, emotional UX pacing with delayed transitions and minimal pressure
- Responsive across devices: mobile, tablet, desktop
- Built-in receiver lifecycle analytics (visit count, first received at)

---

## ⚙️ Tech Stack

- **Frontend**: Next.js 15 (App Router, React 18)
- **Backend**: 
  - Vercel Serverless API routes
  - Supabase (Postgres Database)
- **Hosting**: Vercel (Global Edge Network)
- **Styling**: TailwindCSS
- **State Management**: React Hooks
- **Analytics (internal)**: Soft event tracking via Supabase fields (`visit_count`, `first_received_at`, `forwarded`, `has_shared`)

---

## 📦 Folder Structure

/lib/ storage/ vibesToThoughts.js # Vibe → Thought mappings supabaseClient.js # Supabase client connection

/src/ app/ sender/ page.js # Thought creation page share/ ShareClient.js # Client-side share logic page.js # Suspense wrapper receiver/ ReceiverClient.js # Client-side receiver logic page.js # Suspense wrapper

/pages/ api/ sendThought.js # POST: Create thought getThought.js # GET: Fetch thought + update receiver analytics markShared.js (future) # POST: Track forwarded/shared thoughts


---

## 🚀 Live Deployment

Production URL:  
👉 [https://imthinkingofyou.vercel.app](https://imthinkingofyou.vercel.app)

---

## 📈 Future Enhancements

- Build `/api/markShared.js` to track forwarded thoughts
- Light analytics dashboard for backend visualization
- Optional personalization based on receiver interactions
- Progressive Web App (PWA) version for offline kindness sending

---

## 🧠 Key Learning Areas

- Fullstack flow from dynamic frontend to persistent backend
- Real-world debugging: RLS issues, SSR vs CSR hydration errors
- Domain management and production deployment scaling
- Soft UX pacing: emotional timing between page states

---

## 📚 License

Built for learning, emotional well-being experiments, and portfolio demonstration.  
All content © 2025.

---


