'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useRef, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio-theme';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored && ['light', 'dark', 'system'].includes(stored)) return stored;
  } catch {
    // ignore
  }
  return 'system';
}

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const themeRef = useRef<Theme>('system');

  const applyTheme = useCallback((nextTheme: Theme) => {
    const resolved = nextTheme === 'system' ? getSystemTheme() : nextTheme;
    const root = document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(resolved);
    root.style.colorScheme = resolved;
    setResolvedTheme(resolved);
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    themeRef.current = nextTheme;
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // ignore
    }
    applyTheme(nextTheme);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  // Initialize theme on mount
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setThemeState(initialTheme);
    themeRef.current = initialTheme;
    applyTheme(initialTheme);
    setMounted(true);
  }, [applyTheme]);

  // Listen for system preference changes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themeRef.current === 'system') {
        applyTheme('system');
      }
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [applyTheme]);

  // Re-apply when theme state changes (especially for system sync)
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted, applyTheme]);

  // Listen for storage changes across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        const next = e.newValue as Theme;
        setThemeState(next);
        themeRef.current = next;
        applyTheme(next);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
