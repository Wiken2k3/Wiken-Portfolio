import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Container, Row, Col, Button, Form, Alert, Badge } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import taxiImg from '../../assets/taxi-tayninh.png';
import t1sneakerImg from '../../assets/t1sneaker.png';
// import luxuryStoreImg from '../../assets/luxury-store.png';
import BlogAppImg from '../../assets/blog-app.png';
import TaskManagement from '../../assets/task-management.png';
import LichTruc from '../../assets/lich-truc.png';
// import NewsApp from '../../assets/news_app.png';
import AdminDashboard from '../../assets/admin-dashboard.png';
import WikenAuthenticStore from '../../assets/authentic.png';
// import SportShop from '../../assets/sportshop.png';
import HotwheelsShop from '../../assets/hotwheelsshop.png';
import theInvincibleImg from '../../assets/invincible.png';
import MoodByStyle from '../../assets/moodbystyle.png';
import './ProjectsSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const [selectedTech, setSelectedTech] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  // Dữ liệu dự án - sử dụng useMemo để tránh re-render không cần thiết
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Taxi Tây Ninh',
      tech: ['ReactJS'],
      role: 'Thực tập sinh Frontend Developer (06/2024 – 09/2024)',
      company: 'Công Ty IT-Global Technology Solutions Co., Ltd (IT-Global)',
      technologies: {
        frontend: 'Html, CSS, JavaScript, ReactJS, Bootstrap 5, React Router DOM, Axios, React Toastify, Responsive',
      },
      github: 'https://github.com/Wiken2k3/Taxi-Tay-Ninh.git',
      demo: 'https://github.com/Wiken2k3/Taxi-Tay-Ninh.git',
      image: taxiImg,
      alt: 'Taxi Project',
      category: 'Commercial'
    },
    {
      id: 2,
      title: 'Hotwheels Shop',
      tech: ['Next.js'],
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
      id: 3,
      title: 'The Invincible - Web3 Farming Game',
      tech: ['ReactJS', 'TypeScript', 'Vite'],
      company: 'Dự án cá nhân',
      description: 'Một Web3 Mini Farming Game, mô phỏng trải nghiệm Play-to-Earn hoàn toàn ở phía client, sử dụng LocalStorage để lưu trữ dữ liệu và ví Sui để định danh người chơi.',
      technologies: {
        frontend: 'React 18, Vite, TypeScript, Mantine UI, Framer Motion, React Router DOM, Sui Wallet Adapter',
        backend: 'LocalStorage (Client-side storage)'
      },
      features: [
        '7+ Mini-Games giải trí để kiếm thêm Coins (Dice, Tài Xỉu, Mines, Slot...).',
        'Giao diện Glassmorphism & Futuristic với hiệu ứng Parallax và Particle Background.'
      ],
      github: 'https://github.com/Wiken2k3/the-invincible-web3',
      demo: 'https://the-invincible-web3.vercel.app/',
      image: theInvincibleImg,
      alt: 'The Invincible Web3 Game',
      category: 'Web3'
    },
    {
        id: 4,
        title: 'MoodByStyle',
        tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Zustand'],
        description: 'Spotify-inspired Music Streaming Web App',
        technologies: {
          main: 'Next.js 14, React, TypeScript, Tailwind CSS, Zustand, Lucide React, Responsive Design, Audio Player, State Management'
        },
        github: 'https://github.com/Wiken2k3/MoodByStyle',
        demo: 'https://mood-by-style.vercel.app/',
        image: MoodByStyle,
        alt: 'MoodByStyle Music Streaming App',
        category: 'Music Streaming'
      }

    ,{
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
    // {
    //   id: 6,
    //   title: 'Website Tin tức 24/7',
    //   tech: ['Vue.js'],
    //   description: 'News Portal with Real-time Updates',
    //   technologies: {
    //     main: 'TypeScript, Vue.js 3, CSS3, LocalStorage, Responsive Design'
    //   },
    //   github: 'https://github.com/Wiken2k3/News-App',
    //   demo: 'https://github.com/Wiken2k3/News-App',
    //   image: NewsApp,
    //   alt: 'News App',
    //   category: 'Media'
    // },
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
  ], []);

  // Lọc dự án theo technology và project name - sử dụng useMemo để tối ưu performance
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const techMatch = selectedTech === '' || project.tech.includes(selectedTech);
      const projectMatch = selectedProject === '' || project.title === selectedProject;
      return techMatch && projectMatch;
    });
  }, [projects, selectedTech, selectedProject]);

  // Lấy danh sách công nghệ unique - sử dụng useMemo
  const uniqueTechnologies = useMemo(() => {
    return [...new Set(projects.flatMap(project => project.tech))];
  }, [projects]);

  // Effect để khởi tạo và dọn dẹp animations cho các dự án
  useEffect(() => {
    // Sử dụng gsap.context để quản lý animations và ScrollTriggers một cách an toàn,
    // tránh ảnh hưởng đến các component khác.
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.project-item');
      if (!items || items.length === 0) {
        return;
      }

      // Khởi tạo animation cho mỗi item
      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            once: true, // Chỉ chạy animation một lần khi item xuất hiện
          },
        });
      });
    }, sectionRef); // Giới hạn context trong section này

    // Cleanup function: tự động revert tất cả animations và ScrollTriggers trong context khi component unmount hoặc re-render
    return () => ctx.revert();
  }, [filteredProjects]); // Chạy lại effect khi danh sách dự án thay đổi (do filter)

  // Reset filters
  const resetFilters = useCallback(() => {
    setSelectedTech('');
    setSelectedProject('');
  }, []);

  // Get category color - sử dụng useMemo để tối ưu
  const getCategoryColor = useMemo(() => {
    const colors = {
      'E-commerce': 'primary',
      'Commercial': 'success',
      'Media': 'info',
      'Design': 'warning',
      'Productivity': 'secondary',
      'CMS': 'dark',
      'Dashboard': 'danger'
    };
    return (category) => colors[category] || 'light';
  }, []);

  // Component để render một dự án - Tối ưu với React.memo
  const ProjectItem = React.memo(({ project, index }) => {
    const isEven = index % 2 === 0;
    const projectClass = isEven ? 'project-item-light' : 'project-item-dark';

    return (
      <div className={`project-item ${projectClass} mb-5`}>
        <Row className="align-items-center h-100">
          {isEven ? (
            // Layout cho dự án chẵn (hình bên trái)
            <>
              <Col xs={12} md={6} className="image-col">
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.alt} 
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="tech-badges">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} bg="light" text="dark" className="me-1 mb-1 tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} className="project-info">
                <ProjectContent project={project} index={index} />
              </Col>
            </>
          ) : (
            // Layout cho dự án lẻ (hình bên phải)
            <>
              <Col xs={12} md={6} className="project-info order-md-1">
                <ProjectContent project={project} index={index} />
              </Col>
              <Col xs={12} md={6} className="image-col order-md-2">
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.alt} 
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="tech-badges">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} bg="light" text="dark" className="me-1 mb-1 tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </>
          )}
        </Row>
      </div>
    );
  });

  // Component để render nội dung dự án - Tối ưu với React.memo
  const ProjectContent = React.memo(({ project, index }) => (
    <div className="project-content h-100">
      <div className="project-header mb-3">
        <div className="d-flex align-items-center mb-3">
          <span className="project-number me-3">#{String(index + 1).padStart(2, '0')}</span>
          {project.category && (
            <Badge bg={getCategoryColor(project.category)} className="category-badge">
              {project.category}
            </Badge>
          )}
        </div>
        <h4 className="project-title mb-2">
          {project.title}
          {project.description && (
            <small className="project-description d-block mt-2">{project.description}</small>
          )}
        </h4>
      </div>
      
      {project.role && (
        <div className="project-role mb-3">
          <div className="role-info">
            <i className="fas fa-user-tie me-2 text-primary"></i>
            <strong>Vai trò: </strong>{project.role}
          </div>
          {project.company && (
            <div className="company-name mt-2">
              <i className="fas fa-building me-2 text-secondary"></i>
              <span className="text-muted">{project.company}</span>
            </div>
          )}
        </div>
      )}

      <div className="project-technologies mb-3">
        <h6 className="tech-title">
          <i className="fas fa-code me-2 text-info"></i>
          Công Nghệ Sử Dụng:
        </h6>
        <div className="tech-content">
          {project.technologies.frontend && (
            <div className="tech-item">
              <span className="tech-label">Frontend:</span> 
              <span className="tech-value">{project.technologies.frontend}</span>
            </div>
          )}
          {project.technologies.backend && (
            <div className="tech-item">
              <span className="tech-label">Backend:</span> 
              <span className="tech-value">{project.technologies.backend}</span>
            </div>
          )}
          {project.technologies.main && (
            <div className="tech-item">
              <span className="tech-value">{project.technologies.main}</span>
            </div>
          )}
        </div>
      </div>

      {project.features && (
        <div className="project-features mb-3">
          <h6 className="features-title">
            <i className="fas fa-star me-2 text-warning"></i>
            Tính năng nổi bật:
          </h6>
          <ul className="features-list">
            {project.features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <i className="fas fa-check-circle me-2 text-success"></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="project-links mb-4">
        <h6 className="links-title">
          <i className="fas fa-link me-2 text-dark"></i>
          Liên kết dự án:
        </h6>
        <div className="links-content">
          {typeof project.github === 'string' ? (
            <div className="link-item">
              <i className="fab fa-github me-2"></i>
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                Repository
              </a>
            </div>
          ) : project.github && (
            <div className="multiple-links">
              <div className="link-item">
                <i className="fab fa-react me-2"></i>
                <span className="link-label">Frontend:</span>
                <a href={project.github.frontend} target="_blank" rel="noreferrer" className="project-link">
                  Frontend Repository
                </a>
              </div>
              <div className="link-item">
                <i className="fas fa-server me-2"></i>
                <span className="link-label">Backend:</span>
                <a href={project.github.backend} target="_blank" rel="noreferrer" className="project-link">
                  Backend Repository
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {project.demo && (
        <div className="project-actions">
          <Button 
            variant="primary" 
            href={project.demo} 
            target="_blank"
            className="demo-button w-100"
            size="lg"
          >
            <i className="fas fa-external-link-alt me-2"></i>
            {project.buttonText || 'Xem Demo'}
          </Button>
        </div>
      )}
    </div>
  ));

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <Container fluid="xl">
        <div className="section-header text-center mb-5">
          <h2 className="projects-title">
            <span className="title-highlight">DỰ ÁN</span>
            <span className="title-subtitle d-block">PORTFOLIO</span>
          </h2>
          <p className="section-description lead">
            Khám phá các dự án đã thực hiện
          </p>
        </div>

        {/* Enhanced Filter Controls */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} lg={10}>
            <div className="filter-controls bg-white p-4 rounded-3 shadow-sm">
              <Row className="g-3 align-items-end">
                <Col xs={12} sm={6} md={4}>
                  <Form.Label className="fw-bold text-dark">
                    <i className="fas fa-filter me-2"></i>
                    Công nghệ
                  </Form.Label>
                  <Form.Select
                    value={selectedTech}
                    onChange={(e) => setSelectedTech(e.target.value)}
                    className="filter-select"
                    aria-label="Lọc theo công nghệ"
                  >
                    <option value="">Tất cả công nghệ</option>
                    {uniqueTechnologies.map(tech => (
                      <option key={tech} value={tech}>{tech}</option>
                    ))}
                  </Form.Select>
                </Col>

                <Col xs={12} sm={6} md={4}>
                  <Form.Label className="fw-bold text-dark">
                    <i className="fas fa-project-diagram me-2"></i>
                    Dự án
                  </Form.Label>
                  <Form.Select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="filter-select"
                    aria-label="Lọc theo dự án"
                  >
                    <option value="">Tất cả dự án</option>
                    {projects.map(project => (
                      <option key={project.id} value={project.title}>
                        {project.title}
                      </option>
                    ))}
                  </Form.Select>
                </Col>

                <Col xs={12} md={4}>
                  <div className="filter-actions d-flex gap-2 align-items-center">
                    {(selectedTech || selectedProject) && (
                      <Button 
                        variant="outline-secondary" 
                        onClick={resetFilters}
                        className="reset-btn"
                      >
                        <i className="fas fa-times me-2"></i>
                        Reset
                      </Button>
                    )}
                    <div className="filter-info text-center flex-fill">
                      <Badge bg="info" className="fs-6">
                        {filteredProjects.length} / {projects.length} dự án
                      </Badge>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Projects Display */}
        <div className="projects-container">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <ProjectItem 
                  key={project.id} 
                  project={project} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <Row className="justify-content-center">
              <Col xs={12} md={8} lg={6}>
                <Alert variant="light" className="text-center empty-state border-0 shadow-sm">
                  <div className="empty-state-content">
                    <div className="empty-state-icon mb-4">
                      <i className="fas fa-search fa-4x text-muted"></i>
                    </div>
                    <Alert.Heading className="h4 mb-3">Không tìm thấy dự án phù hợp</Alert.Heading>
                    <p className="mb-4 text-muted">
                      Không có dự án nào phù hợp với bộ lọc hiện tại. 
                      Hãy thử thay đổi tiêu chí lọc hoặc xóa bộ lọc để xem tất cả dự án.
                    </p>
                    <Button variant="primary" onClick={resetFilters} size="lg">
                      <i className="fas fa-eye me-2"></i>
                      Xem tất cả dự án
                    </Button>
                  </div>
                </Alert>
              </Col>
            </Row>
          )}
        </div>

        {/* Project Statistics */}
        {filteredProjects.length > 0 && (
          <Row className="mt-5">
            <Col className="text-center">
              <div className="project-stats bg-white p-3 rounded-3 shadow-sm">
                <p className="text-muted mb-0">
                  <i className="fas fa-chart-bar me-2"></i>
                  <strong>Tổng quan:</strong> {filteredProjects.length} dự án được hiển thị
                  {(selectedTech || selectedProject) && (
                    <span className="filter-summary ms-2">
                      (Đã lọc
                      {selectedTech && ` theo ${selectedTech}`}
                      {selectedProject && ` - ${selectedProject}`})
                    </span>
                  )}
                </p>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}