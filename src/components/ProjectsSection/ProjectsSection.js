import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import taxiImg from '../../assets/taxi-tayninh.png';
import t1sneakerImg from '../../assets/t1sneaker.png';
import luxuryStoreImg from '../../assets/luxury-store.png';
import BlogAppImg from '../../assets/blog-app.png';
import TaskManagement from '../../assets/task-management.png';
import LichTruc from '../../assets/lich-truc.png';
import NewsApp from '../../assets/news_app.png';
import AdminDashboard from '../../assets/admin-dashboard.png';
import WikenAuthenticStore from '../../assets/authentic.png';
import SportShop from '../../assets/sportshop.png';
import HotwheelsShop from '../../assets/hotwheelsshop.png';
import './ProjectsSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  // Dữ liệu dự án
  const projects = [
    {
      id: 1,
      title: 'Taxi Tây Ninh',
      tech: ['ReactJS'],
      role: 'Frontend Developer (06/2024 – 09/2024)',
      company: 'Công Ty IT-Global Technology Solutions Co., Ltd (IT-Global)',
      technologies: {
        frontend: 'Html, CSS, ReactJS',
        backend: 'NextJS'
      },
      github: 'https://github.com/Wiken2k3/Taxi-Tay-Ninh.git',
      demo: 'https://github.com/Wiken2k3/Taxi-Tay-Ninh.git',
      image: taxiImg,
      alt: 'Taxi Project'
    },
    {
      id: 2,
      title: 'Sport Shop',
      tech: ['ReactJS'],
      description: 'Full-Stack',
      technologies: {
        frontend: 'React.js, React Router DOM, Redux Toolkit, React Toastify, Axios, Bootstrap 5, Font Awesome, GSAP',
        backend: 'Node.js, Express.js, MongoDB, Mongoose, CSS3, LocalStorage, Responsive'
      },
      github: {
        frontend: 'https://github.com/Wiken2k3/Sport-Shop-Frontend',
        backend: 'https://github.com/Wiken2k3/Sport-Shop-Backend'
      },
      image: SportShop,
      alt: 'Sport Shop'
    },
    {
      id: 3,
      title: 'Hotwheels Shop',
      tech: ['NextJS'],
      description: 'Website bán xe Hotwheels',
      technologies: {
        main: 'Next.js, TypeScript, Zustand, Tailwind CSS, ShadCN UI, Responsive Layout, React Hook Form, Zod, RTK Query, Jest, ESLint, Prettier'
      },
      github: 'https://github.com/Wiken2k3/Hotwheels-Shop',
      demo: 'https://wikenhotwheelsshop.vercel.app/',
      image: HotwheelsShop,
      alt: 'Hotwheels Shop'
    },
    {
      id: 4,
      title: 'Luxury Store',
      tech: ['ReactJS'],
      description: 'Website bán quần áo',
      technologies: {
        main: 'ReactJS, Router DOM, Bootstrap 5, Toastify, CSS Modules, useState, useEffect, Responsive, LocalStorage'
      },
      github: 'https://github.com/Wiken2k3/Admin-Clothing-Store',
      demo: 'https://github.com/Wiken2k3/Admin-Clothing-Store.git',
      image: luxuryStoreImg,
      alt: 'Admin-Clothing-Store'
    },
    {
      id: 5,
      title: 'Wiken Authentic Store',
      tech: ['ReactJS'],
      description: 'Website bán đồ streetwear & sneaker',
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
      alt: 'Wiken Authentic Store'
    },
    {
      id: 6,
      title: 'Website Tin tức 24/7',
      tech: ['Vue.js'],
      technologies: {
        main: 'TypeScript, Front-end Framework: Vue.js 3, CSS3, LocalStorage, Responsive'
      },
      github: 'https://github.com/Wiken2k3/News-App',
      demo: 'https://github.com/Wiken2k3/News-App',
      image: NewsApp,
      alt: 'News App'
    },
    {
      id: 7,
      title: 'T1Sneaker',
      tech: ['WordPress'],
      description: 'Website bán giày',
      technologies: {
        main: 'WordPress, XAMPP, PHP'
      },
      github: 'https://t1sneakers.id.vn/',
      demo: 'https://t1sneakers.id.vn/',
      image: t1sneakerImg,
      alt: 'T1Sneaker Project'
    },
    {
      id: 8,
      title: 'Thiết kế quản lý lịch trực cho giảng viên',
      tech: ['Design'],
      technologies: {
        main: 'FIGMA'
      },
      github: 'https://www.figma.com/design/fV60Ou3yFjS5hjTcAJOaV0/Qu%E1%BA%A3n-L%C3%BD-L%E1%BB%8Bch-Tr%E1%BB%B1c-Gi%E1%BA%A3ng-Vi%C3%AAn?node-id=0-1&t=a3rMkgEaxMCRdVhC-1',
      demo: 'https://www.figma.com/design/fV60Ou3yFjS5hjTcAJOaV0/Qu%E1%BA%A3n-L%C3%BD-L%E1%BB%8Bch-Tr%E1%BB%B1c-Gi%E1%BA%A3ng-Vi%C3%AAn?node-id=0-1&t=a3rMkgEaxMCRdVhC-1',
      image: LichTruc,
      alt: 'Prototype',
      buttonText: 'Go To Prototype Quản Lý Lịch Trực'
    },
    {
      id: 9,
      title: 'Website quản lý kế hoạch công việc',
      tech: ['ReactJS'],
      technologies: {
        main: 'React, React Hooks (useState, useEffect), React Toastify, HTML5/JSX, CSS3, LocalStorage, Flexbox & CSS Grid'
      },
      github: 'https://github.com/Wiken2k3/Task-Management-App',
      demo: 'https://github.com/Wiken2k3/Task-Management-App',
      image: TaskManagement,
      alt: 'Task Management',
      buttonText: 'Go To Task Management App'
    },
    {
      id: 10,
      title: 'BLOG App',
      tech: ['JavaScript'],
      description: 'Website Quản Lí bài Blog',
      technologies: {
        main: 'JavaScript, CSS, HTML'
      },
      github: 'https://github.com/Wiken2k3/Blog-App',
      demo: 'https://github.com/Wiken2k3/Blog-App',
      image: BlogAppImg,
      alt: 'BLOG App Project'
    },
    {
      id: 11,
      title: 'Admin Clothing Store',
      tech: ['ReactJS'],
      technologies: {
        main: 'React.js, Redux Toolkit, React Router, Bootstrap 5, CSS3/SASS, Responsive Design, Chart.js, Data Visualization, Axios, REST API Integration, JWT Authentication, Vite, ESLint, Prettier'
      },
      github: 'https://github.com/Wiken2k3/Admin-Clothing-Store',
      demo: 'https://github.com/Wiken2k3/Admin-Clothing-Store',
      image: AdminDashboard,
      alt: 'Admin Dashboard'
    }
  ];

  // Lọc dự án theo technology và project name
  const filteredProjects = projects.filter(project => {
    const techMatch = selectedTech === '' || project.tech.includes(selectedTech);
    const projectMatch = selectedProject === '' || project.title === selectedProject;
    return techMatch && projectMatch;
  });

  // Lấy danh sách công nghệ unique
  const uniqueTechnologies = [...new Set(projects.flatMap(project => project.tech))];

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.project-item');
    if (!items) return;

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      );
    });
  }, [filteredProjects]);

  // Reset filters
  const resetFilters = () => {
    setSelectedTech('');
    setSelectedProject('');
  };

  // Component để render một dự án
  const ProjectItem = ({ project, index }) => {
    const isEven = index % 2 === 0;
    const projectClass = isEven ? 'project-item-light' : 'project-item-dark';

    return (
      <Row className={`align-items-center project-item ${projectClass}`}>
        {isEven ? (
          // Layout cho dự án chẵn (hình bên trái)
          <>
            <Col xs={12} md={6} className="text-center image-col">
              <img src={project.image} alt={project.alt} className="project-img" />
            </Col>
            <Col md={6} className="project-info text-start">
              <ProjectContent project={project} index={index} />
            </Col>
          </>
        ) : (
          // Layout cho dự án lẻ (hình bên phải)
          <>
            <Col xs={12} md={6} className="project-info text-start">
              <ProjectContent project={project} index={index} />
            </Col>
            <Col md={6} className="text-center image-col">
              <img src={project.image} alt={project.alt} className="project-img" />
            </Col>
          </>
        )}
      </Row>
    );
  };

  // Component để render nội dung dự án
  const ProjectContent = ({ project, index }) => (
    <>
      <h5>
        <strong>Dự Án {index + 1}:</strong> {project.title}
        {project.description && ` (${project.description})`}
      </h5>
      
      {project.role && (
        <p>
          <strong>Vai trò: </strong>{project.role}
          {project.company && (
            <>
              <br />
              {project.company}
            </>
          )}
        </p>
      )}

      <p><strong>Công Nghệ:</strong></p>
      <ul>
        {project.technologies.frontend && (
          <li>Front End: {project.technologies.frontend}</li>
        )}
        {project.technologies.backend && (
          <li>Back End: {project.technologies.backend}</li>
        )}
        {project.technologies.main && (
          <li>{project.technologies.main}</li>
        )}
      </ul>

      {project.features && (
        <>
          <p><strong>Tính năng nổi bật:</strong></p>
          <ul>
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      <p><strong>Link dự án chi tiết:</strong></p>
      <ul>
        {typeof project.github === 'string' ? (
          <li>
            <a href={project.github} target="_blank" rel="noreferrer">
              {project.github}
            </a>
          </li>
        ) : project.github && (
          <>
            <li>
              <strong>Front-End:</strong>
              <a href={project.github.frontend} target="_blank" rel="noreferrer">
                {' ' + project.github.frontend}
              </a>
            </li>
            <li>
              <strong>Back-end:</strong>
              <a href={project.github.backend} target="_blank" rel="noreferrer">
                {' ' + project.github.backend}
              </a>
            </li>
          </>
        )}
      </ul>

      {project.demo && (
        <Button variant="success" href={project.demo} target="_blank">
          {project.buttonText || `Go To ${project.title}`}
        </Button>
      )}
    </>
  );

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <Container>
        <h2 className="projects-title text-center">DỰ ÁN</h2>

        {/* Filter Controls */}
        <div className="d-flex gap-2 justify-content-center mb-4 flex-wrap">
          <Form.Select
            size="sm"
            style={{ maxWidth: '200px' }}
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
          >
            <option value="">-- Chọn công nghệ --</option>
            {uniqueTechnologies.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </Form.Select>

          <Form.Select
            size="sm"
            style={{ maxWidth: '200px' }}
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            <option value="">-- Chọn dự án --</option>
            {projects.map(project => (
              <option key={project.id} value={project.title}>
                {project.title}
              </option>
            ))}
          </Form.Select>

          {(selectedTech || selectedProject) && (
            <Button variant="outline-secondary" size="sm" onClick={resetFilters}>
              Reset
            </Button>
          )}
        </div>

        {/* Projects Display */}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))
        ) : (
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Alert variant="info" className="text-center">
                <Alert.Heading>Không tìm thấy dự án phù hợp</Alert.Heading>
                <p>
                  Không có dự án nào phù hợp với bộ lọc hiện tại. 
                  Hãy thử thay đổi tiêu chí lọc hoặc xóa bộ lọc để xem tất cả dự án.
                </p>
                <hr />
                <div className="d-flex justify-content-center">
                  <Button variant="outline-primary" onClick={resetFilters}>
                    Xem tất cả dự án
                  </Button>
                </div>
              </Alert>
            </Col>
          </Row>
        )}

        {/* Project Statistics */}
        <Row className="mt-5">
          <Col className="text-center">
            <p className="text-muted">
              Hiển thị {filteredProjects.length} / {projects.length} dự án
              {(selectedTech || selectedProject) && (
                <span>
                  {' '}(đã lọc
                  {selectedTech && ` theo ${selectedTech}`}
                  {selectedProject && ` - ${selectedProject}`})
                </span>
              )}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}