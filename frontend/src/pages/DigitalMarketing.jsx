import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button, Image, Card, Carousel, Badge } from 'react-bootstrap';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { FaRocket, FaChartLine, FaBullhorn, FaSearch, FaRegClock, FaRegUser, FaStar, FaInstagram, FaPlay, FaArrowRight, FaQuoteLeft, FaGlobe, FaMobile, FaDesktop } from 'react-icons/fa';

import Blue1 from '../assets/Blue1.jpg';
import Blue2 from '../assets/Blue2.jpg';
import Blue3 from '../assets/Blue3.jpg';
import Blue4 from '../assets/Blue4.jpg';
import Blue5 from '../assets/Blue5.jpg';
import Blue6 from '../assets/Blue6.jpg';
import Blue7 from '../assets/Blue7.jpg';
import Blue8 from '../assets/Blue8.jpg';
import Blue9 from '../assets/Blue9.jpg';
import DigitalMarketingImage from '../assets/digitalmarketing.jpg';

const DigitalMarketing = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Campaigns', count: 9 },
    { id: 'seo', name: 'SEO', count: 3 },
    { id: 'social', name: 'Social Media', count: 3 },
    { id: 'ppc', name: 'PPC', count: 3 }
  ];

  const services = [
    {
      icon: <FaSearch size={50} />,
      title: 'Search Engine Optimization',
      desc: 'Improve your website\'s visibility in search results and drive organic traffic to your business.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: <FaBullhorn size={50} />,
      title: 'Social Media Marketing',
      desc: 'Build your brand presence across all social platforms and engage with your target audience.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics']
    },
    {
      icon: <FaChartLine size={50} />,
      title: 'Pay-Per-Click Advertising',
      desc: 'Drive immediate results with targeted PPC campaigns on Google, Facebook, and other platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Remarketing', 'Conversion Tracking']
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$1,200',
      duration: 'Monthly',
      features: [
        'Basic SEO Optimization',
        'Social Media Management',
        'Google Ads Setup',
        'Monthly Reports',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,800',
      duration: 'Monthly',
      features: [
        'Advanced SEO Strategy',
        'Content Marketing',
        'PPC Management',
        'Social Media Ads',
        'Weekly Reports',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,500',
      duration: 'Monthly',
      features: [
        'Full Digital Marketing Suite',
        'Custom Strategy Development',
        'Multi-Channel Campaigns',
        'Advanced Analytics',
        'Dedicated Manager',
        '24/7 Support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'TechStart Inc.',
      industry: 'SaaS Company',
      text: 'A FILMIC TOUCH transformed our digital presence! Our organic traffic increased by 300% in just 6 months.',
      rating: 5
    },
    {
      name: 'E-Commerce Pro',
      industry: 'Online Retail',
      text: 'Their PPC campaigns are incredibly effective. Our ROI improved by 250% and sales doubled within 3 months.',
      rating: 5
    },
    {
      name: 'Local Business Plus',
      industry: 'Restaurant Chain',
      text: 'Professional, results-driven, and always transparent. Our social media engagement skyrocketed!',
      rating: 5
    }
  ];

  const galleryImages = [Blue1, Blue2, Blue3, Blue4, Blue5, Blue6, Blue7, Blue8, Blue9];

  const categoryImages = {
    all: [Blue1, Blue2, Blue3],
    seo: [Blue4, Blue5, Blue6],
    social: [Blue7, Blue8, Blue9],
    ppc: [Blue2, Blue5, Blue8]
  };

  return (
    <>
      <Header />
      <div style={{ fontFamily: 'Poppins, sans-serif', background: '#fff', color: '#000' }}>
        {/* Google Fonts Import */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Hero Section */}
        <section style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%), url(${DigitalMarketingImage})`,
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
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10} md={12}>
                <Fade direction="up" triggerOnce>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <Badge style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                      padding: '8px 20px',
                      borderRadius: 50,
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      marginBottom: 30,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                      <FaRocket style={{ marginRight: 8, color: '#ff4757' }} />
                      Driving Growth Since 2019
                    </Badge>

                    <h1 style={{ 
                      fontSize: '5rem', 
                      fontWeight: 900, 
                      letterSpacing: '-3px', 
                      marginBottom: 24,
                      color: '#fff',
                      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      lineHeight: 0.9
                    }}>
                      Digital
                      <span style={{ 
                        display: 'block', 
                        background: 'linear-gradient(45deg, #fff, #ff4757)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>Marketing</span>
                    </h1>

                    <p style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 400, 
                      marginBottom: 40, 
                      color: '#e0e0e0',
                      maxWidth: 700,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      lineHeight: 1.6
                    }}>
                      We help businesses grow their online presence through strategic digital marketing. 
                      From SEO to social media, we drive results that matter.
                    </p>

                    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                        Start Growing <FaArrowRight style={{ marginLeft: 8 }} />
                      </Button>
                      
                      <Button style={{ 
                        background: 'transparent', 
                        color: '#fff', 
                        border: '2px solid #fff',
                        fontWeight: 600, 
                        fontSize: 16, 
                        padding: '16px 32px', 
                        borderRadius: 50,
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
                        <FaPlay style={{ marginRight: 8 }} />
                        View Case Studies
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
                    Our Digital
                    <span style={{ 
                      display: 'block', 
                      background: 'linear-gradient(45deg, #000, #ff4757)',
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
                    Comprehensive digital marketing solutions designed to boost your online presence 
                    and drive measurable results for your business.
                  </p>
                </Fade>
              </Col>
            </Row>

            <Row className="g-4">
              {services.map((service, index) => (
                <Col lg={4} md={6} key={index}>
                  <Fade direction="up" delay={index * 200} triggerOnce>
                    <Card style={{
                      border: 'none',
                      borderRadius: 24,
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                      transition: 'all 0.4s ease',
                      height: '100%',
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
                        <div style={{ 
                          color: '#ff4757', 
                          marginBottom: 25,
                          transition: 'all 0.3s ease'
                        }}>
                          {service.icon}
                        </div>
                        <Card.Title style={{ 
                          fontWeight: 700, 
                          fontSize: '1.5rem', 
                          marginBottom: 15,
                          color: '#000'
                        }}>
                          {service.title}
                        </Card.Title>
                        <Card.Text style={{ 
                          color: '#666', 
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          marginBottom: 25
                        }}>
                          {service.desc}
                        </Card.Text>
                        <ul style={{ 
                          listStyle: 'none', 
                          padding: 0, 
                          margin: 0,
                          color: '#666'
                        }}>
                          {service.features.map((feature, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: 8,
                              display: 'flex',
                              alignItems: 'center',
                              fontSize: '0.9rem'
                            }}>
                              <FaRocket style={{ 
                                color: '#ff4757', 
                                fontSize: '0.8rem', 
                                marginRight: 10 
                              }} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Portfolio Gallery */}
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
                    Campaign
                    <span style={{ 
                      display: 'block', 
                      background: 'linear-gradient(45deg, #000, #ff4757)',
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
                      <Button
                        key={category.id}
                        variant={activeCategory === category.id ? 'dark' : 'outline-dark'}
                        onClick={() => setActiveCategory(category.id)}
                        style={{
                          borderRadius: 50,
                          padding: '12px 24px',
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
                </Fade>
              </Col>
            </Row>

            {/* Gallery Grid */}
            <Row className="g-4">
              {categoryImages[activeCategory].map((img, idx) => (
                <Col key={idx} xs={12} sm={6} md={4} lg={4}>
                  <Fade direction="up" delay={idx * 100} triggerOnce>
                    <div style={{
                      position: 'relative',
                      borderRadius: 20,
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      transition: 'all 0.4s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Image
                        src={img}
                        style={{
                          width: '100%',
                          height: '350px',
                          objectFit: 'cover',
                          transition: 'all 0.4s ease',
                          filter: hoveredIndex === idx ? 'grayscale(0%) brightness(1.1)' : 'grayscale(100%)',
                          transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)'
                        }}
                        fluid
                      />
                      
                      {/* Overlay */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                        opacity: hoveredIndex === idx ? 1 : 0,
                        transition: 'all 0.4s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <div style={{ textAlign: 'center', color: '#fff' }}>
                          <h5 style={{ fontWeight: 600, marginBottom: 10 }}>Campaign {idx + 1}</h5>
                          <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>View Results</p>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Packages Section */}
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
                    Marketing
                    <span style={{ 
                      display: 'block', 
                      background: 'linear-gradient(45deg, #fff, #ff4757)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Packages</span>
                  </h2>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    color: '#ccc', 
                    lineHeight: 1.6,
                    maxWidth: 600,
                    margin: '0 auto'
                  }}>
                    Choose the perfect digital marketing package for your business. All packages include 
                    strategy development, implementation, and performance tracking.
                  </p>
                </Fade>
              </Col>
            </Row>

            <Row className="g-4">
              {packages.map((pkg, index) => (
                <Col lg={4} md={6} key={index}>
                  <Fade direction="up" delay={index * 200} triggerOnce>
                    <Card style={{
                      background: pkg.popular ? 'linear-gradient(135deg, #ff4757 0%, #ff6b7a 100%)' : 'rgba(255,255,255,0.05)',
                      border: pkg.popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 24,
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.4s ease',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                      {pkg.popular && (
                        <div style={{
                          position: 'absolute',
                          top: 20,
                          right: 20,
                          background: '#fff',
                          color: '#ff4757',
                          padding: '4px 12px',
                          borderRadius: 20,
                          fontSize: '0.8rem',
                          fontWeight: 600
                        }}>
                          Most Popular
                        </div>
                      )}
                      
                      <Card.Body style={{ padding: '50px 30px', textAlign: 'center' }}>
                        <h3 style={{ 
                          fontWeight: 700, 
                          fontSize: '1.8rem', 
                          marginBottom: 10,
                          color: pkg.popular ? '#fff' : '#fff'
                        }}>
                          {pkg.name}
                        </h3>
                        <div style={{ marginBottom: 30 }}>
                          <span style={{ 
                            fontSize: '3rem', 
                            fontWeight: 900,
                            color: pkg.popular ? '#fff' : '#fff'
                          }}>
                            {pkg.price}
                          </span>
                          <div style={{ 
                            fontSize: '1rem',
                            color: pkg.popular ? 'rgba(255,255,255,0.8)' : '#ccc'
                          }}>
                            {pkg.duration}
                          </div>
                        </div>
                        
                        <ul style={{ 
                          listStyle: 'none', 
                          padding: 0, 
                          margin: '0 0 30px 0',
                          textAlign: 'left'
                        }}>
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: 12,
                              display: 'flex',
                              alignItems: 'center',
                              fontSize: '0.95rem',
                              color: pkg.popular ? 'rgba(255,255,255,0.9)' : '#ccc'
                            }}>
                              <FaRocket style={{ 
                                color: pkg.popular ? '#fff' : '#ff4757', 
                                fontSize: '0.8rem', 
                                marginRight: 12,
                                flexShrink: 0
                              }} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          variant={pkg.popular ? 'light' : 'outline-light'}
                          size="lg"
                          style={{
                            borderRadius: 50,
                            padding: '12px 30px',
                            fontWeight: 600,
                            width: '100%',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Choose Package
                        </Button>
                      </Card.Body>
                    </Card>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Testimonials Section */}
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
                    Success
                    <span style={{ 
                      display: 'block', 
                      background: 'linear-gradient(45deg, #000, #ff4757)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Stories</span>
                  </h2>
                </Fade>
              </Col>
            </Row>

            <Row className="g-4">
              {testimonials.map((testimonial, index) => (
                <Col lg={4} md={6} key={index}>
                  <Fade direction="up" delay={index * 200} triggerOnce>
                    <Card style={{
                      border: 'none',
                      borderRadius: 20,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      height: '100%'
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
                        <div style={{ 
                          color: '#ff4757', 
                          fontSize: '2rem', 
                          marginBottom: 20 
                        }}>
                          <FaQuoteLeft />
                        </div>
                        
                        <Card.Text style={{ 
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          color: '#666',
                          marginBottom: 25,
                          fontStyle: 'italic'
                        }}>
                          "{testimonial.text}"
                        </Card.Text>
                        
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <h6 style={{ 
                              fontWeight: 600, 
                              margin: 0, 
                              color: '#000',
                              fontSize: '1rem'
                            }}>
                              {testimonial.name}
                            </h6>
                            <small style={{ color: '#999' }}>{testimonial.industry}</small>
                          </div>
                          <div style={{ display: 'flex', gap: 2 }}>
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <FaStar key={i} style={{ color: '#ff4757', fontSize: '0.9rem' }} />
                            ))}
                          </div>
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
        <section style={{ 
          padding: '100px 0', 
          background: 'linear-gradient(135deg, #ff4757 0%, #ff6b7a 100%)',
          color: '#fff',
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
                    Ready to Scale
                    <span style={{ 
                      display: 'block', 
                      background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Your Business?</span>
                  </h2>
                  <p style={{ 
                    fontSize: '1.2rem', 
                    color: 'rgba(255,255,255,0.9)', 
                    marginBottom: 40,
                    lineHeight: 1.6
                  }}>
                    Let's discuss your digital marketing goals and create a strategy that drives real results.
                  </p>
                  <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button style={{ 
                      background: '#fff', 
                      color: '#ff4757', 
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
                      Get Free Audit <FaArrowRight style={{ marginLeft: 8 }} />
                    </Button>
                    
                    <Button style={{ 
                      background: 'transparent', 
                      color: '#fff', 
                      border: '2px solid #fff',
                      fontWeight: 600, 
                      fontSize: 16, 
                      padding: '16px 32px', 
                      borderRadius: 50,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = '#fff';
                      e.target.style.color = '#ff4757';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#fff';
                    }}
                    >
                      View Case Studies
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

export default DigitalMarketing;
        