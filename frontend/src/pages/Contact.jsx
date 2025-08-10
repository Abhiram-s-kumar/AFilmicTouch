import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button, Card, Badge, Form, Alert } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaArrowRight, 
  FaPaperPlane,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaVideo,
  FaUsers,
  FaHeadset,
  FaBullhorn
} from 'react-icons/fa';

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  // Responsive style helpers
  const isMobile = window.innerWidth <= 768;

  const contactInfo = [
    {
      icon: <FaPhone size={30} style={{ color: '#ff6b9d' }} />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      subInfo: 'Mon-Fri 9AM-6PM EST',
      color: '#ff6b9d'
    },
    {
      icon: <FaEnvelope size={30} style={{ color: '#007bff' }} />,
      title: 'Email',
      info: 'hello@afilmictouch.com',
      subInfo: 'We reply within 24 hours',
      color: '#007bff'
    },
    {
      icon: <FaMapMarkerAlt size={30} style={{ color: '#2ed573' }} />,
      title: 'Location',
      info: 'Los Angeles, CA',
      subInfo: 'Available worldwide',
      color: '#2ed573'
    },
    {
      icon: <FaClock size={30} style={{ color: '#FFD700' }} />,
      title: 'Hours',
      info: '24/7 Support',
      subInfo: 'Always here for you',
      color: '#FFD700'
    }
  ];

  const services = [
    { icon: <FaVideo />, title: 'Film Production', color: '#ff6b9d' },
    { icon: <FaBullhorn />, title: 'Marketing', color: '#007bff' },
    { icon: <FaUsers />, title: 'Consulting', color: '#2ed573' },
    { icon: <FaHeadset />, title: 'Support', color: '#FFD700' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, color: '#1877F2', name: 'Facebook' },
    { icon: <FaTwitter />, color: '#1DA1F2', name: 'Twitter' },
    { icon: <FaInstagram />, color: '#E4405F', name: 'Instagram' },
    { icon: <FaLinkedin />, color: '#0077B5', name: 'LinkedIn' },
    { icon: <FaWhatsapp />, color: '#25D366', name: 'WhatsApp' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

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
                      Let's Connect
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
                      We believe in creative collaboration. Reach out and let's make something beautiful together.
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
                        href="#contact-form"
                        style={{
                          background: '#fff',
                          color: '#000',
                          border: 'none',
                          fontWeight: 700,
                          fontSize: isMobile ? 14 : 16,
                          padding: isMobile ? '12px 24px' : '18px 36px',
                          borderRadius: 50,
                          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                          transition: 'all 0.3s ease',
                          textDecoration: 'none'
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
                        Start Project <FaArrowRight style={{ marginLeft: 8 }} />
                      </Button>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Contact Info Section */}
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
              {contactInfo.map((info, index) => (
                <Col lg={3} md={6} xs={12} key={index} className="text-center mb-4">
                  <Fade direction={isMobile ? 'left' : 'up'} delay={index * 100} triggerOnce>
                    <div
                      className="contact-card"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 20,
                        padding: isMobile ? '24px 10px' : '40px 20px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        height: '100%'
                      }}
                    >
                      <div style={{ marginBottom: 15 }}>
                        {info.icon}
                      </div>
                      <h5
                        style={{
                          fontSize: isMobile ? '1.1rem' : '1.3rem',
                          fontWeight: 700,
                          marginBottom: 10,
                          color: '#fff'
                        }}
                      >
                        {info.title}
                      </h5>
                      <p
                        style={{
                          fontSize: isMobile ? '1rem' : '1.1rem',
                          color: info.color,
                          fontWeight: 600,
                          marginBottom: 8
                        }}
                      >
                        {info.info}
                      </p>
                      <p
                        style={{
                          fontSize: isMobile ? '0.85rem' : '0.9rem',
                          color: '#ccc',
                          marginBottom: 0
                        }}
                      >
                        {info.subInfo}
                      </p>
                    </div>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" style={{ padding: isMobile ? '50px 0' : '100px 0', background: '#f8f9fa' }}>
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
                    Send Us A
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
                      Message
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
                      <h3 className="mb-0 fw-bold">📝 Tell Us About Your Project</h3>
                    </Card.Header>
                    <Card.Body style={{ padding: isMobile ? '30px 20px' : '50px 40px' }}>
                      {showAlert && (
                        <Alert variant="success" className="mb-4">
                          <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you within 24 hours.
                        </Alert>
                      )}

                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label style={{ fontWeight: 600, color: '#000' }}>Full Name *</Form.Label>
                              <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                style={{
                                  borderRadius: 12,
                                  padding: '12px 16px',
                                  border: '2px solid #e9ecef',
                                  fontSize: '1rem'
                                }}
                                placeholder="Enter your full name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label style={{ fontWeight: 600, color: '#000' }}>Email Address *</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                style={{
                                  borderRadius: 12,
                                  padding: '12px 16px',
                                  border: '2px solid #e9ecef',
                                  fontSize: '1rem'
                                }}
                                placeholder="Enter your email"
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label style={{ fontWeight: 600, color: '#000' }}>Phone Number</Form.Label>
                              <Form.Control
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                style={{
                                  borderRadius: 12,
                                  padding: '12px 16px',
                                  border: '2px solid #e9ecef',
                                  fontSize: '1rem'
                                }}
                                placeholder="Enter your phone number"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label style={{ fontWeight: 600, color: '#000' }}>Project Type</Form.Label>
                              <Form.Select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleInputChange}
                                style={{
                                  borderRadius: 12,
                                  padding: '12px 16px',
                                  border: '2px solid #e9ecef',
                                  fontSize: '1rem'
                                }}
                              >
                                <option value="">Select project type</option>
                                <option value="film-production">Film Production</option>
                                <option value="video-editing">Video Editing</option>
                                <option value="marketing">Marketing Campaign</option>
                                <option value="web-development">Web Development</option>
                                <option value="consulting">Consulting</option>
                                <option value="other">Other</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group className="mb-3">
                          <Form.Label style={{ fontWeight: 600, color: '#000' }}>Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            style={{
                              borderRadius: 12,
                              padding: '12px 16px',
                              border: '2px solid #e9ecef',
                              fontSize: '1rem'
                            }}
                            placeholder="Brief subject of your inquiry"
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label style={{ fontWeight: 600, color: '#000' }}>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            style={{
                              borderRadius: 12,
                              padding: '12px 16px',
                              border: '2px solid #e9ecef',
                              fontSize: '1rem',
                              resize: 'vertical'
                            }}
                            placeholder="Tell us about your project in detail..."
                          />
                        </Form.Group>

                        <div className="text-center">
                          <Button
                            type="submit"
                            style={{
                              background: 'linear-gradient(45deg, #ff6b9d, #007bff)',
                              border: 'none',
                              fontWeight: 700,
                              fontSize: isMobile ? 14 : 16,
                              padding: isMobile ? '12px 30px' : '16px 40px',
                              borderRadius: 50,
                              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                              transition: 'all 0.3s ease',
                              color: '#fff'
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
                            Send Message <FaPaperPlane style={{ marginLeft: 8 }} />
                          </Button>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Services Section */}
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
                    How We Can
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
                      Help You
                    </span>
                  </h2>
                </Fade>
              </Col>
            </Row>

            <Row className="justify-content-center">
              {services.map((service, idx) => (
                <Col lg={3} md={6} xs={12} key={idx} className="mb-4">
                  <Fade direction="up" delay={idx * 150} triggerOnce>
                    <Card
                      style={{
                        border: 'none',
                        borderRadius: 20,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        textAlign: 'center',
                        padding: isMobile ? '20px 15px' : '30px 20px',
                        background: `${service.color}05`
                      }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div
                        style={{
                          fontSize: isMobile ? '2rem' : '2.5rem',
                          color: service.color,
                          marginBottom: 20,
                          transform: hoveredIndex === idx ? 'scale(1.1)' : 'scale(1)',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        {service.icon}
                      </div>
                      <h5
                        style={{
                          fontWeight: 700,
                          fontSize: isMobile ? '1.1rem' : '1.3rem',
                          color: service.color,
                          marginBottom: 0
                        }}
                      >
                        {service.title}
                      </h5>
                    </Card>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Social Media Section */}
        <section style={{ padding: isMobile ? '50px 0' : '80px 0', background: '#f8f9fa' }}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <Fade direction="up" triggerOnce>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: isMobile ? '1.5rem' : '2rem',
                      marginBottom: 30,
                      color: '#000'
                    }}
                  >
                    Follow Us On Social Media
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: isMobile ? 15 : 20,
                      flexWrap: 'wrap'
                    }}
                  >
                    {socialLinks.map((social, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: isMobile ? 50 : 60,
                          height: isMobile ? 50 : 60,
                          borderRadius: '50%',
                          background: social.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: isMobile ? '1.2rem' : '1.5rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}
                        onMouseOver={e => {
                          e.target.style.transform = 'translateY(-5px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                        }}
                        onMouseOut={e => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                        }}
                        title={social.name}
                      >
                        {social.icon}
                      </div>
                    ))}
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
            .glass-badge { font-size: 0.9rem !important; padding: 8px 16px !important; }
          }

          .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2) !important;
          }

          .form-control:focus {
            border-color: #ff6b9d;
            box-shadow: 0 0 0 0.2rem rgba(255, 107, 157, 0.25);
          }

          .form-select:focus {
            border-color: #ff6b9d;
            box-shadow: 0 0 0 0.2rem rgba(255, 107, 157, 0.25);
          }
        `}</style>
      </div>
    </>
  );
};

export default Contact;
            