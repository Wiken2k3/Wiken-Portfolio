import { useEffect } from 'react';
import { setMotionRuntime } from '../../lib/motion';

export function MotionProvider() {
  useEffect(() => {
    let cancelled = false;
    let cancelIdle: number | undefined;
    let cleanup = () => {};
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const start = async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('lenis'),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ lerp: 0.1, syncTouch: false, smoothWheel: true });
      const onScroll = () => ScrollTrigger.update();
      const ticker = (time: number) => lenis.raf(time * 1000);
      lenis.on('scroll', onScroll);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
      setMotionRuntime({ gsap, ScrollTrigger, lenis });
      const refresh = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh);
      window.addEventListener('load', refresh, { once: true });
      const onVisibility = () => document.hidden ? lenis.stop() : lenis.start();
      document.addEventListener('visibilitychange', onVisibility);
      cleanup = () => {
        window.removeEventListener('load', refresh);
        document.removeEventListener('visibilitychange', onVisibility);
        lenis.off('scroll', onScroll);
        gsap.ticker.remove(ticker);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        setMotionRuntime(null);
      };
    };

    const idleWindow = window as Window & { requestIdleCallback?: (callback: () => void, options: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    if (typeof idleWindow.requestIdleCallback === 'function') {
      cancelIdle = idleWindow.requestIdleCallback(() => void start(), { timeout: 1200 });
      return () => {
        cancelled = true;
        if (cancelIdle !== undefined) idleWindow.cancelIdleCallback?.(cancelIdle);
        cleanup();
      };
    }
    const timeout = window.setTimeout(() => void start(), 250);
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      cleanup();
    };
  }, []);

  return null;
}
