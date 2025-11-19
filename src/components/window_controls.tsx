'use client';

import { useEffect, useState } from 'react';

function isTauri(): boolean {
  if (typeof window === 'undefined') return false;
  return '__TAURI_INTERNALS__' in window || '__TAURI__' in window;
}

async function handleMinimize(): Promise<void> {
  try {
    if (!isTauri()) {
      console.warn('Tauri API недоступен');
      return;
    }
    const { getCurrentWindow } = await import('@tauri-apps/api/window');
    const appWindow = getCurrentWindow();
    await appWindow.minimize();
  } catch (error) {
    console.error('Ошибка при сворачивании окна:', error);
  }
}

async function handleMaximize(): Promise<void> {
  try {
    if (!isTauri()) {
      console.warn('Tauri API недоступен');
      return;
    }
    const { getCurrentWindow } = await import('@tauri-apps/api/window');
    const appWindow = getCurrentWindow();
    await appWindow.toggleMaximize();
  } catch (error) {
    console.error('Ошибка при разворачивании окна:', error);
  }
}

async function handleClose(): Promise<void> {
  try {
    if (!isTauri()) {
      console.warn('Tauri API недоступен');
      return;
    }
    const { getCurrentWindow } = await import('@tauri-apps/api/window');
    const appWindow = getCurrentWindow();
    await appWindow.close();
  } catch (error) {
    console.error('Ошибка при закрытии окна:', error);
  }
}

export function WindowControls(): React.ReactElement {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !isTauri()) {
    return <></>;
  }

  return (
    <div className="flex items-center gap-1 px-2 py-1" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
      <button
        type="button"
        onClick={() => {
          handleMinimize().catch(console.error);
        }}
        className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-green-300 hover:text-white transition-colors"
        style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
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
        type="button"
        onClick={() => {
          handleMaximize().catch(console.error);
        }}
        className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-yellow-300 hover:text-white transition-colors"
        style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
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
        type="button"
        onClick={() => {
          handleClose().catch(console.error);
        }}
        className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-red-400 hover:text-white transition-colors"
        style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
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

