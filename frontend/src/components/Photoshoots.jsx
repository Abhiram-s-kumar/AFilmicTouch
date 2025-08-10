import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { FaLightbulb, FaCameraRetro, FaRegPaperPlane, FaPlay, FaInstagram, FaArrowRight, FaStar } from 'react-icons/fa';

import Blue1 from '../assets/Blue1.jpg';
import Blue2 from '../assets/Blue2.jpg';
import Blue3 from '../assets/Blue3.jpg';
import Blue4 from '../assets/Blue4.jpg';
import Blue5 from '../assets/Blue5.jpg';
import Blue6 from '../assets/Blue6.jpg';
import Blue7 from '../assets/Blue7.jpg';
import Blue8 from '../assets/Blue8.jpg';
import Blue9 from '../assets/Blue9.jpg';
import './Photoshoots.css';

const galleryImages = [Blue1, Blue2, Blue3, Blue4, Blue5, Blue6, Blue7, Blue8, Blue9];

const categoryImages = {
  all: galleryImages,
  editorial: [Blue1, Blue2, Blue3],
  portrait: [Blue4, Blue5, Blue6],
  commercial: [Blue7, Blue8, Blue9]
};


const PhotographyHome = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work', count: 9 },
    { id: 'editorial', name: 'Editorial', count: 3 },
    { id: 'portrait', name: 'Portrait', count: 3 },
    { id: 'commercial', name: 'Commercial', count: 3 }
  ];

  const stats = [
    { number: '500+', label: 'Shoots Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Happy Clients' }
  ];

  return (
    <>
      <Header />
      <div style={{ fontFamily: 'Poppins, sans-serif', background: '#fff', color: '#000' }}>
        {/* Google Fonts Import */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Hero Section - Full Screen Video Style */}
        <section style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%), url(${Blue2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            animation: 'float 20s ease-in-out infinite'
          }} />

          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8} md={10}>
                <Fade direction="up" triggerOnce>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    

                    <h1 style={{ 
                      fontSize: '5rem', 
                      fontWeight: 900, 
                      letterSpacing: '-3px', 
                      marginBottom: 24,
                      color: '#fff',
                      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      lineHeight: 0.9
                    }}>
                      Capturing
                      <span style={{ 
                        display: 'block', 
                        background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>Moments</span>
                    </h1>

                    <p style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 400, 
                      marginBottom: 40, 
                      color: '#e0e0e0',
                      maxWidth: 600,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      lineHeight: 1.6
                    }}>
                      We transform ordinary moments into extraordinary visual stories. 
                      Every click tells a story, every frame captures emotion.
            </p>

                                         <div style={{ display: 'flex', justifyContent: 'center' }}>
                       <Button style={{ 
                         background: '#fff', 
                         color: '#000', 
                         border: 'none',
                         fontWeight: 700, 
                         fontSize: 16, 
                         padding: '16px 32px', 
                         borderRadius: 50,
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
                         Book a Shoot <FaArrowRight style={{ marginLeft: 8 }} />
                       </Button>
                     </div>
                  </div>
          </Fade>
              </Col>
            </Row>
          </Container>

          {/* Scroll Indicator */}
          <div style={{ 
            position: 'absolute', 
            bottom: 40, 
            left: '50%', 
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite'
          }}>
            <div style={{ 
              width: 40, 
              height: 40, 
              border: '2px solid rgba(255,255,255,0.3)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
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
              <span style={{ fontSize: 18, color: '#fff' }}>↓</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ 
          background: '#000', 
          color: '#fff', 
          padding: '80px 0',
          position: 'relative'
        }}>
          <Container>
            <Row className="justify-content-center">
              {stats.map((stat, index) => (
                <Col lg={3} md={6} key={index} className="text-center mb-4">
                  <Fade direction="up" delay={index * 100} triggerOnce>
                    <div style={{
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: 20,
                      padding: '40px 20px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                      <div style={{ 
                        fontSize: '3rem', 
                        fontWeight: 900, 
                        marginBottom: 10,
                        background: 'linear-gradient(45deg, #fff, #ccc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {stat.number}
                      </div>
                      <div style={{ 
                        fontSize: '1rem', 
                        color: '#ccc',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
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
        <section style={{ padding: '100px 0', background: '#f8f9fa' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Fade direction="up" triggerOnce>
                  <h2 style={{ 
                    fontWeight: 800, 
                    fontSize: '3rem', 
                    marginBottom: 20,
                    letterSpacing: '-2px'
                  }}>
                    Our Photography
                    <span style={{ 
                      display: 'block', 
                      background: 'linear-gradient(45deg, #000, #333)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Services</span>
                  </h2>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    color: '#666', 
                    lineHeight: 1.6,
                    maxWidth: 600,
                    margin: '0 auto'
                  }}>
                    From concept to final delivery, we provide comprehensive photography solutions 
                    that elevate your brand and tell your story.
              </p>
                </Fade>
            </Col>
          </Row>

            <Row className="g-4">
              {[
                {
                  icon: <FaCameraRetro size={50} />,
                  title: 'Editorial Photography',
                  desc: 'Magazine-worthy shots that tell compelling stories and capture authentic moments.',
                  color: '#000'
                },
                {
                  icon: <FaLightbulb size={50} />,
                  title: 'Portrait Sessions',
                  desc: 'Professional headshots and lifestyle portraits that showcase personality and professionalism.',
                  color: '#333'
                },
                {
                  icon: <FaRegPaperPlane size={50} />,
                  title: 'Commercial Photography',
                  desc: 'Product and brand photography that drives engagement and converts customers.',
                  color: '#666'
                }
              ].map((service, index) => (
                <Col lg={4} md={6} key={index}>
                  <Fade direction="up" delay={index * 200} triggerOnce>
                    <div style={{
                      background: '#fff',
                      borderRadius: 24,
                      padding: '50px 30px',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                      border: '1px solid #f0f0f0',
                      transition: 'all 0.4s ease',
                      height: '100%',
                      position: 'relative',
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
                      <div style={{ 
                        color: service.color, 
                        marginBottom: 25,
                        transition: 'all 0.3s ease'
                      }}>
                        {service.icon}
                      </div>
                      <h3 style={{ 
                        fontWeight: 700, 
                        fontSize: '1.5rem', 
                        marginBottom: 15,
                        color: '#000'
                      }}>
                        {service.title}
                      </h3>
                      <p style={{ 
                        color: '#666', 
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        marginBottom: 25
                      }}>
                        {service.desc}
                      </p>
                      <Button style={{
                        background: 'transparent',
                        color: '#000',
                        border: '2px solid #000',
                        borderRadius: 50,
                        padding: '10px 24px',
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#000';
                        e.target.style.color = '#fff';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#000';
                      }}
                      >
                        Learn More <FaArrowRight style={{ marginLeft: 8 }} />
                      </Button>
                    </div>
        </Fade>
                </Col>
              ))}
            </Row>
      </Container>
        </section>

        {/* Portfolio Gallery with Filter */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Fade direction="up" triggerOnce>
                  <h2 style={{ 
                    fontWeight: 800, 
                    fontSize: '3rem', 
                    marginBottom: 20,
                    letterSpacing: '-2px'
                  }}>
                    Featured
                    <span style={{ 
                      display: 'block', 
                      background: 'linear-gradient(45deg, #000, #333)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Portfolio</span>
                  </h2>
                </Fade>
              </Col>
            </Row>

            {/* Filter Buttons */}
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Fade direction="up" delay={200} triggerOnce>
                  <div style={{ display: 'flex', gap: 15, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        style={{
                          background: activeCategory === category.id ? '#000' : 'transparent',
                          color: activeCategory === category.id ? '#fff' : '#000',
                          border: '2px solid #000',
                          borderRadius: 50,
                          padding: '12px 24px',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                        onMouseOver={(e) => {
                          if (activeCategory !== category.id) {
                            e.target.style.background = '#f0f0f0';
                          }
                        }}
                        onMouseOut={(e) => {
                          if (activeCategory !== category.id) {
                            e.target.style.background = 'transparent';
                          }
                        }}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
        </Fade>
              </Col>
            </Row>

            {/* Unique Masonry Gallery Grid */}
         {/* Portfolio Gallery (Masonry) */}
<section style={{ padding: '90px 0', background: '#0b0b0b', color: '#fff' }}>
  <Container>
    {/* Heading */}
    <Row className="justify-content-center mb-4">
      <Col lg={8} className="text-center">
        <h2 style={{ fontWeight: 800, fontSize: '2.6rem', letterSpacing: '-1px' }}>
          Featured <span style={{
            display: 'inline-block',
            background: 'linear-gradient(45deg,#fff,#bfbfbf)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>Portfolio</span>
        </h2>
      </Col>
    </Row>

    {/* Category pills */}
    <Row className="justify-content-center mb-4">
      <Col lg="auto">
        <div className="d-flex gap-2 flex-wrap justify-content-center">
          {categories.map((c) => (
            <Button
              key={c.id}
              variant={activeCategory === c.id ? 'light' : 'outline-light'}
              onClick={() => setActiveCategory(c.id)}
              className="rounded-pill px-3 py-2 fw-semibold"
              style={{ fontSize: '.9rem', borderWidth: 2 }}
            >
              {c.name} <span className="opacity-75 ms-1">({c.count})</span>
            </Button>
          ))}
        </div>
      </Col>
    </Row>

    {/* Masonry grid */}
    <div className="masonry">
      {categoryImages[activeCategory].map((img, idx) => (
        <div
          key={idx}
          className="masonry-item"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => { setModalImg(img); setModalOpen(true); }}
        >
          <div className="masonry-card">
            <img src={img} alt={`shot-${idx}`} className="masonry-img" />
            <div className={`masonry-overlay ${hoveredIndex === idx ? 'show' : ''}`}>
              <div className="masonry-caption">
                {activeCategory === 'all' ? `Photoshoot #${idx + 1}` :
                  `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} #${idx + 1}`}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>

  {/* Lightbox */}
  {modalOpen && (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
        zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}
      onClick={() => setModalOpen(false)}
    >
      <div style={{ position: 'relative', maxWidth: '92vw', maxHeight: '92vh' }}>
        <img
          src={modalImg}
          alt="preview"
          style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 18 }}
        />
        <Button
          variant="light"
          onClick={(e) => { e.stopPropagation(); setModalOpen(false); }}
          className="position-absolute top-0 end-0 m-3 rounded-circle fw-bold"
          style={{ width: 40, height: 40, padding: 0 }}
        >
          ×
        </Button>
      </div>
    </div>
  )}
</section>

          </Container>

          {/* Modal/Lightbox for image preview */}
          {modalOpen && (
            <div
              style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.85)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setModalOpen(false)}
            >
              <div style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 48px rgba(0,0,0,0.3)'
              }}>
                <img
                  src={modalImg}
                  alt="Photoshoot"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    background: '#222'
                  }}
                />
                <Button
                  variant="light"
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    borderRadius: '50%',
                    padding: '8px 12px',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                  onClick={(e) => { e.stopPropagation(); setModalOpen(false); }}
                >
                  ×
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Process Section */}
        <section style={{ padding: '100px 0', background: '#000', color: '#fff' }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <Fade direction="up" triggerOnce>
                  <h2 style={{ 
                    fontWeight: 800, 
                    fontSize: '3rem', 
                    marginBottom: 20,
                    letterSpacing: '-2px'
                  }}>
                    Our Creative
                    <span style={{ 
                      display: 'block', 
                      background: 'linear-gradient(45deg, #fff, #ccc)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Process</span>
                  </h2>
                </Fade>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={10}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 30 }}>
                  {[
                    { icon: <FaLightbulb size={40} />, title: 'Concept', desc: 'We start by understanding your vision and creating a unique concept that aligns with your brand.' },
                    { icon: <FaCameraRetro size={40} />, title: 'Shoot', desc: 'Professional execution with attention to every detail, lighting, and composition.' },
                    { icon: <FaRegPaperPlane size={40} />, title: 'Delivery', desc: 'Final edits, retouching, and delivery of high-resolution images ready for use.' }
                  ].map((step, index) => (
                    <div key={index} style={{ textAlign: 'center', flex: 1, minWidth: 200 }}>
                      <Fade direction="up" delay={index * 200} triggerOnce>
                        <div style={{
                          background: 'rgba(255,255,255,0.05)',
                          borderRadius: 20,
                          padding: '40px 30px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                          e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        >
                          <div style={{ color: '#fff', marginBottom: 20 }}>
                            {step.icon}
                          </div>
                          <h4 style={{ fontWeight: 700, marginBottom: 15, fontSize: '1.3rem' }}>
                            {step.title}
                          </h4>
                          <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            {step.desc}
                          </p>
                        </div>
              </Fade>
            </div>
          ))}
        </div>
          </Col>
        </Row>
      </Container>
        </section>

        {/* CTA Section */}
        <section style={{ 
          padding: '100px 0', 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
        <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <Fade direction="up" triggerOnce>
                  <h2 style={{ 
                    fontWeight: 800, 
                    fontSize: '3rem', 
                    marginBottom: 20,
                    letterSpacing: '-2px'
                  }}>
                    Ready to Create
                    <span style={{ 
                      display: 'block', 
                      background: 'linear-gradient(45deg, #000, #333)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Something Amazing?</span>
                  </h2>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    color: '#666', 
                    marginBottom: 40,
                    lineHeight: 1.6
                  }}>
                    Let's discuss your project and bring your vision to life with stunning photography.
                  </p>
                  <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button style={{ 
                      background: '#000', 
                      color: '#fff', 
                      border: 'none',
                      fontWeight: 700, 
                      fontSize: 16, 
                      padding: '16px 32px', 
                      borderRadius: 50,
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
                      Start Your Project <FaArrowRight style={{ marginLeft: 8 }} />
                    </Button>
                    
                    <Button style={{ 
                      background: 'transparent', 
                      color: '#000', 
                      border: '2px solid #000',
                      fontWeight: 600, 
                      fontSize: 16, 
                      padding: '16px 32px', 
                      borderRadius: 50,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = '#000';
                      e.target.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#000';
                    }}
                    >
                      View Full Portfolio
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
            h1 { font-size: 3rem !important; }
            h2 { font-size: 2rem !important; }
          }
        `}</style>
      </div>
    </>
  );
};

export default PhotographyHome;
