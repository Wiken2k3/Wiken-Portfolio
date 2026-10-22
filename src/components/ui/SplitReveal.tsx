import { useEffect, useRef } from 'react';

export function SplitReveal({ children, className = '' }: { children: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-revealed');
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [children]);
  return <p ref={ref} className={`split-reveal ${className}`}>{children}</p>;
}
