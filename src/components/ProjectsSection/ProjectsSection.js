// src/components/ProjectsSection/ProjectsSection.js
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import taxiImg from '../../assets/taxi-tayninh.png';
import t1sneakerImg from '../../assets/t1sneaker.png';
import luxuryStoreImg from '../../assets/luxury-store.png'; // đảm bảo ảnh đúng
import BlogAppImg from '../../assets/blog-app.png';
import TaskManagement from '../../assets/task-management.png';
import LichTruc from '../../assets/lich-truc.png';
import NewsApp from '../../assets/news_app.png';
import AdminDashboard from '../../assets/admin-dashboard.png';
import WikenAuthenticStore from '../../assets/authentic.png';
import SportShop from '../../assets/sportshop.png';
import HotwheelsShop from '../../assets/hotwheelsshop.png'; // nếu có ảnh này, nếu không thì bỏ qua
import './ProjectsSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll('.project-item');

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
  }, []);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <Container>
        <h2 className="projects-title text-center">DỰ ÁN</h2>

        {/* Dự án 1 */}
        <Row className="align-items-center project-item project-item-light">
          <Col xs={12} md={6} className="text-center image-col">
            <img src={taxiImg} alt="Taxi Project" className="project-img" />
          </Col>
          <Col md={6} className="project-info text-start">
            <h5><strong>Dự Án 1:</strong> Taxi Tây Ninh</h5>
            <p><strong>Vai trò: </strong>Frontend Developer (06/2024 – 09/2024)<br></br>
              Công Ty IT-Global Technology Solutions Co., Ltd (IT-Global)
            </p>
            <p><strong>Công Nghệ:</strong></p>
            <ul>
              <li>Front End: Html, CSS, ReactJS</li>
              <li>Back End: NextJS</li>
            </ul>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://github.com/Wiken2k3/Taxi-Tay-Ninh.git" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/Taxi-Tay-Ninh.git</a></li>
            </ul>
            <Button variant="success" href="https://github.com/Wiken2k3/Taxi-Tay-Ninh.git" target="_blank">Go To Taxi Tây Ninh</Button>
          </Col>
        </Row>
        {/* Dự án 2 */}
        <Row className="align-items-center project-item project-item-dark">
          <Col xs={12} md={6} className="project-info text-start">
            <h5><strong>Dự Án 2:</strong> Sport Shop Full-Stack</h5>
            <p><strong>Công Nghệ:</strong></p>
          <p><strong>Front-End:</strong><a href="https://github.com/Wiken2k3/Sport-Shop-Frontend" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/Sport-Shop-Frontend</a>  </p>
            <ul>
              <li>React.js; React Router DOM; Redux Toolkit; React Toastify</li>
              <li>Axios; Bootstrap 5; Font Awesome; GSAP (GreenSock)</li>
            </ul>
            <p><strong>Back-end:</strong> <a href="https://github.com/Wiken2k3/Sport-Shop-Backend" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/Sport-Shop-Backend</a></p>
            <ul>   
              <li>Node.js; Express.js</li>
              <li>MongoDB; Mongoose</li>
              <li>CSS3; LocalStorage; Responsive</li>
            </ul>
          </Col>
          <Col md={6} className="text-center image-col">
            <img src={SportShop} alt="News App" className="project-img" />
          </Col>
        </Row>

        
        {/* Dự án 3 */}
        <Row className="align-items-center project-item project-item-light">
          <Col xs={12} md={6} className="text-center image-col">
            <img src={HotwheelsShop} alt="Hotwheels Shop" className="project-img" />
          </Col>
          <Col md={6} className="project-info text-start">
            <h5><strong>Dự Án 3:</strong> Hotwheels Shop (Website bán xe Hotwheels)</h5>
            <p><strong>Công Nghệ:</strong></p>
            <ul>
              <li>Next.js, TypeScript, Zustand</li>
              <li>Tailwind CSS, ShadCN UI, Responsive Layout</li>
              <li>React Hook Form, Zod, RTK Query, Jest, ESLint, Prettier</li>
            </ul>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://github.com/Wiken2k3/Hotwheels-Shop" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/Hotwheels-Shop</a></li>
            </ul>
            <Button variant="success" href="https://wikenhotwheelsshop.vercel.app/" target="_blank">Go To Hotwheels Shop</Button>
          </Col>
        </Row>
        {/* Dự án 4 */}
        <Row className="align-items-center project-item project-item-dark">
          <Col xs={12} md={6} className="project-info text-start">
            <h5><strong>Dự Án 4:</strong> Luxury Store (Website bán quần áo)</h5>
            <p><strong>Công Nghệ:</strong></p>
            <ul>
              <li>ReactJS, Router DOM, Bootstrap 5, Toastify</li>
              <li>CSS Modules, useState, useEffect</li>
              <li>Responsive, LocalStorage</li>
            </ul>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://github.com/Wiken2k3/Admin-Clothing-Store" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/Admin-Clothing-Store</a></li>
            </ul>
            <Button variant="success" href="https://github.com/Wiken2k3/Admin-Clothing-Store.git" target="_blank">Go To Luxury Fashion Store</Button>
          </Col>
          <Col md={6} className="text-center image-col">
            <img src={luxuryStoreImg} alt="Admin-Clothing-Store" className="project-img" />
          </Col>
        </Row>
        {/* Dự án 5 */}
        <Row className="align-items-center project-item project-item-light">
          <Col xs={12} md={6} className="text-center image-col">
            <img src={WikenAuthenticStore} alt="Wiken Authentic Store" className="project-img" />
          </Col> 
          <Col md={6} className="project-info text-start">
            <h5><strong>Dự Án 5:</strong> Wiken Authentic Store (Website bán đồ streetwear & sneaker)</h5>
            <p><strong>Công Nghệ:</strong></p>
            <ul>
              <li>ReactJS, React Router DOM, Redux Toolkit </li>
              <li>React Bootstrap, CSS Modules </li>
              <li>React Icons, React Toastify, Axios</li>
            </ul>
            <p><strong>Tính năng nổi bật:</strong></p>
            <ul>
              <li>Đăng ký / Đăng nhập / Quản lý tài khoản. </li>
              <li>Lọc sản phẩm theo danh mục, giá, thương hiệu. </li>
              <li>Giỏ hàng và thanh toán cơ bản</li>
            </ul>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://github.com/Wiken2k3/Wiken-Authentic-Store" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/Wiken-Authentic-Store</a></li>
            </ul>
            <Button variant="success" href="https://github.com/Wiken2k3/Wiken-Authentic-Store" target="_blank">Go To Wiken Authentic Store</Button>
          </Col>
        </Row>
        {/* Dự án  6*/}
        <Row className="align-items-center project-item project-item-dark">
          <Col xs={12} md={6} className="project-info text-start">
            <h5><strong>Dự Án 6:</strong> Website Tin tức 24/7</h5>
            <p><strong>Công Nghệ:</strong></p>
            <ul>
              <li>TypeScript</li>
              <li>Front-end Framework: Vue.js 3</li>
              <li>CSS3; LocalStorage; Responsive</li>
            </ul>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://github.com/Wiken2k3/News-App" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/News-App</a></li>
            </ul>
            <Button variant="success" href="https://github.com/Wiken2k3/News-App" target="_blank">Go To News App</Button>
          </Col>
          <Col md={6} className="text-center image-col">
            <img src={NewsApp} alt="News App" className="project-img" />
          </Col>
        </Row>
        {/* Dự án 7 */}
        <Row className="align-items-center project-item project-item-light">
          <Col xs={12} md={6} className="text-center image-col">
            <img src={t1sneakerImg} alt="T1Sneaker Project" className="project-img" />
          </Col> 
          <Col md={6} className="project-info text-start">
            <h5><strong>Dự Án 7:</strong> T1Sneaker (Website bán giày)</h5>
            <p><strong>Công Nghệ:</strong></p>
            <ul>
              <li>WordPress</li>
              <li>XAMPP</li>
              <li>PHP</li>
            </ul>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://t1sneakers.id.vn/" target="_blank" rel="noreferrer">https://t1sneakers.id.vn/</a></li>
            </ul>
            <Button variant="success" href="https://t1sneakers.id.vn/" target="_blank">Go To T1Sneaker</Button>
          </Col>
        </Row>
        {/* Dự án 8 */}
        <Row className="align-items-center project-item project-item-dark">
          <Col xs={12} md={6} className="project-info text-start">
            <h5><strong>Dự Án 8:</strong> Thiết kế quản lý lịch trực cho giảng viên</h5>
            <p><strong>Công Nghệ:</strong> FIGMA</p>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://www.figma.com/design/fV60Ou3yFjS5hjTcAJOaV0/Qu%E1%BA%A3n-L%C3%BD-L%E1%BB%8Bch-Tr%E1%BB%B1c-Gi%E1%BA%A3ng-Vi%C3%AAn?node-id=0-1&t=a3rMkgEaxMCRdVhC-1" target="_blank" rel="noreferrer">https://www.figma.com/design</a></li>
            </ul>
            <Button variant="success" href="https://www.figma.com/design/fV60Ou3yFjS5hjTcAJOaV0/Qu%E1%BA%A3n-L%C3%BD-L%E1%BB%8Bch-Tr%E1%BB%B1c-Gi%E1%BA%A3ng-Vi%C3%AAn?node-id=0-1&t=a3rMkgEaxMCRdVhC-1" target="_blank">Go To Prototype Quản Lý Lịch Trực</Button>
          </Col>
          <Col md={6} className="text-center image-col">
            <img src={LichTruc} alt="Prototype" className="project-img" />
          </Col>
        </Row>
         {/* Dự án 9 */}
        <Row className="align-items-center project-item project-item-light">
          <Col xs={12} md={6} className="text-center image-col">
            <img src={TaskManagement} alt="Task Management" className="project-img" />
          </Col> 
          <Col md={6} className="project-info text-start">
            <h5><strong>Dự Án 9:</strong> Website quản lý kế hoạch công việc</h5>
            <p><strong>Công Nghệ:</strong></p>
            <ul>
              <li>React; React Hooks (useState, useEffect)</li>
              <li>React Toastify; HTML5 / JSX</li>
              <li>CSS3;LocalStorage; Flexbox & CSS Grid</li>
            </ul>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://github.com/Wiken2k3/Wiken-Authentic-Store" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/Wiken-Authentic-Store</a></li>
            </ul>
            <Button variant="success" href="https://github.com/Wiken2k3/Wiken-Authentic-Store" target="_blank">Go To Task Management App</Button>
          </Col>
        </Row>

        {/* Dự án 10*/}
        <Row className="align-items-center project-item project-item-dark">
          <Col xs={12} md={6} className="project-info text-start">
            <h5><strong>Dự Án 10:</strong> BLOG App(Website Quản Lí bài Blog)</h5>
            <p><strong>Công Nghệ:</strong></p>
            <ul>
              <li>Javascripts</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://github.com/Wiken2k3/Blog-App" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/Blog-App</a></li>
            </ul>
            <Button variant="success" href="https://github.com/Wiken2k3/Blog-App" target="_blank">Go To BLOG App</Button>
          </Col>
          <Col md={6} className="text-center image-col">
            <img src={BlogAppImg} alt="BLOG App Project" className="project-img" />
          </Col>
        </Row>
        {/* Dự án 11 */}
        <Row className="align-items-center project-item project-item-light">
          <Col xs={12} md={6} className="text-center image-col">
            <img src={AdminDashboard} alt="Admin Dashboard" className="project-img" />
          </Col>
          <Col md={6} className="project-info text-start">
            <h5><strong>Dự Án 11:</strong> Admin Clothing Store</h5>
            <p><strong>Công Nghệ:</strong></p>
            <ul>
              <li>React.js | Redux Toolkit | React Router</li>
              <li>Bootstrap 5 | CSS3/SASS | Responsive Design</li>
              <li>Chart.js | Data Visualization</li>
              <li>Axios | REST API Integration</li>
              <li>JWT Authentication</li>
              <li>Vite | ESLint | Prettier</li>
            </ul>
            <p><strong>Link dự án chi tiết:</strong></p>
            <ul>
              <li><a href="https://github.com/Wiken2k3/Admin-Clothing-Store" target="_blank" rel="noreferrer">https://github.com/Wiken2k3/Admin-Clothing-Store</a></li>
            </ul>
            <Button variant="success" href="https://github.com/Wiken2k3/Admin-Clothing-Store" target="_blank">Go To Admin Clothing Store</Button>
          </Col>
        </Row>
       
      </Container>
    </section>
  );
}
