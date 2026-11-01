'use client';

import { useCommandPaletteContext } from './CommandPaletteContext';

interface CommandPaletteTriggerProps {
  className?: string;
  showLabel?: boolean;
  showShortcut?: boolean;
  size?: 'sm' | 'md';
}

export default function CommandPaletteTrigger({
  className = '',
  showLabel = true,
  showShortcut = true,
  size = 'md',
}: CommandPaletteTriggerProps) {
  const { open } = useCommandPaletteContext();

  const iconSize = size === 'sm' ? 'w-5 h-5' : 'w-4 h-4';

  return (
    <button
      type="button"
      onClick={open}
      className={`flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors ${className}`}
      aria-label="Search ⌘K"
      title="Open command palette (Cmd+K)"
    >
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      {(showLabel || showShortcut) && (
        <span className="hidden lg:inline">
          {showLabel && 'Search '}
          {showShortcut && (
            <kbd className="inline-flex items-center px-1.5 py-0.5 rounded font-mono text-[11px] border border-line">
              ⌘K
            </kbd>
          )}
        </span>
      )}
    </button>
  );
}
