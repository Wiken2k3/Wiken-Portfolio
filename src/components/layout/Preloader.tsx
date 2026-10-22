import { useEffect, useState } from 'react';

const greetings = ['Hello', 'Xin chào', 'Bonjour', 'こんにちは', 'Hola'];

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [greeting, setGreeting] = useState(greetings[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try {
      if (window.sessionStorage.getItem('wiken-intro-seen')) return;
      window.sessionStorage.setItem('wiken-intro-seen', '1');
    } catch {
      return;
    }
    setVisible(true);
    let index = 0;
    const interval = window.setInterval(() => {
      index = (index + 1) % greetings.length;
      setGreeting(greetings[index]);
    }, 150);
    const timeout = window.setTimeout(() => setVisible(false), 1750);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;
  return <div className="preloader" aria-hidden="true"><span>{greeting}</span><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0 0h1440v48c-240 80-480 80-720 0C480-32 240-32 0 48z" /></svg></div>;
}
