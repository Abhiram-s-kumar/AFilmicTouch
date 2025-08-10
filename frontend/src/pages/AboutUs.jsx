import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button, Image, Card, Badge } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { FaRocket, FaCode, FaCamera, FaBullhorn, FaStar, FaHeart, FaRegUser, FaRegClock, FaArrowRight, FaEye, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';

const Aboutus = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Responsive style helpers
  const isMobile = window.innerWidth <= 768;

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <FaRocket /> },
    { number: '98%', label: 'Client Satisfaction', icon: <FaStar /> },
    { number: '5+', label: 'Years Experience', icon: <FaRegClock /> },
    { number: '15+', label: 'Team Members', icon: <FaRegUser /> }
  ];

  const values = [
    {
      icon: <FaLightbulb size={40} style={{ color: '#ff6b9d' }} />,
      title: 'Creativity',
      desc: 'We bring fresh perspectives and innovative solutions to every project we undertake.'
    },
    {
      icon: <FaHandshake size={40} style={{ color: '#007bff' }} />,
      title: 'Collaboration',
      desc: 'Working closely with our clients to understand their vision and bring it to life.'
    },
    {
      icon: <FaEye size={40} style={{ color: '#2ed573' }} />,
      title: 'Quality',
      desc: 'We maintain the highest standards in every aspect of our creative process.'
    },
    {
      icon: <FaUsers size={40} style={{ color: '#FFD700' }} />,
      title: 'Community',
      desc: 'Building lasting relationships and fostering a vibrant creative community.'
    }
  ];

  const teamFeatures = [
    { icon: <FaCamera />, title: 'Filmmakers', color: '#ff6b9d' },
    { icon: <FaCode />, title: 'Developers', color: '#007bff' },
    { icon: <FaBullhorn />, title: 'Marketers', color: '#2ed573' },
    { icon: <FaHeart />, title: 'Creatives', color: '#FFD700' }
  ];

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
            background: '#000',
            minHeight: isMobile ? '60vh' : '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10} md={12}>
                <Fade direction="up" triggerOnce>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1
                      style={{
                        fontSize: isMobile ? '2.8rem' : '6rem',
                        fontWeight: 900,
                        letterSpacing: isMobile ? '-2px' : '-5px',
                        marginBottom: isMobile ? 18 : 32,
                        color: '#fff',
                        textShadow: '0 4px 24px rgba(0,0,0,0.5)',
                        lineHeight: isMobile ? 1.1 : 0.9,
                        textTransform: 'uppercase'
                      }}
                    >
                      Discover Us
                      <span
                        style={{
                          display: 'block',
                          background: 'linear-gradient(90deg, #fff 0%, #ccc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          fontWeight: 700
                        }}
                      >
                        A FILMIC TOUCH
                      </span>
                    </h1>
                    <p
                      style={{
                        fontSize: isMobile ? '1.1rem' : '1.5rem',
                        fontWeight: 400,
                        marginBottom: isMobile ? 24 : 40,
                        color: '#fff',
                        maxWidth: 700,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.6,
                        opacity: 0.85
                      }}
                    >
                      We are passionate creators. Explore our journey and join us in making something beautiful.
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
                        Our Story <FaArrowRight style={{ marginLeft: 8 }} />
                      </Button>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
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

        {/* Our Story Section */}
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
                      Story
                    </span>
                  </h2>
                </Fade>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={10}>
                <Fade direction="up" triggerOnce>
                  <Card
                    style={{
                      border: 'none',
                      borderRadius: 24,
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                      overflow: 'hidden'
                    }}
                  >
                    <Card.Header 
                      style={{
                        background: 'linear-gradient(45deg, #ff6b9d, #007bff)',
                        color: '#fff',
                        textAlign: 'center',
                        padding: isMobile ? '20px' : '30px',
                        border: 'none'
                      }}
                    >
                      <h3 className="mb-0 fw-bold">Welcome to A Filmic Touch</h3>
                    </Card.Header>
                    <Card.Body style={{ padding: isMobile ? '30px 20px' : '50px 40px' }}>
                      <Row className="align-items-center">
                        <Col md={8}>
                          <p
                            style={{
                              fontSize: isMobile ? '1rem' : '1.2rem',
                              lineHeight: 1.7,
                              color: '#666',
                              marginBottom: 20
                            }}
                          >
                            Welcome to <span className="fw-bold text-primary">A Filmic Touch</span> – your destination for cinematic excellence. We blend creativity, passion, and professionalism to deliver unforgettable film experiences that resonate with audiences worldwide.
                          </p>
                          <p
                            style={{
                              fontSize: isMobile ? '1rem' : '1.1rem',
                              lineHeight: 1.6,
                              color: '#666'
                            }}
                          >
                            Our journey began with a simple vision: to create meaningful connections through the power of visual storytelling. Today, we're a full-service creative agency that brings together talented filmmakers, developers, and creative minds.
                          </p>
                        </Col>
                        <Col md={4} className="text-center">
                          <div
                            style={{
                              width: isMobile ? '120px' : '150px',
                              height: isMobile ? '120px' : '150px',
                              background: 'linear-gradient(45deg, #ff6b9d, #007bff, #2ed573)',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                          >
                            <FaCamera size={isMobile ? 40 : 60} color="#fff" />
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Mission & Vision Section */}
        <section style={{ padding: isMobile ? '50px 0' : '100px 0', background: '#fff' }}>
          <Container>
            <Row className="g-4">
              <Col md={6}>
                <Fade direction="left" triggerOnce>
                  <Card
                    style={{
                      border: 'none',
                      borderRadius: 24,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      height: '100%'
                    }}
                  >
                    <Card.Header
                      style={{
                        background: '#2ed573',
                        color: '#fff',
                        textAlign: 'center',
                        padding: isMobile ? '20px' : '25px',
                        border: 'none'
                      }}
                    >
                      <h3 className="mb-0 fw-bold">🎯 Our Mission</h3>
                    </Card.Header>
                    <Card.Body style={{ padding: isMobile ? '25px 20px' : '40px 30px' }}>
                      <p
                        style={{
                          fontSize: isMobile ? '1rem' : '1.1rem',
                          lineHeight: 1.6,
                          color: '#666',
                          marginBottom: 0
                        }}
                      >
                        To inspire and connect audiences through the art of film, fostering a vibrant community where stories come alive and creativity thrives in every frame we capture.
                      </p>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
              <Col md={6}>
                <Fade direction="right" triggerOnce>
                  <Card
                    style={{
                      border: 'none',
                      borderRadius: 24,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      height: '100%'
                    }}
                  >
                    <Card.Header
                      style={{
                        background: '#007bff',
                        color: '#fff',
                        textAlign: 'center',
                        padding: isMobile ? '20px' : '25px',
                        border: 'none'
                      }}
                    >
                      <h3 className="mb-0 fw-bold">🚀 Our Vision</h3>
                    </Card.Header>
                    <Card.Body style={{ padding: isMobile ? '25px 20px' : '40px 30px' }}>
                      <p
                        style={{
                          fontSize: isMobile ? '1rem' : '1.1rem',
                          lineHeight: 1.6,
                          color: '#666',
                          marginBottom: 0
                        }}
                      >
                        To be a leading platform for film enthusiasts, creators, and dreamers, setting new standards in cinematic storytelling and audience engagement worldwide.
                      </p>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Our Values Section */}
        <section style={{ padding: isMobile ? '50px 0' : '100px 0', background: '#f8f9fa' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Fade direction="up" triggerOnce>
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
                      Core Values
                    </span>
                  </h2>
                </Fade>
              </Col>
            </Row>

            <Row className="g-4">
              {values.map((value, index) => (
                <Col lg={3} md={6} xs={12} key={index}>
                  <Fade direction="up" delay={index * 150} triggerOnce>
                    <Card
                      style={{
                        border: 'none',
                        borderRadius: 20,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        textAlign: 'center',
                        padding: isMobile ? '20px 15px' : '30px 20px'
                      }}
                    >
                      <div style={{ marginBottom: 20 }}>{value.icon}</div>
                      <h5
                        style={{
                          fontWeight: 700,
                          fontSize: isMobile ? '1.1rem' : '1.3rem',
                          marginBottom: 15,
                          color: '#000'
                        }}
                      >
                        {value.title}
                      </h5>
                      <p
                        style={{
                          color: '#666',
                          fontSize: isMobile ? '0.95rem' : '1rem',
                          lineHeight: 1.5,
                          marginBottom: 0
                        }}
                      >
                        {value.desc}
                      </p>
                    </Card>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Team Section */}
        <section style={{ padding: isMobile ? '50px 0' : '100px 0', background: '#fff' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Fade direction="up" triggerOnce>
                  <h2
                    className="section-title"
                    style={{
                      fontWeight: 800,
                      fontSize: isMobile ? '2rem' : '3rem',
                      marginBottom: 20,
                      letterSpacing: '-2px'
                    }}
                  >
                    Meet Our
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
                      Creative Team
                    </span>
                  </h2>
                </Fade>
              </Col>
            </Row>

            <Row className="justify-content-center mb-5">
              <Col lg={10}>
                <Fade direction="up" triggerOnce>
                  <Card
                    style={{
                      border: 'none',
                      borderRadius: 24,
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                    }}
                  >
                    <Card.Header
                      style={{
                        background: '#000',
                        color: '#fff',
                        textAlign: 'center',
                        padding: isMobile ? '20px' : '30px',
                        border: 'none'
                      }}
                    >
                      <h3 className="mb-0 fw-bold">👥 Our Team</h3>
                    </Card.Header>
                    <Card.Body style={{ padding: isMobile ? '30px 20px' : '50px 40px' }}>
                      <p
                        style={{
                          fontSize: isMobile ? '1rem' : '1.2rem',
                          lineHeight: 1.7,
                          color: '#666',
                          textAlign: 'center',
                          marginBottom: 40
                        }}
                      >
                        Our team is a dynamic blend of passionate filmmakers, creative minds, and tech innovators dedicated to bringing you the best in film culture. Each member brings unique expertise and experience, ensuring every project is handled with exceptional care and professionalism.
                      </p>

                      {/* Team Categories */}
                      <Row className="g-3">
                        {teamFeatures.map((feature, idx) => (
                          <Col md={3} xs={6} key={idx} className="text-center">
                            <div
                              style={{
                                padding: isMobile ? '15px 10px' : '20px 15px',
                                borderRadius: 15,
                                background: `${feature.color}15`,
                                border: `2px solid ${feature.color}30`,
                                transition: 'all 0.3s ease'
                              }}
                            >
                              <div style={{ color: feature.color, fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: 10 }}>
                                {feature.icon}
                              </div>
                              <Badge
                                style={{
                                  background: feature.color,
                                  color: '#fff',
                                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                                  fontWeight: 600,
                                  padding: '6px 12px',
                                  borderRadius: 20
                                }}
                              >
                                {feature.title}
                              </Badge>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
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
                <Fade direction="up" triggerOnce>
                  <h2
                    className="section-title"
                    style={{
                      fontWeight: 800,
                      fontSize: isMobile ? '2rem' : '3rem',
                      marginBottom: 20,
                      letterSpacing: '-2px'
                    }}
                  >
                    Ready to Work
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
                      With Us?
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
                      Contact Us <FaArrowRight style={{ marginLeft: 8 }} />
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
                      View Portfolio
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
          @media (max-width: 768px) {
            h1 { font-size: 2.5rem !important; }
            h2 { font-size: 1.5rem !important; }
            .display-1 { font-size: 2.5rem !important; }
            .section-title { font-size: 2rem !important; }
            .stat-number { font-size: 2rem !important; }
            .stat-label { font-size: 0.9rem !important; }
            .glass-badge { font-size: 0.9rem !important; padding: 8px 16px !important; }
            .cta-section { padding: 50px 0 !important; }
          }
        `}</style>
      </div>
    </>
  );
};

export default Aboutus;
       








