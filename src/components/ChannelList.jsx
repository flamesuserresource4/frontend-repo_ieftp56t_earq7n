import React from 'react';
import { Plus, Search } from 'lucide-react';

const channels = [
  { id: 'general', name: 'general' },
  { id: 'random', name: 'random' },
  { id: 'design', name: 'design' },
  { id: 'dev', name: 'dev' },
];

export default function ChannelList() {
  return (
    <aside className="h-full w-64 flex flex-col border-r border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/60">
      <div className="p-3 flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="font-semibold">Echo Server</h2>
        <button className="ml-auto p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800" aria-label="Create Channel">
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-400" />
          <input
            className="w-full pl-8 pr-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none"
            placeholder="Search channels"
          />
        </div>
      </div>
      <nav className="px-2 space-y-1 overflow-y-auto">
        {channels.map((c) => (
          <button key={c.id} className="w-full text-left px-3 py-2 rounded-md hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition">
            <span className="text-neutral-500 mr-1">#</span>
            <span>{c.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
