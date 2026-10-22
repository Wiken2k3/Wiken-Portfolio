import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SEO } from '../components/ui/SEO';
import { site } from '../data/site';

type Status = { kind: 'success' | 'error'; message: string } | null;

export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapVisible, setMapVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    const target = mapRef.current;
    if (!target) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setMapVisible(true); observer.disconnect(); }
    }, { rootMargin: '240px' });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form || sending) return;
    const data = new FormData(form);
    if (String(data.get('website') ?? '').trim()) return;
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!service || !template || !key) {
      setStatus({ kind: 'error', message: 'The contact form is not configured yet. Please email me directly.' });
      return;
    }
    setSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(service, template, form, { publicKey: key });
      form.reset();
      setStatus({ kind: 'success', message: 'Thank you — your message has been sent.' });
    } catch {
      setStatus({ kind: 'error', message: 'Message could not be sent. Please try again or email me directly.' });
    } finally {
      setSending(false);
    }
  };

  return <>
    <SEO title="Contact Wiken — Let’s work together" description="Contact Trần Quốc Tuấn (Wiken) about frontend development opportunities and collaborations." path="/contact" />
    <section className="page-intro contact-intro section-pad"><p className="eyebrow">Have an idea?</p><h1>Let’s work<br />together.</h1><a className="contact-email" href={`mailto:${site.email}`}>{site.email} ↗</a></section>
    <section className="contact-content section-pad"><div className="contact-copy"><p className="eyebrow">Get in touch</p><h2>Tell me a little<br />about your project.</h2><p>If you have a question, collaboration request or opportunity, leave me a message and I’ll get back to you.</p><a className="text-link" href={`tel:${site.phone.replaceAll(' ', '')}`}>{site.phone}</a></div>
      <form ref={formRef} className="contact-form" onSubmit={submit}>
        <div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <label>Your name<input type="text" name="name" autoComplete="name" required maxLength={100} /></label>
        <label>Email address<input type="email" name="email" autoComplete="email" required maxLength={180} /></label>
        <label>Subject<input type="text" name="title" required maxLength={160} /></label>
        <label>Message<textarea name="message" rows={5} required maxLength={4000} /></label>
        <button className="form-submit" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span></button>
        <p className={`form-status ${status?.kind ?? ''}`} role="status" aria-live="polite">{status?.message}</p>
      </form>
    </section>
    <section className="map-section section-pad"><div className="map-heading"><p className="eyebrow">Based in Vietnam</p><h2>Always open<br />to good ideas.</h2><MagneticButton className="circle-link" href={`mailto:${site.email}`}><span>Say hello</span><span aria-hidden="true">↗</span></MagneticButton></div><div className="map-frame" ref={mapRef}>{mapVisible ? <iframe title="Map showing Vietnam" src={site.mapEmbed} loading="lazy" width="100%" height="450" allowFullScreen referrerPolicy="no-referrer-when-downgrade" /> : <div className="map-placeholder" aria-hidden="true">Vietnam · GMT+7</div>}</div></section>
  </>;
}

export { ContactPage as Component };
