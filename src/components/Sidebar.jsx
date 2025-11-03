import React from 'react';
import { MessageSquare, Plus, Settings, User, LogOut } from 'lucide-react';

const servers = [
  { id: '1', name: 'Echo', color: 'bg-indigo-500' },
  { id: '2', name: 'Dev', color: 'bg-emerald-500' },
  { id: '3', name: 'Games', color: 'bg-rose-500' },
];

export default function Sidebar() {
  return (
    <aside className="h-full w-16 flex flex-col items-center gap-3 py-3 border-r border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
      <button className="p-3 rounded-xl bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition" aria-label="Direct Messages">
        <MessageSquare className="h-5 w-5" />
      </button>
      <div className="w-8 h-px bg-neutral-300 dark:bg-neutral-700" />
      <div className="flex flex-col items-center gap-2">
        {servers.map((s) => (
          <button key={s.id} className={`h-12 w-12 rounded-2xl ${s.color} text-white font-semibold hover:rounded-xl transition-all`}>
            {s.name[0]}
          </button>
        ))}
        <button className="h-12 w-12 rounded-2xl bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center transition" aria-label="Add Server">
          <Plus className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-auto flex flex-col items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition" aria-label="Profile">
          <User className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition" aria-label="Settings">
          <Settings className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition" aria-label="Logout">
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}
