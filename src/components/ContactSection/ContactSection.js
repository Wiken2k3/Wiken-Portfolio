// src/components/ContactSection/ContactSection.js
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';
import './ContactSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const form = formRef.current;
    const name = form['name'].value.trim();
    const email = form['email'].value.trim();

    if (!name || !email) {
      alert('❗ Vui lòng điền đầy đủ Họ tên và Email.');
      setSending(false);
      return;
    }

    emailjs
      .sendForm(
        'wiken_2k3',             // ✅ Service ID (đúng với bạn cung cấp)
        'template_0c5bc9d',     // ✅ Template ID (đúng template bạn dùng)
        formRef.current,
        'aGRLFoUwhNfMc7rOw'     // ✅ Public Key
      )
      .then(() => {
        alert('✅ Cảm ơn bạn! Tin nhắn đã được gửi thành công.');
        form.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error('❌ Lỗi gửi email:', error.text || error);
        alert('❌ Đã xảy ra lỗi khi gửi email. Vui lòng thử lại sau.');
        setSending(false);
      });
  };

  return (
    <section className="contact-section" id="contact" ref={contactRef}>
      <div className="contact-header text-center">
        <h2>Liên hệ</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi, yêu cầu hợp tác, hoặc muốn kết nối cùng tôi,
          vui lòng để lại thông tin bên dưới. Tôi luôn sẵn sàng lắng nghe và phản hồi trong thời gian sớm nhất.
        </p>
      </div>

      <Container>
        {/* Hai khối liên hệ nhanh */}
        <Row className="contact-options">
          <Col md={6}>
            <div className="contact-box">
              <div className="icon">📞</div>
              <h5><strong>Trao đổi công việc</strong></h5>
              <p>
                Nếu bạn quan tâm đến hồ sơ năng lực hoặc muốn thảo luận về cơ hội hợp tác,
                hãy liên hệ trực tiếp qua số điện thoại dưới đây.
              </p>
              <Button variant="outline-danger">(+84) 0989 648 691</Button>
            </div>
          </Col>

          <Col md={6}>
            <div className="contact-box">
              <div className="icon">💬</div>
              <h5><strong>Liên hệ qua Email</strong></h5>
              <p>
                Gửi email cho tôi nếu bạn cần hỗ trợ, muốn kết nối hoặc có bất kỳ lời mời hợp tác nào.
                Tôi sẽ phản hồi nhanh nhất có thể.
              </p>
              <Button
                variant="danger"
                href="mailto:Wiken2k3@gmail.com?subject=Liên hệ từ Portfolio&body=Chào anh Tuấn, tôi muốn liên hệ với anh về..."
              >
                Gửi Email
              </Button>
            </div>
          </Col>
        </Row>

        {/* Form liên hệ chính */}
        <div className="contact-form-wrapper mt-5">
          <h5 className="text-center"><strong>Đặt một câu hỏi</strong></h5>
          <hr className="form-divider" />
          <Form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Họ và tên của bạn (bắt buộc)</Form.Label>
              <Form.Control type="text" name="name" required placeholder="Tên..." />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email liên hệ (bắt buộc)</Form.Label>
              <Form.Control type="email" name="email" required placeholder="Email..." />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Chủ đề (tiêu đề)</Form.Label>
              <Form.Control type="text" name="title" required placeholder="VD: Ứng tuyển, Hợp tác..." />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nội dung lời nhắn</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" required placeholder="Lời nhắn..." />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" disabled={sending}>
                {sending ? 'Đang gửi...' : 'Gửi lời nhắn'}
              </Button>
            </div>
          </Form>
        </div>
      </Container>

      {/* Bản đồ Google Map */}
      <div className="map-wrapper">
        <div className="map-iframe-container">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15672.26114081342!2d106.78244315!3d10.88263915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d88b09f6692d%3A0xe8b33e0bf3a40380!2zMjkyMTYgR1MxNCwgxJDDtG5nIEhvw6AsIFRo4bunIMSQ4bupYywgQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1746939731469!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
