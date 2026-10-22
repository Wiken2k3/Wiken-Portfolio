import { useEffect, useRef } from 'react';
import { subscribeMotion } from '../../lib/motion';

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    let cleanupRuntime = () => {};
    const unsubscribe = subscribeMotion((runtime) => {
      cleanupRuntime();
      if (!runtime || !ref.current) return;
      const xTo = runtime.gsap.quickTo(ref.current, 'x', { duration: 0.35, ease: 'power3.out' });
      const yTo = runtime.gsap.quickTo(ref.current, 'y', { duration: 0.35, ease: 'power3.out' });
      const onMove = (event: PointerEvent) => {
        xTo(event.clientX - 6);
        yTo(event.clientY - 6);
        ref.current?.classList.add('has-moved');
      };
      const onOver = (event: PointerEvent) => {
        const target = event.target instanceof Element ? event.target.closest('a, button, [data-cursor]') : null;
        ref.current?.classList.toggle('cursor-active', Boolean(target));
        ref.current?.classList.toggle('cursor-view', target?.getAttribute('data-cursor') === 'view');
      };
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerover', onOver, { passive: true });
      cleanupRuntime = () => {
        window.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerover', onOver);
      };
    });
    return () => { unsubscribe(); cleanupRuntime(); };
  }, []);

  return <div ref={ref} className="custom-cursor" aria-hidden="true"><span>View</span></div>;
}
