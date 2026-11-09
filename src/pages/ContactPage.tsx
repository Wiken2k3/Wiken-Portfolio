import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SEO } from '../components/ui/SEO';
import { site } from '../data/site';

type Status = { kind: 'success' | 'error'; message: string; fallbackUrl?: string } | null;

function createMailtoUrl(data: FormData) {
  const subject = String(data.get('title') ?? '').trim();
  const body = [
    `Họ tên: ${String(data.get('name') ?? '').trim()}`,
    `Email: ${String(data.get('email') ?? '').trim()}`,
    '',
    String(data.get('message') ?? '').trim(),
  ].join('\n');

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

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

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const title = String(data.get('title') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const fallbackUrl = createMailtoUrl(data);
    if (name.length < 2 || !email || title.length < 3 || message.length < 10) {
      setStatus({ kind: 'error', message: 'Vui lòng kiểm tra lại thông tin. Nội dung lời nhắn cần ít nhất 10 ký tự.', fallbackUrl });
      return;
    }

    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!service || !template || !key) {
      setStatus({ kind: 'error', message: 'Tính năng gửi trực tiếp chưa được cấu hình. Bạn vẫn có thể gửi lời nhắn qua ứng dụng email.', fallbackUrl });
      return;
    }
    setSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(service, template, form, { publicKey: key });
      form.reset();
      setStatus({ kind: 'success', message: 'Cảm ơn bạn! Lời nhắn đã được gửi thành công.' });
    } catch {
      setStatus({ kind: 'error', message: 'Chưa thể gửi lời nhắn lúc này. Bạn có thể thử lại hoặc gửi qua ứng dụng email.', fallbackUrl });
    } finally {
      setSending(false);
    }
  };

  return <>
    <SEO title="Contact Wiken — Let’s work together" description="Contact Trần Quốc Tuấn (Wiken) about frontend development opportunities and collaborations." path="/contact" />
    <section className="page-intro contact-intro section-pad"><p className="eyebrow">Have an idea?</p><h1>Let’s work<br />together.</h1><a className="contact-email" href={`mailto:${site.email}`}>{site.email} ↗</a></section>
    <section className="contact-content section-pad"><div className="contact-copy"><p className="eyebrow">Get in touch</p><h2>Tell me a little<br />about your project.</h2><p>If you have a question, collaboration request or opportunity, leave me a message and I’ll get back to you.</p><a className="text-link" href={`tel:${site.phone.replaceAll(' ', '')}`}>{site.phone}</a></div>
      <form ref={formRef} className="contact-form" onSubmit={submit}>
        <div className="contact-form-heading"><h3>Đặt một câu hỏi</h3><p>Tôi thường phản hồi trong vòng 1–2 ngày làm việc.</p></div>
        <div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <label htmlFor="contact-name">Họ và tên của bạn (bắt buộc)<input id="contact-name" type="text" name="name" placeholder="Tên của bạn..." autoComplete="name" required minLength={2} maxLength={100} /></label>
        <label htmlFor="contact-email">Email liên hệ (bắt buộc)<input id="contact-email" type="email" name="email" placeholder="email@example.com" autoComplete="email" required maxLength={180} /></label>
        <label htmlFor="contact-subject">Chủ đề (bắt buộc)<input id="contact-subject" type="text" name="title" placeholder="VD: Ứng tuyển, hợp tác..." required minLength={3} maxLength={160} /></label>
        <label htmlFor="contact-message">Nội dung lời nhắn (bắt buộc)<textarea id="contact-message" name="message" placeholder="Hãy chia sẻ thêm một chút..." rows={5} required minLength={10} maxLength={4000} /></label>
        <div className="contact-form-actions"><button className="form-submit" type="submit" disabled={sending}>{sending ? 'Đang gửi lời nhắn…' : 'Gửi lời nhắn'} <span aria-hidden="true">↗</span></button><span className="form-privacy">Thông tin của bạn chỉ được dùng để phản hồi liên hệ này.</span></div>
        <p className={`form-status ${status?.kind ?? ''}`} role="status" aria-live="polite">{status?.message}{status?.fallbackUrl && <> <a href={status.fallbackUrl}>Mở ứng dụng email ↗</a></>}</p>
      </form>
    </section>
    <section className="map-section section-pad"><div className="map-heading"><p className="eyebrow">Based in Vietnam</p><h2>Always open<br />to good ideas.</h2><MagneticButton className="circle-link" href={`mailto:${site.email}`}><span>Say hello</span><span aria-hidden="true">↗</span></MagneticButton></div><div className="map-frame" ref={mapRef}>{mapVisible ? <iframe title="Map showing Vietnam" src={site.mapEmbed} loading="lazy" width="100%" height="450" allowFullScreen referrerPolicy="no-referrer-when-downgrade" /> : <div className="map-placeholder" aria-hidden="true">Vietnam · GMT+7</div>}</div></section>
  </>;
}

export { ContactPage as Component };
