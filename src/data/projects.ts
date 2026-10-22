export interface Project {
  order: number;
  slug: string;
  title: string;
  category: string;
  tech: string[];
  image?: string;
  alt?: string;
  description?: string;
  role?: string;
  company?: string;
  year?: string;
  frontend?: string;
  backend?: string;
  stack?: string;
  features?: string[];
  demo?: string;
  github?: string | { frontend: string; backend: string };
  buttonText?: string;
}

export const projects: Project[] = [
  { order: 1, slug: 'taxi-tay-ninh', title: 'Taxi Tây Ninh', category: 'Commercial', tech: ['ReactJS'], alt: 'Taxi Tây Ninh booking website', role: 'Thực tập sinh Frontend Developer (06/2024 – 09/2024)', company: 'Công Ty IT-Global Technology Solutions Co., Ltd (IT-Global)', frontend: 'HTML, CSS, JavaScript, ReactJS, Bootstrap 5, React Router DOM, Axios, React Toastify, Responsive', backend: 'NestJS', github: 'https://github.com/Wiken2k3/Taxi-Tay-Ninh.git' },
  { order: 2, slug: 'hotwheels-shop', title: 'Hotwheels Shop', category: 'E-commerce', tech: ['Next.js'], image: '/assets/hotwheelsshop', alt: 'Hotwheels Shop e-commerce website', description: 'Modern E-commerce with TypeScript', stack: 'Next.js, TypeScript, Zustand, Tailwind CSS, ShadCN UI, Responsive Layout, React Hook Form, Zod, RTK Query, Jest, ESLint, Prettier', github: 'https://github.com/Wiken2k3/Hotwheels-Shop' },
  { order: 3, slug: 'the-invincible-web3', title: 'The Invincible - Web3 Farming Game', category: 'Web3', tech: ['ReactJS', 'TypeScript', 'Vite'], image: '/assets/invincible', alt: 'The Invincible Web3 farming game', description: 'Một Web3 Mini Farming Game, mô phỏng trải nghiệm Play-to-Earn hoàn toàn ở phía client, sử dụng LocalStorage để lưu trữ dữ liệu và ví Sui để định danh người chơi.', role: 'Dự án cá nhân', frontend: 'React 18, Vite, TypeScript, Mantine UI, Framer Motion, React Router DOM, Sui Wallet Adapter', backend: 'LocalStorage (Client-side storage)', features: ['7+ Mini-Games giải trí để kiếm thêm Coins (Dice, Tài Xỉu, Mines, Slot...).', 'Giao diện Glassmorphism & Futuristic với hiệu ứng Parallax và Particle Background.'], github: 'https://github.com/Wiken2k3/the-invincible-web3' },
  { order: 4, slug: 'mood-by-style', title: 'MoodByStyle', category: 'Music Streaming', tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Zustand'], image: '/assets/moodbystyle', alt: 'MoodByStyle music streaming app', description: 'Spotify-inspired Music Streaming Web App', stack: 'Next.js 14, React, TypeScript, Tailwind CSS, Zustand, Lucide React, Responsive Design, Audio Player, State Management', features: ['Trình phát nhạc đầy đủ: Play/Pause, Next/Prev, Shuffle, Repeat, Seek, Volume', 'Guest/User mode, đăng nhập để lưu playlist & bài hát yêu thích', 'Tìm kiếm thời gian thực, quản lý thư viện cá nhân & hàng đợi (Queue)'], github: 'https://github.com/Wiken2k3/MoodByStyle' },
  { order: 5, slug: 'wiken-authentic-store', title: 'Wiken Authentic Store', category: 'E-commerce', tech: ['ReactJS'], image: '/assets/authentic', alt: 'Wiken Authentic Store streetwear and sneaker shop', description: 'Streetwear & Sneaker E-commerce', stack: 'ReactJS, React Router DOM, Redux Toolkit, React Bootstrap, CSS Modules, React Icons, React Toastify, Axios', features: ['Đăng ký / Đăng nhập / Quản lý tài khoản', 'Lọc sản phẩm theo danh mục, giá, thương hiệu', 'Giỏ hàng và thanh toán cơ bản'], github: 'https://github.com/Wiken2k3/Wiken-Authentic-Store' },
  { order: 6, slug: 't1sneaker', title: 'T1Sneaker', category: 'E-commerce', tech: ['WordPress'], image: '/assets/t1sneaker', alt: 'T1Sneaker WordPress storefront', description: 'WordPress E-commerce Solution', stack: 'WordPress, XAMPP, PHP, MySQL', demo: 'https://t1sneakers.id.vn/' },
  { order: 7, slug: 'lich-truc-giang-vien', title: 'Thiết kế quản lý lịch trực cho giảng viên', category: 'Design', tech: ['FIGMA'], image: '/assets/lich-truc', alt: 'Faculty scheduling interface prototype', description: 'UI/UX Design for Academic Scheduling', stack: 'FIGMA, User Research, Prototyping, Design System' },
  { order: 8, slug: 'task-management-app', title: 'Website quản lý kế hoạch công việc', category: 'Productivity', tech: ['ReactJS'], image: '/assets/task-management', alt: 'Task management application dashboard', description: 'Task Management Application', stack: 'React, React Hooks (useState, useEffect), React Toastify, HTML5/JSX, CSS3, LocalStorage, Flexbox & CSS Grid', github: 'https://github.com/Wiken2k3/Task-Management-App' },
  { order: 9, slug: 'blog-app', title: 'BLOG App', category: 'CMS', tech: ['JavaScript'], image: '/assets/blog-app', alt: 'Blog content management app', description: 'Content Management System', stack: 'JavaScript ES6+, CSS3, HTML5, Local Storage, Responsive Design', github: 'https://github.com/Wiken2k3/Blog-App' },
  { order: 10, slug: 'admin-clothing-store', title: 'Admin Clothing Store', category: 'Dashboard', tech: ['ReactJS'], alt: 'Admin clothing store dashboard', description: 'Administrative Dashboard', stack: 'React.js, Redux Toolkit, React Router, Bootstrap 5, CSS3/SASS, Responsive Design, Chart.js, Data Visualization, Axios, REST API Integration, JWT Authentication, Vite, ESLint, Prettier', github: 'https://github.com/Wiken2k3/Admin-Clothing-Store' },
];
