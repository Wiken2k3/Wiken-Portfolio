import { useEffect, useRef, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { subscribeMotion } from '../../lib/motion';

type MagneticProps = {
  children: ReactNode;
  className?: string;
  to?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href?: string };

export function MagneticButton({ children, className = '', to, href, ...props }: MagneticProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    let cleanupRuntime = () => {};
    const unsubscribe = subscribeMotion((runtime) => {
      cleanupRuntime();
      const element = ref.current;
      if (!runtime || !element) return;
      const xTo = runtime.gsap.quickTo(element, 'x', { duration: 0.45, ease: 'power3.out' });
      const yTo = runtime.gsap.quickTo(element, 'y', { duration: 0.45, ease: 'power3.out' });
      const onMove = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        xTo((event.clientX - rect.left - rect.width / 2) * 0.18);
        yTo((event.clientY - rect.top - rect.height / 2) * 0.18);
      };
      const onLeave = () => { xTo(0); yTo(0); };
      element.addEventListener('pointermove', onMove, { passive: true });
      element.addEventListener('pointerleave', onLeave);
      cleanupRuntime = () => { element.removeEventListener('pointermove', onMove); element.removeEventListener('pointerleave', onLeave); };
    });
    return () => { unsubscribe(); cleanupRuntime(); };
  }, []);

  const classes = `magnetic-button ${className}`;
  return to ? <Link ref={ref} className={classes} to={to} {...props}>{children}</Link> : <a ref={ref} className={classes} href={href} {...props}>{children}</a>;
}
