import taxiImg from '../assets/taxi-tayninh.png';
import t1sneakerImg from '../assets/t1sneaker.png';
import luxuryStoreImg from '../assets/luxury-store.png';
import BlogAppImg from '../assets/blog-app.png';
import TaskManagement from '../assets/task-management.png';
import LichTruc from '../assets/lich-truc.png';
import NewsApp from '../assets/news_app.png';
import AdminDashboard from '../assets/admin-dashboard.png';
import WikenAuthenticStore from '../assets/authentic.png';
import SportShop from '../assets/sportshop.png';
import HotwheelsShop from '../assets/hotwheelsshop.png';

export const projects = [
    {
      id: 1,
      title: 'Taxi Tây Ninh',
      tech: ['ReactJS'],
      role: 'Frontend Developer (06/2024 – 09/2024)',
      company: 'Công Ty IT-Global Technology Solutions Co., Ltd (IT-Global)',
      technologies: {
        frontend: 'Html, CSS, JavaScript, ReactJS',
        backend: 'NestJS'
      },
      github: 'https://github.com/Wiken2k3/Taxi-Tay-Ninh.git',
      demo: 'https://github.com/Wiken2k3/Taxi-Tay-Ninh.git',
      image: taxiImg,
      alt: 'Taxi Project',
      category: 'Commercial'
    },
    {
      id: 2,
      title: 'Sport Shop',
      tech: ['ReactJS'],
      description: 'Full-Stack E-commerce Platform',
      technologies: {
        frontend: 'React.js, React Router DOM, Redux Toolkit, React Toastify, Axios, Bootstrap 5, Font Awesome, GSAP',
        backend: 'Node.js, Express.js, MongoDB, Mongoose, CSS3, LocalStorage, Responsive'
      },
      github: {
        frontend: 'https://github.com/Wiken2k3/Sport-Shop-Frontend',
        backend: 'https://github.com/Wiken2k3/Sport-Shop-Backend'
      },
      image: SportShop,
      alt: 'Sport Shop',
      category: 'E-commerce'
    },
    {
      id: 3,
      title: 'Hotwheels Shop',
      tech: ['NextJS'],
      description: 'Modern E-commerce with TypeScript',
      technologies: {
        main: 'Next.js, TypeScript, Zustand, Tailwind CSS, ShadCN UI, Responsive Layout, React Hook Form, Zod, RTK Query, Jest, ESLint, Prettier'
      },
      github: 'https://github.com/Wiken2k3/Hotwheels-Shop',
      demo: 'https://wikenhotwheelsshop.vercel.app/',
      image: HotwheelsShop,
      alt: 'Hotwheels Shop',
      category: 'E-commerce'
    },
    {
      id: 4,
      title: 'Luxury Store',
      tech: ['ReactJS'],
      description: 'Fashion E-commerce Platform',
      technologies: {
        main: 'ReactJS, Router DOM, Bootstrap 5, Toastify, CSS Modules, useState, useEffect, Responsive, LocalStorage'
      },
      github: 'https://github.com/Wiken2k3/Admin-Clothing-Store',
      demo: 'https://github.com/Wiken2k3/Admin-Clothing-Store.git',
      image: luxuryStoreImg,
      alt: 'Admin-Clothing-Store',
      category: 'E-commerce'
    },
    {
      id: 5,
      title: 'Wiken Authentic Store',
      tech: ['ReactJS'],
      description: 'Streetwear & Sneaker E-commerce',
      technologies: {
        main: 'ReactJS, React Router DOM, Redux Toolkit, React Bootstrap, CSS Modules, React Icons, React Toastify, Axios'
      },
      features: [
        'Đăng ký / Đăng nhập / Quản lý tài khoản',
        'Lọc sản phẩm theo danh mục, giá, thương hiệu',
        'Giỏ hàng và thanh toán cơ bản'
      ],
      github: 'https://github.com/Wiken2k3/Wiken-Authentic-Store',
      demo: 'https://github.com/Wiken2k3/Wiken-Authentic-Store',
      image: WikenAuthenticStore,
      alt: 'Wiken Authentic Store',
      category: 'E-commerce'
    },
    {
      id: 6,
      title: 'Website Tin tức 24/7',
      tech: ['Vue.js'],
      description: 'News Portal with Real-time Updates',
      technologies: {
        main: 'TypeScript, Vue.js 3, CSS3, LocalStorage, Responsive Design'
      },
      github: 'https://github.com/Wiken2k3/News-App',
      demo: 'https://github.com/Wiken2k3/News-App',
      image: NewsApp,
      alt: 'News App',
      category: 'Media'
    },
    {
      id: 7,
      title: 'T1Sneaker',
      tech: ['WordPress'],
      description: 'WordPress E-commerce Solution',
      technologies: {
        main: 'WordPress, XAMPP, PHP, MySQL'
      },
      github: 'https://t1sneakers.id.vn/',
      demo: 'https://t1sneakers.id.vn/',
      image: t1sneakerImg,
      alt: 'T1Sneaker Project',
      category: 'E-commerce'
    },
    {
      id: 8,
      title: 'Thiết kế quản lý lịch trực cho giảng viên',
      tech: ['FIGMA'],
      description: 'UI/UX Design for Academic Scheduling',
      technologies: {
        main: 'FIGMA, User Research, Prototyping, Design System'
      },
      demo: 'https://www.figma.com/design/fV60Ou3yFjS5hjTcAJOaV0/Qu%E1%BA%A3n-L%C3%BD-L%E1%BB%8Bch-Tr%E1%BB%B1c-Gi%E1%BA%A3ng-Vi%C3%AAn?node-id=0-1&t=a3rMkgEaxMCRdVhC-1',
      image: LichTruc,
      alt: 'Prototype',
      buttonText: 'View Prototype',
      category: 'Design'
    },
    {
      id: 9,
      title: 'Website quản lý kế hoạch công việc',
      tech: ['ReactJS'],
      description: 'Task Management Application',
      technologies: {
        main: 'React, React Hooks (useState, useEffect), React Toastify, HTML5/JSX, CSS3, LocalStorage, Flexbox & CSS Grid'
      },
      github: 'https://github.com/Wiken2k3/Task-Management-App',
      demo: 'https://github.com/Wiken2k3/Task-Management-App',
      image: TaskManagement,
      alt: 'Task Management',
      buttonText: 'View App',
      category: 'Productivity'
    },
    {
      id: 10,
      title: 'BLOG App',
      tech: ['JavaScript'],
      description: 'Content Management System',
      technologies: {
        main: 'JavaScript ES6+, CSS3, HTML5, Local Storage, Responsive Design'
      },
      github: 'https://github.com/Wiken2k3/Blog-App',
      demo: 'https://github.com/Wiken2k3/Blog-App',
      image: BlogAppImg,
      alt: 'BLOG App Project',
      category: 'CMS'
    },
    {
      id: 11,
      title: 'Admin Clothing Store',
      tech: ['ReactJS'],
      description: 'Administrative Dashboard',
      technologies: {
        main: 'React.js, Redux Toolkit, React Router, Bootstrap 5, CSS3/SASS, Responsive Design, Chart.js, Data Visualization, Axios, REST API Integration, JWT Authentication, Vite, ESLint, Prettier'
      },
      github: 'https://github.com/Wiken2k3/Admin-Clothing-Store',
      demo: 'https://github.com/Wiken2k3/Admin-Clothing-Store',
      image: AdminDashboard,
      alt: 'Admin Dashboard',
      category: 'Dashboard'
    }
];