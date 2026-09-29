// Ensure window.fetch has a setter in environments with getter-only Window.fetch
try {
  const fetchDesc = Object.getOwnPropertyDescriptor(window, 'fetch') ||
                    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(window), 'fetch');
  if (fetchDesc && !fetchDesc.writable && !fetchDesc.set) {
    let currentFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get: () => currentFetch,
      set: (fn) => { currentFetch = fn; },
      configurable: true,
      enumerable: true
    });
  }
} catch {
  // safe fallback
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
