import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../ui/MagneticButton';
import { site } from '../../data/site';

function useLocalTime() {
  const [time, setTime] = useState('--:--');
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: site.timezone, hour: '2-digit', minute: '2-digit' }).format(new Date()));
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  return time;
}

export function Footer() {
  const time = useLocalTime();
  return <footer className="site-footer">
    <div className="footer-cta"><p className="eyebrow">Have a project in mind?</p><h2>Let’s work<br />together.</h2><MagneticButton className="circle-link" href="/contact"><span>Get in touch</span><span aria-hidden="true">↗</span></MagneticButton></div>
    <div className="footer-meta">
      <Link to="/" className="brand">© Wiken</Link>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <a href={`tel:${site.phone.replaceAll(' ', '')}`}>{site.phone}</a>
      <span>Vietnam · <time>{time}</time> GMT+7</span>
      <div className="footer-socials">{site.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div>
      <button className="back-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>Back to top ↑</button>
      <span>© {new Date().getFullYear()} · Version 2.0</span>
    </div>
  </footer>;
}
