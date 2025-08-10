import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button, Image, Card, Badge } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { FaRocket, FaCode, FaCamera, FaBullhorn, FaStar, FaHeart, FaRegUser, FaRegClock, FaArrowRight } from 'react-icons/fa';

import Blue1 from '../assets/Blue1.jpg';
import Blue2 from '../assets/Blue2.jpg';
import Blue3 from '../assets/Blue3.jpg';
import Blue4 from '../assets/Blue4.jpg';
import Blue5 from '../assets/Blue5.jpg';
import Blue6 from '../assets/Blue6.jpg';
import Blue7 from '../assets/Blue7.jpg';
import Blue8 from '../assets/Blue8.jpg';
import Blue9 from '../assets/Blue9.jpg';
import './Home.css'; // Ensure your CSS is imported for responsive styles

const processSteps = [
  {
    icon: <FaRocket size={40} style={{ color: '#ff6b9d' }} />,
    title: 'Discovery',
    desc: 'We listen to your goals and analyze your needs to craft a tailored strategy.'
  },
  {
    icon: <FaCode size={40} style={{ color: '#007bff' }} />,
    title: 'Design & Build',
    desc: 'Our creative and technical teams design, develop, and refine your solution.'
  },
  {
    icon: <FaBullhorn size={40} style={{ color: '#2ed573' }} />,
    title: 'Launch & Promote',
    desc: 'We launch your project and help you reach your audience for maximum impact.'
  },
  {
    icon: <FaStar size={40} style={{ color: '#FFD700' }} />,
    title: 'Support & Grow',
    desc: 'Ongoing support and optimization to ensure your continued success.'
  }
];

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <FaCode size={60} />,
      title: 'Web Development',
      desc: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      color: '#007bff',
      features: ['React.js', 'Node.js', 'Full-Stack', 'Mobile Apps']
    },
    {
      icon: <FaBullhorn size={60} />,
      title: 'Digital Marketing',
      desc: 'Strategic digital marketing solutions that drive growth and increase conversions.',
      color: '#ff4757',
      features: ['SEO', 'PPC', 'Social Media', 'Content Marketing']
    },
    {
      icon: <FaCamera size={60} />,
      title: 'Photography & Video',
      desc: 'Professional photography and videography services for all your creative needs.',
      color: '#2ed573',
      features: ['Portrait', 'Commercial', 'Events', 'Cinematic']
    },
    {
      icon: <FaHeart size={60} />,
      title: 'Wedding & Events',
      desc: 'Capturing precious moments and creating unforgettable event experiences.',
      color: '#ff6b9d',
      features: ['Weddings', 'Engagement', 'Corporate', 'Celebrations']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <FaRocket /> },
    { number: '98%', label: 'Client Satisfaction', icon: <FaStar /> },
    { number: '5+', label: 'Years Experience', icon: <FaRegClock /> },
    { number: '200+', label: 'Happy Clients', icon: <FaRegUser /> }
  ];

  const testimonials = [
    {
      name: 'TechCorp Solutions',
      role: 'CEO',
      text: 'A FILMIC TOUCH transformed our entire digital presence. From website to marketing, everything exceeded expectations!',
      rating: 5,
      service: 'Web Development & Marketing'
    },
    {
      name: 'Sarah & Michael',
      role: 'Wedding Couple',
      text: 'Our wedding photos and video are absolutely stunning! They captured every precious moment perfectly.',
      rating: 5,
      service: 'Wedding Photography'
    },
    {
      name: 'E-Commerce Pro',
      role: 'Founder',
      text: 'Professional team that delivers results. Our online sales increased by 300% after working with them.',
      rating: 5,
      service: 'Digital Marketing'
    }
  ];

  const galleryImages = [Blue1, Blue2, Blue3, Blue4, Blue5, Blue6, Blue7, Blue8, Blue9];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  // Responsive style helpers
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <Header />
      <div
        style={{
          fontFamily: 'Poppins, sans-serif',
          background: '#fff',
          color: '#000',
          minHeight: '100vh',
          overflowX: 'hidden'
        }}
      >
        {/* Google Fonts Import */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            background: isMobile
              ? `linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 100%), url(${Blue3})`
              : `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), url(${Blue3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: isMobile ? 'scroll' : 'fixed',
            minHeight: isMobile ? '80vh' : '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 0.5s'
          }}
        >
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10} md={12}>
                <Fade direction="up" triggerOnce>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <Badge
                      className="glass-badge"
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: '#fff',
                        padding: isMobile ? '8px 16px' : '12px 24px',
                        borderRadius: 50,
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        fontWeight: 500,
                        marginBottom: isMobile ? 18 : 30,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <FaRocket style={{ marginRight: 8, color: '#ff6b9d' }} />
                      Creative Studio & Digital Agency
                    </Badge>

                    <h1
                      className="display-1 filmic"
                      style={{
                        fontSize: isMobile ? '2.5rem' : '5.5rem',
                        fontWeight: 900,
                        letterSpacing: isMobile ? '-2px' : '-4px',
                        marginBottom: isMobile ? 16 : 24,
                        color: '#fff',
                        textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        lineHeight: isMobile ? 1.1 : 0.9,
                        transition: 'font-size 0.3s'
                      }}
                    >
                      A FILMIC
                      <span
                        className="touch-gradient"
                        style={{
                          display: 'block',
                          background: 'linear-gradient(45deg, #fff, #ff6b9d, #007bff, #2ed573)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        TOUCH
                      </span>
                    </h1>

                    <p
                      style={{
                        fontSize: isMobile ? '1.1rem' : '1.5rem',
                        fontWeight: 400,
                        marginBottom: isMobile ? 24 : 40,
                        color: '#e0e0e0',
                        maxWidth: 800,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.6,
                        transition: 'font-size 0.3s'
                      }}
                    >
                      We are a full-service creative agency specializing in web development, digital marketing,
                      photography, videography, and event coverage. From concept to creation, we bring your vision to life.
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        gap: isMobile ? 10 : 20,
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                      }}
                    >
                      <Button
                        style={{
                          background: '#fff',
                          color: '#000',
                          border: 'none',
                          fontWeight: 700,
                          fontSize: isMobile ? 14 : 16,
                          padding: isMobile ? '12px 24px' : '18px 36px',
                          borderRadius: 50,
                          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={e => {
                          e.target.style.transform = 'translateY(-3px)';
                          e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
                        }}
                        onMouseOut={e => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                        }}
                      >
                        Explore Our Work <FaArrowRight style={{ marginLeft: 8 }} />
                      </Button>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>

          {/* Scroll Indicator */}
          <div
            className="scroll-cue"
            style={{
              position: 'absolute',
              bottom: isMobile ? 20 : 40,
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'bounce 2s infinite'
            }}
          >
            <div
              style={{
                width: isMobile ? 32 : 40,
                height: isMobile ? 32 : 40,
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={e => {
                e.target.style.borderColor = '#fff';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseOut={e => {
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontSize: isMobile ? 14 : 18, color: '#fff' }}>↓</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          style={{
            background: '#000',
            color: '#fff',
            padding: isMobile ? '40px 0' : '80px 0',
            position: 'relative'
          }}
        >
          <Container>
            <Row className="justify-content-center">
              {stats.map((stat, index) => (
                <Col lg={3} md={6} xs={12} key={index} className="text-center mb-4">
                  <Fade direction={isMobile ? 'left' : 'up'} delay={index * 100} triggerOnce>
                    <div
                      className="stat-card"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 20,
                        padding: isMobile ? '24px 10px' : '40px 20px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ fontSize: isMobile ? '1.5rem' : '2rem', color: '#ff6b9d', marginBottom: 15 }}>
                        {stat.icon}
                      </div>
                      <div
                        className="stat-number"
                        style={{
                          fontSize: isMobile ? '2rem' : '3rem',
                          fontWeight: 900,
                          marginBottom: 10,
                          background: 'linear-gradient(45deg, #fff, #ccc)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {stat.number}
                      </div>
                      <div
                        className="stat-label"
                        style={{
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          color: '#ccc',
                          fontWeight: 500,
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Services Section */}
        <section style={{ padding: isMobile ? '50px 0' : '100px 0', background: '#f8f9fa' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Fade direction={isMobile ? 'left' : 'up'} triggerOnce>
                  <h2
                    className="section-title"
                    style={{
                      fontWeight: 800,
                      fontSize: isMobile ? '2rem' : '3rem',
                      marginBottom: 20,
                      letterSpacing: '-2px'
                    }}
                  >
                    Our Complete
                    <span
                      className="gradient-text"
                      style={{
                        display: 'block',
                        background: 'linear-gradient(45deg, #000, #ff6b9d)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Service Suite
                    </span>
                  </h2>
                  <p
                    style={{
                      fontSize: isMobile ? '1rem' : '1.2rem',
                      color: '#666',
                      lineHeight: 1.6,
                      maxWidth: 600,
                      margin: '0 auto'
                    }}
                  >
                    From web development to creative content, we provide end-to-end solutions
                    that help your business grow and succeed in the digital world.
                  </p>
                </Fade>
              </Col>
            </Row>

            <Row className="g-4">
              {services.map((service, index) => (
                <Col lg={6} md={6} xs={12} key={index}>
                  <Fade direction={isMobile ? 'left' : 'up'} delay={index * 200} triggerOnce>
                    <Card
                      className="service-card"
                      style={{
                        border: 'none',
                        borderRadius: 24,
                        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                        transition: 'all 0.4s ease',
                        height: '100%',
                        overflow: 'hidden',
                        cursor: 'pointer'
                      }}
                    >
                      <Card.Body style={{ padding: isMobile ? '30px 16px' : '50px 40px', textAlign: 'center' }}>
                        <div style={{ color: service.color, marginBottom: 25, transition: 'all 0.3s ease' }}>
                          {service.icon}
                        </div>
                        <Card.Title
                          style={{
                            fontWeight: 700,
                            fontSize: isMobile ? '1.2rem' : '1.8rem',
                            marginBottom: 15,
                            color: '#000'
                          }}
                        >
                          {service.title}
                        </Card.Title>
                        <Card.Text
                          style={{
                            color: '#666',
                            fontSize: isMobile ? '1rem' : '1.1rem',
                            lineHeight: 1.6,
                            marginBottom: 25
                          }}
                        >
                          {service.desc}
                        </Card.Text>
                        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                          {service.features.map((feature, idx) => (
                            <Badge
                              key={idx}
                              style={{
                                background: service.color,
                                color: '#fff',
                                padding: isMobile ? '4px 8px' : '6px 12px',
                                borderRadius: 20,
                                fontSize: '0.8rem',
                                fontWeight: 500
                              }}
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Our Process Section */}
        <section style={{ padding: isMobile ? '50px 0' : '100px 0', background: '#fff' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Fade direction={isMobile ? 'left' : 'up'} triggerOnce>
                  <h2
                    className="section-title"
                    style={{
                      fontWeight: 800,
                      fontSize: isMobile ? '2rem' : '3rem',
                      marginBottom: 20,
                      letterSpacing: '-2px'
                    }}
                  >
                    Our
                    <span
                      className="gradient-text"
                      style={{
                        display: 'block',
                        background: 'linear-gradient(45deg, #000, #ff6b9d)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Process
                    </span>
                  </h2>
                  <p
                    style={{
                      fontSize: isMobile ? '1rem' : '1.2rem',
                      color: '#666',
                      lineHeight: 1.6,
                      maxWidth: 600,
                      margin: '0 auto'
                    }}
                  >
                    We guide you from idea to launch and beyond, ensuring a smooth and successful journey.
                  </p>
                </Fade>
              </Col>
            </Row>
            <Row className="g-4 justify-content-center">
              {processSteps.map((step, idx) => (
                <Col key={idx} lg={3} md={6} xs={12}>
                  <Fade direction={isMobile ? 'left' : 'up'} delay={idx * 150} triggerOnce>
                    <Card
                      style={{
                        border: 'none',
                        borderRadius: 20,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        textAlign: 'center',
                        padding: isMobile ? '24px 10px' : '40px 20px'
                      }}
                    >
                      <div style={{ marginBottom: 20 }}>{step.icon}</div>
                      <h5
                        style={{
                          fontWeight: 700,
                          fontSize: isMobile ? '1rem' : '1.3rem',
                          marginBottom: 12,
                          color: '#000'
                        }}
                      >
                        {step.title}
                      </h5>
                      <p
                        style={{
                          color: '#666',
                          fontSize: isMobile ? '0.95rem' : '1rem',
                          lineHeight: 1.5
                        }}
                      >
                        {step.desc}
                      </p>
                    </Card>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section style={{ padding: isMobile ? '50px 0' : '100px 0', background: '#f8f9fa' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Fade direction={isMobile ? 'left' : 'up'} triggerOnce>
                  <h2
                    className="section-title"
                    style={{
                      fontWeight: 800,
                      fontSize: isMobile ? '2rem' : '3rem',
                      marginBottom: 20,
                      letterSpacing: '-2px'
                    }}
                  >
                    What Our
                    <span
                      className="gradient-text"
                      style={{
                        display: 'block',
                        background: 'linear-gradient(45deg, #000, #ff6b9d)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Clients Say
                    </span>
                  </h2>
                </Fade>
              </Col>
            </Row>

            <Row className="g-4">
              {testimonials.map((testimonial, index) => (
                <Col lg={4} md={6} xs={12} key={index}>
                  <Fade direction={isMobile ? 'left' : 'up'} delay={index * 200} triggerOnce>
                    <Card
                      className="testimonial-card"
                      style={{
                        border: 'none',
                        borderRadius: 20,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        height: '100%'
                      }}
                    >
                      <Card.Body style={{ padding: isMobile ? '24px 10px' : '40px 30px' }}>
                        <div style={{ color: '#ff6b9d', fontSize: isMobile ? '1.2rem' : '2rem', marginBottom: 20 }}>
                          <FaStar />
                        </div>
                        <Card.Text
                          style={{
                            fontSize: isMobile ? '0.95rem' : '1rem',
                            lineHeight: 1.6,
                            color: '#666',
                            marginBottom: 25,
                            fontStyle: 'italic'
                          }}
                        >
                          "{testimonial.text}"
                        </Card.Text>
                        <div style={{ marginBottom: 15 }}>
                          <Badge
                            style={{
                              background: '#ff6b9d',
                              color: '#fff',
                              padding: isMobile ? '2px 8px' : '4px 12px',
                              borderRadius: 15,
                              fontSize: '0.8rem',
                              fontWeight: 500
                            }}
                          >
                            {testimonial.service}
                          </Badge>
                        </div>
                        <div>
                          <h6
                            style={{
                              fontWeight: 600,
                              margin: 0,
                              color: '#000',
                              fontSize: isMobile ? '0.95rem' : '1rem'
                            }}
                          >
                            {testimonial.name}
                          </h6>
                          <small style={{ color: '#999' }}>{testimonial.role}</small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* CTA Section */}
        <section
          className="cta-section"
          style={{
            padding: isMobile ? '50px 0' : '100px 0',
            background: 'linear-gradient(135deg, #ff6b9d 0%, #007bff 50%, #2ed573 100%)',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <Fade direction={isMobile ? 'left' : 'up'} triggerOnce>
                  <h2
                    className="section-title"
                    style={{
                      fontWeight: 800,
                      fontSize: isMobile ? '2rem' : '3rem',
                      marginBottom: 20,
                      letterSpacing: '-2px'
                    }}
                  >
                    Ready to Create
                    <span
                      className="cta-sub"
                      style={{
                        display: 'block',
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
                    style={{
                      fontSize: isMobile ? '1rem' : '1.2rem',
                      color: 'rgba(255,255,255,0.9)',
                      marginBottom: 40,
                      lineHeight: 1.6
                    }}
                  >
                    Let's discuss your project and bring your vision to life with our comprehensive creative services.
                  </p>
                  <div style={{ display: 'flex', gap: isMobile ? 10 : 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      style={{
                        background: '#fff',
                        color: '#000',
                        border: 'none',
                        fontWeight: 700,
                        fontSize: isMobile ? 14 : 16,
                        padding: isMobile ? '10px 20px' : '16px 32px',
                        borderRadius: 50,
                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={e => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
                      }}
                      onMouseOut={e => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                      }}
                    >
                      Start Your Project <FaArrowRight style={{ marginLeft: 8 }} />
                    </Button>

                    <Button
                      style={{
                        background: 'transparent',
                        color: '#fff',
                        border: '2px solid #fff',
                        fontWeight: 600,
                        fontSize: isMobile ? 14 : 16,
                        padding: isMobile ? '10px 20px' : '16px 32px',
                        borderRadius: 50,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={e => {
                        e.target.style.background = '#fff';
                        e.target.style.color = '#000';
                      }}
                      onMouseOut={e => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#fff';
                      }}
                    >
                      Get Free Consultation
                    </Button>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />

        {/* Custom CSS */}
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(1deg); }
            66% { transform: translateY(10px) rotate(-1deg); }
          }
          @media (max-width: 768px) {
            h1 { font-size: 2.5rem !important; }
            h2 { font-size: 1.5rem !important; }
            .display-1 { font-size: 2.5rem !important; }
            .section-title { font-size: 2rem !important; }
            .stat-number { font-size: 2rem !important; }
            .stat-label { font-size: 0.9rem !important; }
            .service-card, .testimonial-card { padding: 10px !important; }
            .glass-badge { font-size: 0.9rem !important; padding: 8px 16px !important; }
            .cta-section { padding: 50px 0 !important; }
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;
                   