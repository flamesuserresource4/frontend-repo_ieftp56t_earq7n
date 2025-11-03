import React, { useRef, useState } from 'react';
import { Paperclip, Send, Smile, Mic } from 'lucide-react';

export default function MessageInput() {
  const [value, setValue] = useState('');
  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview({ name: file.name, url, type: file.type });
  };

  const sendMessage = () => {
    if (!value && !preview) return;
    // Here we'd send to backend/socket; for now just clear input
    setValue('');
    setPreview(null);
  };

  return (
    <div className="p-3 border-t border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70">
      {preview && (
        <div className="mb-2 flex items-center gap-3 p-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
          {preview.type.startsWith('image') ? (
            <img src={preview.url} alt={preview.name} className="h-16 w-16 object-cover rounded" />
          ) : (
            <div className="h-16 w-16 rounded bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300">
              <Paperclip className="h-6 w-6" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate">{preview.name}</p>
            <button onClick={() => setPreview(null)} className="text-xs text-rose-600 hover:underline">Remove</button>
          </div>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button onClick={() => fileRef.current?.click()} className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800" aria-label="Attach">
          <Paperclip className="h-5 w-5" />
        </button>
        <input ref={fileRef} type="file" hidden onChange={handleFile} />
        <div className="flex-1 relative">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Message #general"
            className="w-full pl-3 pr-24 py-2 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-neutral-500">
            <button className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800" aria-label="Emoji">
              <Smile className="h-4 w-4" />
            </button>
            <button className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800" aria-label="Voice">
              <Mic className="h-4 w-4" />
            </button>
            <button onClick={sendMessage} className="ml-1 px-2 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm flex items-center gap-1">
              <Send className="h-4 w-4" /> Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
