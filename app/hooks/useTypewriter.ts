'use client';

import { useEffect, useRef, useState } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const stateRef = useRef({
    wordIndex: 0,
    isDeleting: false,
    text: '',
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const state = stateRef.current;
      const currentWord = words[state.wordIndex];

      if (state.isDeleting) {
        if (state.text === '') {
          state.isDeleting = false;
          state.wordIndex = (state.wordIndex + 1) % words.length;
          setDisplayText('');
          timeoutId = setTimeout(tick, typingSpeed);
        } else {
          state.text = currentWord.slice(0, state.text.length - 1);
          setDisplayText(state.text);
          timeoutId = setTimeout(tick, deletingSpeed);
        }
      } else {
        if (state.text === currentWord) {
          state.isDeleting = true;
          timeoutId = setTimeout(tick, pauseDuration);
        } else {
          state.text = currentWord.slice(0, state.text.length + 1);
          setDisplayText(state.text);
          timeoutId = setTimeout(tick, typingSpeed);
        }
      }
    };

    timeoutId = setTimeout(tick, typingSpeed);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.join('|'), typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
