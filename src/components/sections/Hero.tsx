import { useEffect, useRef, useState, type Ref } from 'react';
import { Link } from 'react-router-dom';
import { PORTRAIT_ASPECT_RATIO, PORTRAIT_SRC, site } from '../../data/site';
import { getMotionRuntime, subscribeMotion } from '../../lib/motion';
import { Picture } from '../ui/Picture';

function Globe() {
  return <svg className="hero__globe" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.4 2.5 3.5 5.5 3.5 9s-1.1 6.5-3.5 9c-2.4-2.5-3.5-5.5-3.5-9S9.6 5.5 12 3Z" />
  </svg>;
}

const phrase = ['Wiken', '—'];
type MarqueeTween = { progress: (value?: number) => number; kill: () => void; paused: (value?: boolean) => boolean; timeScale: (value?: number) => number };
type LenisScroll = { velocity?: number };

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLSpanElement>(null);
  const groupRef = useRef<HTMLSpanElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'teal' | 'studio'>('teal');

  useEffect(() => {
    if (import.meta.env.DEV) {
      const requested = new URLSearchParams(window.location.search).get('hero');
      if (requested === 'teal' || requested === 'studio') setTheme(requested);
    }
  }, []);

  useEffect(() => {
    let cleanupRuntime = () => {};
    const unsubscribe = subscribeMotion((runtime) => {
      cleanupRuntime();
      const hero = heroRef.current;
      const background = backgroundRef.current;
      const band = bandRef.current;
      const track = trackRef.current;
      const group = groupRef.current;
      const figure = figureRef.current;
      const portrait = figure?.querySelector('img');
      const ui = uiRef.current;
      if (!runtime || !hero || !background || !band || !track || !group || !figure || !portrait || !ui) return;

      const context = runtime.gsap.context(() => {
        const media = runtime.gsap.matchMedia();
        let marquee: MarqueeTween | undefined;
        let resizeObserver: ResizeObserver | undefined;
        let lastWidth = 0;
        let visible = true;
        let hidden = document.hidden;
        const speed = { value: 1 };
        const speedTo = runtime.gsap.quickTo(speed, 'value', { duration: 0.45, ease: 'power2.out' });
        const figureXTo = runtime.gsap.quickTo(portrait, 'x', { duration: 0.7, ease: 'power3.out' });
        const bandXTo = runtime.gsap.quickTo(band, 'x', { duration: 0.7, ease: 'power3.out' });
        const bandYTo = runtime.gsap.quickTo(band, 'y', { duration: 0.7, ease: 'power3.out' });

        const measure = (force = false) => {
          const width = hero.getBoundingClientRect().width;
          if (!force && Math.abs(width - lastWidth) < 1) return;
          lastWidth = width;
          const groupWidth = group.getBoundingClientRect().width;
          if (!groupWidth) return;
          const pixelsPerSecond = window.matchMedia('(max-width: 767px)').matches
            ? Math.max(72, width * 0.22)
            : 86;
          const progress = marquee?.progress() ?? 0;
          marquee?.kill();
          marquee = runtime.gsap.to(track, {
            xPercent: -50,
            ease: 'none',
            duration: groupWidth / pixelsPerSecond,
            repeat: -1,
          });
          marquee.progress(progress);
          marquee.paused(!visible || hidden);
        };

        const onVisibility = () => {
          hidden = document.hidden;
          marquee?.paused(hidden || !visible);
        };
        const onLenisScroll = (event: LenisScroll) => {
          speedTo(Math.max(0.85, Math.min(1.16, 1 + (event.velocity ?? 0) * 0.0015)));
        };
        const ticker = () => marquee?.timeScale(speed.value);
        runtime.lenis.on('scroll', onLenisScroll);
        runtime.gsap.ticker.add(ticker);
        document.addEventListener('visibilitychange', onVisibility);

        media.add('(prefers-reduced-motion: no-preference)', () => {
          const observer = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            marquee?.paused(!visible || hidden);
            hero.classList.toggle('hero--in-view', visible);
          });
          observer.observe(hero);

          const onPointer = (event: PointerEvent) => {
            const bounds = hero.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            figureXTo(-x * 12);
            bandXTo(-x * 28);
            bandYTo(-y * 20);
            background.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
            background.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
          };
          const pointerMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
          if (pointerMedia.matches) hero.addEventListener('pointermove', onPointer, { passive: true });

          resizeObserver = new ResizeObserver(measure);
          resizeObserver.observe(hero);
          void document.fonts.ready.then(() => measure(true));
          measure();

          runtime.gsap.fromTo(background, { opacity: 0.82 }, { opacity: 1, duration: 0.7, ease: 'power2.out' });
          runtime.gsap.fromTo(portrait, { y: '4%', scale: 1.03 }, { y: '0%', scale: 1, duration: 0.9, ease: 'power3.out' });
          runtime.gsap.fromTo(band, { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 0.2, ease: 'power2.out' });
          runtime.gsap.fromTo(ui.children, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, delay: 0.12, ease: 'power2.out' });
          runtime.gsap.to(figure, { y: '6%', ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 } });
          runtime.gsap.to(background, { scale: 1.06, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 } });
          runtime.gsap.to(band, { xPercent: 3, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.8 } });

          return () => {
            observer.disconnect();
            resizeObserver?.disconnect();
            hero.removeEventListener('pointermove', onPointer);
          };
        });

        return () => {
          resizeObserver?.disconnect();
          marquee?.kill();
          runtime.gsap.ticker.remove(ticker);
          runtime.lenis.off('scroll', onLenisScroll);
          document.removeEventListener('visibilitychange', onVisibility);
          hero.classList.remove('hero--in-view');
          band.style.removeProperty('will-change');
          figure.style.removeProperty('will-change');
          background.style.removeProperty('will-change');
        };
      }, heroRef);
      cleanupRuntime = () => context.revert();
    });
    return () => { unsubscribe(); cleanupRuntime(); };
  }, []);

  const renderGroup = (ref?: Ref<HTMLSpanElement>) => <span className="hero__name-group" ref={ref}>
    {Array.from({ length: 16 }, (_, index) => <span className="hero__name-phrase" key={index}>{phrase.map((word) => <span key={word}>{word}</span>)}</span>)}
  </span>;

  return <section className="hero" data-hero data-theme={theme} ref={heroRef}>
    <div className="hero__bg" ref={backgroundRef} aria-hidden="true" />
    <div className="hero__stage">
      <div className="hero__band" ref={bandRef} aria-hidden="true">
        <div className="hero__track" ref={trackRef}>{renderGroup(groupRef)}{renderGroup()}</div>
      </div>
      <div className="hero__figure" ref={figureRef}>
        <Picture wrapperClassName="hero__portrait" className="hero__portrait-image" base={PORTRAIT_SRC} alt="Trần Quốc Tuấn in graduation attire, holding his diploma" width={Math.round(1000 * PORTRAIT_ASPECT_RATIO)} height={1000} sizes="(max-width: 767px) 110vw, (max-width: 1023px) 62vw, 60vw" priority onLoad={() => getMotionRuntime()?.ScrollTrigger.refresh()} />
      </div>
    </div>
    <div className="hero__ui" ref={uiRef}>
      <div className="hero__pill"><span>Located in Vietnam</span><Globe /></div>
      <div className="hero__role"><span aria-hidden="true">—</span><p>Frontend Developer<br />&amp; Digital Creator</p><span className="hero__arrow" aria-hidden="true">↘</span></div>
      <Link to="/work" className="hero__scroll">Scroll to explore <span aria-hidden="true">↓</span></Link>
    </div>
    <h1 className="sr-only">Wiken, Frontend Developer &amp; Digital Creator</h1>
  </section>;
}
