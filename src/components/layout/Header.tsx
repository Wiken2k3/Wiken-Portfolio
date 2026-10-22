import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getMotionRuntime } from '../../lib/motion';

const navItems = [{ label: 'Work', to: '/work' }, { label: 'About', to: '/about' }, { label: 'Contact', to: '/contact' }];

export function Header({ embedded = false }: { embedded?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 560 && current > previous);
      previous = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = 'hidden';
    getMotionRuntime()?.lenis.stop();
    overlayRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); return; }
      if (event.key !== 'Tab' || !overlayRef.current) return;
      const focusable = [...overlayRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      getMotionRuntime()?.lenis.start();
      trigger?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);
  return (
    <>
      <header className={`site-header${embedded ? ' site-header--hero' : ''}${scrolled ? ' is-hidden' : ''}`}>
        <Link className="brand" to="/" aria-label="Wiken home">© Wiken</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to}>{item.label}<span aria-hidden="true">↗</span></NavLink>)}
        </nav>
        <button ref={triggerRef} className="menu-button" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-menu" aria-label="Open menu">Menu</button>
      </header>
      <div id="site-menu" ref={overlayRef} className={`menu-overlay${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="menu-overlay-top"><Link className="brand" to="/" onClick={close}>© Wiken</Link><button type="button" className="menu-close" onClick={close} aria-label="Close menu">Close <span aria-hidden="true">×</span></button></div>
        <nav className="menu-links" aria-label="Full screen navigation" inert={!open}>
          {navItems.map((item, index) => <Link key={item.to} to={item.to} onClick={close}><span>0{index + 1}</span>{item.label}<i aria-hidden="true">↗</i></Link>)}
        </nav>
        <div className="menu-socials">{['GitHub', 'LinkedIn', 'Facebook'].map((name, i) => <a key={name} href={['https://github.com/Wiken2k3', 'https://www.linkedin.com/in/wiken2k3/', 'https://www.facebook.com/Wiken2k3/'][i]} target="_blank" rel="noreferrer">{name}</a>)}</div>
      </div>
    </>
  );
}
