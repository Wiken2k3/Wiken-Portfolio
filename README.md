# 🧑‍🎨 Wiken Portfolio — Personal Website

🌐 [Xem website](https://wikenportfolio.vercel.app)

**Wiken Portfolio** là một trang web portfolio cá nhân, được xây dựng bằng React, nhằm giới thiệu các kỹ năng, dự án và kinh nghiệm của một nhà phát triển. Website có giao diện hiện đại, hiệu ứng động tinh tế và thiết kế responsive, là một công cụ tuyệt vời để các nhà phát triển thể hiện năng lực của mình trực tuyến.

---

## ✨ Tính Năng Chính

- 🧑‍💻 Giới thiệu bản thân, kỹ năng và công nghệ sử dụng
- 📂 Danh sách dự án cá nhân với demo và mã nguồn
- ✉️ Gửi email trực tiếp thông qua **EmailJS**
- 🌍 Tích hợp bản đồ vị trí bằng **Goong Maps**
- 📱 Responsive UI trên mọi thiết bị
- 🎬 Animation bằng **GSAP** và **Three.js**
- 🎠 Carousel trình chiếu dự án bằng **react-slick**
- 🍞 Toast notification (React Toastify)
- 📦 Code phân chia rõ ràng theo component

## 📧 Cấu hình form liên hệ

Form liên hệ gửi email bằng EmailJS. Để bật gửi trực tiếp ở local, tạo file `.env.local` dựa trên `.env.example` và điền Service ID, Template ID cùng Public Key từ EmailJS. Trong EmailJS, đặt địa chỉ nhận là email của bạn và cấu hình template với các biến `{{name}}`, `{{email}}`, `{{title}}`, `{{message}}`; dùng `{{email}}` làm Reply-To để có thể trả lời người gửi. Nếu đã bật giới hạn domain trong EmailJS, cho phép domain website và `localhost` khi phát triển.

Trên Vercel, thêm ba biến `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` và `VITE_EMAILJS_PUBLIC_KEY` trong **Project Settings → Environment Variables**, áp dụng cho Production (và Preview nếu cần), sau đó redeploy. Public Key được dùng phía trình duyệt; không đặt private key hoặc thông tin SMTP trong biến `VITE_`. Nếu EmailJS chưa cấu hình hoặc gặp sự cố, form cung cấp liên kết mở ứng dụng email để người xem vẫn gửi được lời nhắn.

---

## 🛠️ Tech Stack

| Category               | Technologies                                                             |
|------------------------|--------------------------------------------------------------------------|
| ⚛️ Frontend Framework   | React 19                                                                 |
| 💅 UI Library           | TailwindCSS 4, Bootstrap 5, SCSS                                         |
| 🚦 Routing              | React Router DOM                                                         |
| 🗺️ Map Integration      | Goong Maps, @mapbox/polyline                                             |
| 📧 Email Service        | EmailJS                                                                  |
| 🧩 State Management     | Redux Toolkit                                                            |
| ✨ Animation            | GSAP, Three.js                                                           |
| 🎠 Carousel             | React Slick, Slick Carousel                                              |
| 🔧 Utilities            | Axios, FontAwesome, Toastify                                             |
| 🧪 Code Quality         | ESLint, CRA PWA Template                                                 |
| 📦 Package Manager      | npm                                                                      |
| ⚙️ Dev Tooling          | Autoprefixer, PostCSS                                                    |

---
## 🚀 Cài Đặt & Chạy Dự Án

### 1. Clone project

```bash
git clone https://github.com/Wiken2k3/Wiken-Portfolio.git
cd Wiken-Portfolio
