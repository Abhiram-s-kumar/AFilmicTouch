import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaArrowUp, FaPhone, FaTools } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer style={{
    background: '#ffffff',
    color: '#000000',
    fontFamily: 'Poppins, sans-serif',
    position: 'relative',
    marginTop: 64,
    padding: '60px 0 40px 0',
    borderTop: '1px solid #f0f0f0'
  }}>
          <Container fluid style={{ maxWidth: '1400px' }}>
        {/* Google Fonts Import */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Top Section - Header-like Layout */}
        <Row className="justify-content-between align-items-start mb-5">
          {/* Left Side - Tagline */}
          <Col lg={3} md={6} className="mb-4">
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              fontWeight: 400,
              lineHeight: 1.6,
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
              maxWidth: '280px'
            }}>
              A FILMIC TOUCH is an independent creative studio and digital agency
            </p>
          </Col>

        {/* Middle Section - Information Columns */}
        <Col lg={6} md={12}>
          <Row>
            {/* Explore Column */}
            <Col md={6} className="mb-4">
              <h6 style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#000',
                marginBottom: 20,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Explore
              </h6>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { text: 'About Us', href: '/about-us' },
                  { text: 'Portfolio', href: '/portfolio' },
                  { text: 'Contact', href: '/contact' }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    style={{
                      color: '#000',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 400,
                      transition: 'all 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#666';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#000';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </Col>

            {/* Follow Me Column */}
            <Col md={6} className="mb-4">
              <h6 style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#000',
                marginBottom: 20,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Follow Us
              </h6>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: <FaTwitter />, text: '@afilmic', href: 'https://twitter.com' },
                  { icon: <FaInstagram />, text: '@afilmic', href: 'https://instagram.com' },
                  { icon: <FaYoutube />, text: '@afilmic', href: 'https://youtube.com' },
                  { icon: <FaFacebookF />, text: '@afilmic', href: 'https://facebook.com' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#000',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 400,
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontFamily: 'Poppins, sans-serif',
                      padding: '4px 0'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#666';
                      e.target.style.transform = 'translateX(8px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#000';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ fontSize: '1rem', transition: 'all 0.3s ease', width: '16px' }}>{social.icon}</span>
                    {social.text}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Col>

        {/* Right Side - Call to Action & Services */}
        <Col lg={3} md={6} className="mb-4">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
            {/* Call A FILMIC TOUCH */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 8
              }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>
                  <FaPhone />
                </div>
                <span style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#000',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  Call A FILMIC TOUCH
                </span>
              </div>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                margin: 0,
                marginLeft: 40,
                fontFamily: 'Poppins, sans-serif'
              }}>
                Let's work together
              </p>
            </div>

            {/* Services */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 8
              }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>
                  <FaTools />
                </div>
                <span style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#000',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  Services & Tools
                </span>
              </div>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                margin: 0,
                marginLeft: 40,
                fontFamily: 'Poppins, sans-serif'
              }}>
                Creative solutions
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Main Content Area - Large Brand Text */}
      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center">
          <div style={{
            fontSize: '7rem',
            fontWeight: 900,
            color: '#000',
            lineHeight: 0.85,
            letterSpacing: '-2px',
            textTransform: 'uppercase',
            marginBottom: 50,
            fontFamily: 'Poppins, sans-serif',
            transition: 'all 0.3s ease',
            cursor: 'default'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.02)';
            e.target.style.letterSpacing = '-1px';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.letterSpacing = '-2px';
          }}
          >
            A FILMIC TOUCH
          </div>
        </Col>
      </Row>

      {/* Bottom Section */}
      <Row className="justify-content-between align-items-center">
                <Col lg={6} md={12} className="mb-3">
          <Button 
            variant="light"
            size="lg"
            href="/home"
            style={{
              borderRadius: 0,
              padding: '16px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#000',
              background: '#f8f8f8',
              border: '1px solid #e0e0e0',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'Poppins, sans-serif',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#000';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#f8f8f8';
              e.target.style.color = '#000';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Visit site
            <FaArrowUp style={{ transition: 'all 0.3s ease' }} />
          </Button>
        </Col>

        <Col lg={6} md={12} className="text-lg-end">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 35,
            flexWrap: 'wrap',
            fontSize: '0.85rem',
            color: '#999',
            fontFamily: 'Poppins, sans-serif',
            alignItems: 'center'
          }}>
            <span>© {currentYear}</span>
            <a href="/privacy" style={{ 
              color: '#999', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#000';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#999';
              e.target.style.transform = 'translateY(0)';
            }}
            >Privacy Policy</a>
            <a href="/terms" style={{ 
              color: '#999', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#000';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#999';
              e.target.style.transform = 'translateY(0)';
            }}
            >Terms</a>
            <span>CNX 124 PM</span>
            <span>9 C</span>
          </div>
        </Col>
      </Row>
          </Container>

      {/* Custom CSS for enhanced animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        /* Smooth entrance animations */
        .footer-content {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Enhanced hover effects for social links */
        .social-link:hover {
          transform: translateX(8px) scale(1.05);
        }
        
        /* Button shimmer effect */
        .visit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s;
        }
        
        .visit-button:hover::before {
          left: 100%;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .footer-content {
            text-align: center;
          }
          
          .bottom-links {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );

export default Footer;
