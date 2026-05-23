# 💊 PillSnap

**PillSnap** is a modern, optimized, and purely client-side platform designed to schedule and simulate medication adherence. It allows doctors or health managers to configure personalized pill schedules—complete with visual attributes like colors and physical shapes—and generate live, shareable patient links instantly without requiring a backend database.

---

## ✨ Key Features

- **🔄 Real-time Preview:** Any changes made to the patient's name, dosage, or instructions immediately reflect on the interactive `PhonePreview` (iPhone simulator) component.
- **🔗 Zero-Database Architecture (URL-Based State Sharing):** Compresses and serializes the entire dashboard schedule state into secure `Base64` strings attached to a public URL, decoupling the app from external data storage.
- **⚡ Optimized Form Performance:** Built using `react-hook-form` along with custom controllers to isolate re-renders and maintain top-tier performance during data entry.
- **🎨 Skeuomorphic Flat UI:** Beautifully simulates 3D pill variants (round with mid-lines, capsules, ovals, and rotated squares) matching actual pharmaceutical aesthetics using Tailwind CSS gradients and shadows.
- **🧼 Persistent Client State:** Powered by Zustand paired with the `persist` middleware to seamlessly retain configured schedules across local browser refreshes.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **State Management:** Zustand
- **Form Handling:** React Hook Form
- **Styling:** Tailwind CSS & Lucide Icons
- **Animation:** Framer Motion
- **Language:** TypeScript

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── (admin)/dashboard/     # Main admin dashboard for configuring schedules
│   └── view/                  # Public, distraction-free patient view mode
├── components/                # Shared global UI components
└── features/pill/             # Core medication feature module
    ├── components/            # PillBox, PillRender, PhonePreview, UserForm
    ├── store/                 # usePillStore.ts (State orchestration engine)
    └── types/                 # Domain-specific TypeScript interfaces
🚀 Getting Started
Clone the repository:
```

Bash
git clone [https://github.com/AdibJadidi/pillsnap.git](https://github.com/AdibJadidi/pillsnap.git)
cd pillsnap
Install dependencies:

Bash
npm install
Fire up the local development server:

Bash
npm run dev
Open http://localhost:3000/dashboard in your browser to start scheduling.
