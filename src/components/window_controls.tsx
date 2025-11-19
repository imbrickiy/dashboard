'use client';

import { useEffect, useState } from 'react';

function isTauri(): boolean {
  return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
}

async function handleMinimize(): Promise<void> {
  if (!isTauri()) return;
  const { getCurrentWindow } = await import('@tauri-apps/api/window');
  const appWindow = getCurrentWindow();
  await appWindow.minimize();
}

async function handleMaximize(): Promise<void> {
  if (!isTauri()) return;
  const { getCurrentWindow } = await import('@tauri-apps/api/window');
  const appWindow = getCurrentWindow();
  await appWindow.toggleMaximize();
}

async function handleClose(): Promise<void> {
  if (!isTauri()) return;
  const { getCurrentWindow } = await import('@tauri-apps/api/window');
  const appWindow = getCurrentWindow();
  await appWindow.close();
}

export function WindowControls(): JSX.Element {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !isTauri()) {
    return <></>;
  }

  return (
    <div className="flex items-center gap-1 px-2 py-1">
      <button
        onClick={handleMinimize}
        className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        aria-label="Свернуть"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6H10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button
        onClick={handleMaximize}
        className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        aria-label="Развернуть"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3H9V10H2V3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={handleClose}
        className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-red-500 hover:text-white transition-colors"
        aria-label="Закрыть"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3L9 9M9 3L3 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

