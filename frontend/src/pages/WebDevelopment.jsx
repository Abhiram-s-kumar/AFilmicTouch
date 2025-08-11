import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Image, 
  Card, 
  Badge,
  Nav
} from 'react-bootstrap';
import { 
  FaCode, 
  FaDesktop, 
  FaMobile, 
  FaDatabase, 
  FaStar, 
  FaArrowRight, 
  FaQuoteLeft
} from 'react-icons/fa';

import Blue1 from '../assets/Blue1.jpg';
import Blue2 from '../assets/Blue2.jpg';
import Blue3 from '../assets/Blue3.jpg';
import Blue4 from '../assets/Blue4.jpg';
import Blue5 from '../assets/Blue5.jpg';
import Blue6 from '../assets/Blue6.jpg';
import Blue7 from '../assets/Blue7.jpg';
import Blue8 from '../assets/Blue8.jpg';
import Blue9 from '../assets/Blue9.jpg';
import web from '../assets/Web.jpg';

const WebDevelopment = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 9 },
    { id: 'web', name: 'Web Apps', count: 3 },
    { id: 'mobile', name: 'Mobile Apps', count: 3 },
    { id: 'ecommerce', name: 'E-Commerce', count: 3 }
  ];

  const services = [
    {
      icon: <FaDesktop size={50} />,
      title: 'Frontend Development',
      desc: 'Modern, responsive web applications built with React, Vue, and Angular. We create intuitive user interfaces that engage and convert.',
      features: ['React.js', 'Vue.js', 'Angular', 'Responsive Design']
    },
    {
      icon: <FaDatabase size={50} />,
      title: 'Backend Development',
      desc: 'Robust server-side solutions using Node.js, Python, and PHP. Scalable APIs and database architecture for your business needs.',
      features: ['Node.js', 'Python', 'PHP', 'API Development']
    },
    {
      icon: <FaMobile size={50} />,
      title: 'Mobile Development',
      desc: 'Cross-platform mobile applications using React Native and Flutter. Native performance with faster development time.',
      features: ['React Native', 'Flutter', 'iOS', 'Android']
    }
  ];

  const packages = [
    {
      name: 'Basic',
      price: '$3,500',
      duration: 'One-time',
      features: [
        'Responsive Website',
        '5 Pages',
        'Contact Form',
        'SEO Optimization',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$8,500',
      duration: 'One-time',
      features: [
        'Custom Web Application',
        'Admin Dashboard',
        'Database Integration',
        'API Development',
        'Advanced Features',
        '3 Months Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      duration: 'One-time',
      features: [
        'Full-Stack Application',
        'Mobile App',
        'Cloud Deployment',
        'Advanced Security',
        'Performance Optimization',
        '6 Months Support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'TechCorp Solutions',
      industry: 'SaaS Platform',
      text: 'A FILMIC TOUCH built our entire platform from scratch. The performance and user experience exceeded our expectations!',
      rating: 5
    },
    {
      name: 'E-Commerce Plus',
      industry: 'Online Retail',
      text: 'Our new website increased conversions by 200%. The team delivered exactly what we needed on time and budget.',
      rating: 5
    },
    {
      name: 'Startup Innovate',
      industry: 'Mobile App',
      text: 'Professional development team that truly understands business needs. Our app launch was a huge success!',
      rating: 5
    }
  ];

  const categoryImages = {
    all: [Blue1, Blue2, Blue3],
    web: [Blue4, Blue5, Blue6],
    mobile: [Blue7, Blue8, Blue9],
    ecommerce: [Blue2, Blue5, Blue8]
  };

  return (
    <>
      <Header />
      <div className="web-development-page">
        {/* Google Fonts Import */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Hero Section - FIXED */}
        <div 
          className="hero-section d-flex align-items-center justify-content-center position-relative overflow-hidden"
          style={{
            // REMOVED the conflicting 'background: #fff' property
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), url(${web})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            fontFamily: 'Poppins, sans-serif',
            color: '#fff' // Changed from #000 to #fff for proper text visibility
          }}
        >
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10} md={12}>
                <div className="hero-content position-relative" style={{ zIndex: 2 }}>
                  <Badge 
                    className="hero-badge mb-4 px-4 py-2 rounded-pill fw-medium"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    Building Digital Solutions Since 2019
                  </Badge>
                  
                  <h1 
                    className="text-white mb-4 hero-title"
                    style={{ 
                      fontSize: '5rem', 
                      fontWeight: 900, 
                      letterSpacing: '-3px',
                      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      lineHeight: 0.9
                    }}
                  >
                    Web
                    <span 
                      className="d-block"
                      style={{ 
                        background: 'linear-gradient(45deg, #fff, #007bff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Development
                    </span>
                  </h1>
                  
                  <p 
                    className="text-light mb-5"
                    style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 400,
                      color: '#e0e0e0',
                      maxWidth: 700,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      lineHeight: 1.6
                    }}
                  >
                    We create cutting-edge web applications and digital solutions that drive business growth. 
                    From concept to deployment, we build scalable, modern applications that users love.
                  </p>
                  
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Button 
                      className="btn-hero-primary px-4 py-3 rounded-pill"
                      style={{ 
                        background: '#fff', 
                        color: '#000', 
                        border: 'none',
                        fontWeight: 700, 
                        fontSize: 16,
                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                      }}
                    >
                      Start Project
                    </Button>
                    <Button 
                      variant="outline-light" 
                      className="btn-hero-secondary px-4 py-3 rounded-pill"
                      style={{ 
                        background: 'transparent', 
                        color: '#fff', 
                        border: '2px solid #fff',
                        fontWeight: 600, 
                        fontSize: 16,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#fff';
                        e.target.style.color = '#000';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#fff';
                      }}
                    >
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          
          {/* Scroll Indicator */}
          <div 
            className="position-absolute"
            style={{ 
              bottom: 40, 
              left: '50%', 
              transform: 'translateX(-50%)',
              animation: 'bounce 2s infinite'
            }}
          >
            <div 
              className="scroll-arrow d-flex align-items-center justify-content-center"
              style={{ 
                width: 40, 
                height: 40, 
                border: '2px solid rgba(255,255,255,0.3)', 
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: 18,
                color: '#fff'
              }}
              onMouseOver={(e) => {
                e.target.style.borderColor = '#fff';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              ↓
            </div>
          </div>
        </div>

        {/* Rest of your sections remain the same */}
        {/* Services Section */}
        <div className="py-5" style={{ padding: '100px 0', background: '#f8f9fa' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 
                  className="mb-4"
                  style={{ 
                    fontWeight: 800, 
                    fontSize: '3rem',
                    letterSpacing: '-2px'
                  }}
                >
                  Our Development
                  <span 
                    className="d-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #000, #007bff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Services
                  </span>
                </h2>
                <p 
                  className="text-muted"
                  style={{ 
                    fontSize: '1.2rem',
                    lineHeight: 1.6,
                    maxWidth: 600,
                    margin: '0 auto'
                  }}
                >
                  Comprehensive web development solutions using modern technologies and best practices. 
                  We build applications that scale with your business.
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              {services.map((service, index) => (
                <Col lg={4} md={6} key={index}>
                  <Card 
                    className="h-100 border-0 service-card"
                    style={{
                      borderRadius: 24,
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                      transition: 'all 0.4s ease',
                      overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                    }}
                  >
                    <Card.Body style={{ padding: '50px 30px' }}>
                      <div 
                        className="text-primary mb-4"
                        style={{ transition: 'all 0.3s ease' }}
                      >
                        {service.icon}
                      </div>
                      <Card.Title 
                        className="mb-3"
                        style={{ 
                          fontWeight: 700, 
                          fontSize: '1.5rem',
                          color: '#000'
                        }}
                      >
                        {service.title}
                      </Card.Title>
                      <Card.Text 
                        className="mb-4"
                        style={{ 
                          color: '#666', 
                          fontSize: '1rem',
                          lineHeight: 1.6
                        }}
                      >
                        {service.desc}
                      </Card.Text>
                      <ul 
                        className="list-unstyled"
                        style={{ 
                          padding: 0, 
                          margin: 0,
                          color: '#666'
                        }}
                      >
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="d-flex align-items-center mb-2"
                            style={{ fontSize: '0.9rem' }}
                          >
                            <FaCode 
                              className="text-primary me-2" 
                              style={{ fontSize: '0.8rem' }} 
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* Portfolio Gallery */}
        <div className="py-5" style={{ padding: '100px 0', background: '#fff' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 
                  className="mb-4"
                  style={{ 
                    fontWeight: 800, 
                    fontSize: '3rem',
                    letterSpacing: '-2px'
                  }}
                >
                  Project
                  <span 
                    className="d-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #000, #007bff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Portfolio
                  </span>
                </h2>
              </Col>
            </Row>

            {/* Filter Buttons */}
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? 'dark' : 'outline-dark'}
                      onClick={() => setActiveCategory(category.id)}
                      className="rounded-pill px-4 py-2"
                      style={{
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        border: '2px solid #000',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      {category.name} ({category.count})
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>

            {/* Gallery Grid */}
            <Row className="g-4">
              {categoryImages[activeCategory].map((img, idx) => (
                <Col key={idx} xs={12} sm={6} md={4} lg={4}>
                  <div 
                    className="portfolio-item position-relative overflow-hidden"
                    style={{
                      borderRadius: 20,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image
                      src={img}
                      className="w-100"
                      style={{
                        height: '350px',
                        objectFit: 'cover',
                        transition: 'all 0.4s ease',
                        filter: hoveredIndex === idx ? 'grayscale(0%) brightness(1.1)' : 'grayscale(100%)',
                        transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)'
                      }}
                      fluid
                    />
                    {/* Overlay */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                        opacity: hoveredIndex === idx ? 1 : 0,
                        transition: 'all 0.4s ease'
                      }}
                    >
                      <div className="text-center text-white">
                        <h5 className="fw-semibold mb-2">Project {idx + 1}</h5>
                        <p className="small mb-0" style={{ opacity: 0.9 }}>View Details</p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* Packages Section */}
        <div className="py-5 text-white" style={{ padding: '100px 0', background: '#000' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 
                  className="mb-4"
                  style={{ 
                    fontWeight: 800, 
                    fontSize: '3rem',
                    letterSpacing: '-2px'
                  }}
                >
                  Development
                  <span 
                    className="d-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #fff, #007bff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Packages
                  </span>
                </h2>
                <p 
                  style={{ 
                    fontSize: '1.2rem',
                    color: '#ccc',
                    lineHeight: 1.6,
                    maxWidth: 600,
                    margin: '0 auto'
                  }}
                >
                  Choose the perfect development package for your project. All packages include 
                  consultation, design, development, testing, and deployment.
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              {packages.map((pkg, index) => (
                <Col lg={4} md={6} key={index}>
                  <Card 
                    className="h-100 border-0 package-card position-relative overflow-hidden"
                    style={{
                      background: pkg.popular ? 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)' : 'rgba(255,255,255,0.05)',
                      border: pkg.popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 24,
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.4s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {pkg.popular && (
                      <div 
                        className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill"
                        style={{
                          background: '#fff',
                          color: '#007bff',
                          fontSize: '0.8rem',
                          fontWeight: 600
                        }}
                      >
                        Most Popular
                      </div>
                    )}
                    
                    <Card.Body className="text-center" style={{ padding: '50px 30px' }}>
                      <Card.Title 
                        className="mb-3"
                        style={{ 
                          fontWeight: 700, 
                          fontSize: '1.8rem',
                          color: pkg.popular ? '#fff' : '#fff'
                        }}
                      >
                        {pkg.name}
                      </Card.Title>
                      <div className="mb-4">
                        <span 
                          style={{ 
                            fontSize: '3rem', 
                            fontWeight: 900,
                            color: pkg.popular ? '#fff' : '#fff'
                          }}
                        >
                          {pkg.price}
                        </span>
                        <div 
                          style={{ 
                            fontSize: '1rem',
                            color: pkg.popular ? 'rgba(255,255,255,0.8)' : '#ccc'
                          }}
                        >
                          {pkg.duration}
                        </div>
                      </div>
                      
                      <ul 
                        className="list-unstyled text-start mb-4"
                        style={{ margin: '0 0 30px 0' }}
                      >
                        {pkg.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="d-flex align-items-center mb-3"
                            style={{ 
                              fontSize: '0.95rem',
                              color: pkg.popular ? 'rgba(255,255,255,0.9)' : '#ccc'
                            }}
                          >
                            <FaCode 
                              className="me-3 flex-shrink-0" 
                              style={{ 
                                color: pkg.popular ? '#fff' : '#007bff', 
                                fontSize: '0.8rem'
                              }} 
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant={pkg.popular ? 'light' : 'outline-light'}
                        size="lg"
                        className="rounded-pill px-4 py-2 fw-semibold w-100"
                        style={{ transition: 'all 0.3s ease' }}
                      >
                        Choose Package
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* Testimonials Section */}
        <div className="py-5" style={{ padding: '100px 0', background: '#f8f9fa' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 
                  className="mb-4"
                  style={{ 
                    fontWeight: 800, 
                    fontSize: '3rem',
                    letterSpacing: '-2px'
                  }}
                >
                  Client
                  <span 
                    className="d-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #000, #007bff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Success
                  </span>
                </h2>
              </Col>
            </Row>

            <Row className="g-4">
              {testimonials.map((testimonial, index) => (
                <Col lg={4} md={6} key={index}>
                  <Card 
                    className="h-100 border-0 testimonial-card"
                    style={{
                      borderRadius: 20,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.12)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                    }}
                  >
                    <Card.Body style={{ padding: '40px 30px' }}>
                      <div 
                        className="text-primary mb-3"
                        style={{ fontSize: '2rem' }}
                      >
                        <FaQuoteLeft />
                      </div>
                      
                      <Card.Text 
                        className="text-muted mb-4 fst-italic"
                        style={{ 
                          fontSize: '1rem',
                          lineHeight: 1.6
                        }}
                      >
                        "{testimonial.text}"
                      </Card.Text>
                      
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h6 
                            className="fw-semibold mb-0"
                            style={{ 
                              color: '#000',
                              fontSize: '1rem'
                            }}
                          >
                            {testimonial.name}
                          </h6>
                          <small className="text-muted">{testimonial.industry}</small>
                        </div>
                        <div className="d-flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-primary" style={{ fontSize: '0.9rem' }} />
                          ))}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* CTA Section */}
        <div 
          className="py-5 text-white position-relative overflow-hidden"
          style={{ 
            padding: '100px 0', 
            background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)'
          }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h2 
                  className="mb-4"
                  style={{ 
                    fontWeight: 800, 
                    fontSize: '3rem',
                    letterSpacing: '-2px'
                  }}
                >
                  Ready to Build
                  <span 
                    className="d-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Something Amazing?
                  </span>
                </h2>
                <p 
                  className="mb-5"
                  style={{ 
                    fontSize: '1.2rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.6
                  }}
                >
                  Let's discuss your project requirements and create a custom solution that drives results.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button 
                    className="px-4 py-3 rounded-pill"
                    style={{ 
                      background: '#fff', 
                      color: '#007bff', 
                      border: 'none',
                      fontWeight: 700, 
                      fontSize: 16,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                    }}
                  >
                    Get Free Quote <FaArrowRight className="ms-2" />
                  </Button>
                  
                  <Button 
                    variant="outline-light" 
                    className="px-4 py-3 rounded-pill"
                    style={{ 
                      fontWeight: 600, 
                      fontSize: 16,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = '#fff';
                      e.target.style.color = '#007bff';
                      e.target.style.borderColor = '#fff';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#fff';
                      e.target.style.borderColor = '#fff';
                    }}
                  >
                    View Portfolio
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Footer />

        {/* Custom CSS */}
        <style>{`
          .web-development-page {
            font-family: 'Poppins', sans-serif;
            background: #fff;
            color: #000;
          }
          
          @keyframes bounce {
            0%, 100% { 
              transform: translateY(0); 
            }
            50% { 
              transform: translateY(10px); 
            }
          }
          
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
            }
            33% { 
              transform: translateY(-20px) rotate(1deg); 
            }
            66% { 
              transform: translateY(10px) rotate(-1deg); 
            }
          }
          
          @media (max-width: 768px) {
            .hero-title { 
              font-size: 3rem !important; 
            }
            h2 { 
              font-size: 2rem !important; 
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default WebDevelopment;
