'use client';

import dynamic from 'next/dynamic';
import { useCommandPaletteContext } from './CommandPaletteContext';

// Fetched on first open; the ⌘K listener lives in CommandPaletteProvider, not here.
const CommandPalette = dynamic(() => import('./CommandPalette'));

export default function CommandPaletteHost() {
  const { isOpen, close } = useCommandPaletteContext();
  return isOpen ? <CommandPalette isOpen onClose={close} /> : null;
}
