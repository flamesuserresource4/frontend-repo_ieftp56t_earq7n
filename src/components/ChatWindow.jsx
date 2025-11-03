import React from 'react';
import { Smile } from 'lucide-react';

const mockMessages = [
  {
    id: 1,
    user: { name: 'Ava', avatar: 'https://i.pravatar.cc/100?img=5' },
    text: 'Welcome to EchoChat! This is the beginning of your conversation.',
    time: '10:02 AM',
    reactions: { '👍': 2, '🔥': 1 },
  },
  {
    id: 2,
    user: { name: 'Liam', avatar: 'https://i.pravatar.cc/100?img=15' },
    text: 'Loving the sleek UI and dark mode. Great vibes. ✨',
    time: '10:05 AM',
    reactions: { '✨': 3 },
  },
  {
    id: 3,
    user: { name: 'You', avatar: 'https://i.pravatar.cc/100?img=3' },
    text: 'Typing indicators, reactions, and more coming soon! ',
    time: '10:07 AM',
    reactions: {},
  },
];

export default function ChatWindow() {
  return (
    <section className="flex-1 flex flex-col">
      <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
        <div className="text-neutral-500">#</div>
        <h1 className="font-semibold">general</h1>
        <div className="ml-auto text-xs text-neutral-500 flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
          Online
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-white dark:bg-neutral-950">
        {mockMessages.map((m) => (
          <div key={m.id} className="flex items-start gap-3 group">
            <img src={m.user.avatar} alt={m.user.name} className="h-10 w-10 rounded-full" />
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-medium truncate max-w-[12rem]">{m.user.name}</span>
                <span className="text-xs text-neutral-500">{m.time}</span>
              </div>
              <p className="text-sm leading-relaxed break-words">
                {m.text}
              </p>
              {Object.keys(m.reactions).length > 0 && (
                <div className="flex gap-1 mt-2">
                  {Object.entries(m.reactions).map(([emoji, count]) => (
                    <button key={emoji} className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-xs border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70">
                      {emoji} <span className="ml-1 text-neutral-500">{count}</span>
                    </button>
                  ))}
                </div>
              )}
              <div className="opacity-0 group-hover:opacity-100 transition mt-1 flex gap-2 text-neutral-500">
                <button className="text-xs hover:text-neutral-700 dark:hover:text-neutral-300">Reply</button>
                <button className="text-xs hover:text-neutral-700 dark:hover:text-neutral-300">Edit</button>
                <button className="text-xs hover:text-neutral-700 dark:hover:text-neutral-300">Delete</button>
                <button className="text-xs hover:text-neutral-700 dark:hover:text-neutral-300 flex items-center gap-1">
                  <Smile className="h-3 w-3" /> React
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
