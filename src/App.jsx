import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import ChannelList from './components/ChannelList.jsx';
import ChatWindow from './components/ChatWindow.jsx';
import MessageInput from './components/MessageInput.jsx';
import { Moon, Sun } from 'lucide-react';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      <header className="h-12 flex items-center px-3 gap-2 border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
        <div className="font-semibold">EchoChat</div>
        <div className="ml-auto">
          <button
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            aria-label="Toggle Theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="text-sm">{dark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      <main className="h-[calc(100vh-3rem)] flex">
        <Sidebar />
        <ChannelList />
        <div className="flex-1 flex flex-col">
          <ChatWindow />
          <MessageInput />
        </div>
      </main>
    </div>
  );
}
