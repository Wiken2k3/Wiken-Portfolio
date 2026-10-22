import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { getMotionRuntime } from '../../lib/motion';

export function PageTransition() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const [active, setActive] = useState(false);
  const first = useRef(true);

  useLayoutEffect(() => {
    if (first.current) { first.current = false; return; }
    setActive(true);
    if (navigationType !== 'POP') {
      const runtime = getMotionRuntime();
      runtime?.lenis.scrollTo(0, { immediate: true });
      if (!runtime) window.scrollTo({ top: 0, behavior: 'instant' });
    }
    const reveal = window.setTimeout(() => setActive(false), 520);
    return () => window.clearTimeout(reveal);
  }, [pathname, navigationType]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => getMotionRuntime()?.ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return <div className={`page-transition${active ? ' is-active' : ''}`} aria-hidden="true"><span>{pathname === '/' ? 'Home' : pathname.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ') ?? 'Wiken'}</span><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0 0h1440v48c-240 80-480 80-720 0C480-32 240-32 0 48z" /></svg></div>;
}
