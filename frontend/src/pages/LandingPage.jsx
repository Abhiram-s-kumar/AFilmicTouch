import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlay, FaArrowRight, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleExploreClick = () => {
    navigate('/home');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: '"Inter", "Poppins", sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Animation styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Poppins:wght@300;400;600;700;900&display=swap');
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        
        .shape {
          position: absolute;
          background: linear-gradient(45deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.08));
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }
        
        .shape-1 {
          width: 100px;
          height: 100px;
          top: 15%;
          left: 8%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 150px;
          height: 150px;
          top: 65%;
          right: 12%;
          animation-delay: 2s;
        }
        
        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 25%;
          left: 15%;
          animation-delay: 4s;
        }
        
        .shape-4 {
          width: 120px;
          height: 120px;
          top: 8%;
          right: 25%;
          animation-delay: 1s;
        }
        
        .shape-5 {
          width: 60px;
          height: 60px;
          bottom: 40%;
          right: 8%;
          animation-delay: 3s;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-30px) rotate(120deg) scale(1.1);
            opacity: 0.8;
          }
          66% { 
            transform: translateY(15px) rotate(240deg) scale(0.9);
            opacity: 0.4;
          }
        }
        
        .hero-container {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        
        .sparkle-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(-40px) scale(0.7);
          animation: sparkleEntrance 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s forwards;
        }
        
        @keyframes sparkleEntrance {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .sparkle {
          width: 24px;
          height: 24px;
          margin: 0 8px;
          animation: sparkleGlow 4s ease-in-out infinite;
        }
        
        .sparkle:nth-child(1) { animation-delay: 0s; }
        .sparkle:nth-child(2) { animation-delay: 1.5s; }
        .sparkle:nth-child(3) { animation-delay: 3s; }
        
        @keyframes sparkleGlow {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.2));
          }
          50% { 
            transform: scale(1.3) rotate(180deg);
            filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.4));
          }
        }
        
        .brand-logo {
          font-size: 4.5rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          background: linear-gradient(135deg, #000000 0%, #333333 50%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(60px) scale(0.8);
          animation: logoEntrance 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;
          text-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          position: relative;
          margin-bottom: 20px;
        }
        
        .brand-logo::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #000000, #333333, #000000);
          animation: underlineGrow 1.2s ease-out 2.5s forwards;
          border-radius: 2px;
        }
        
        @keyframes logoEntrance {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes underlineGrow {
          to {
            width: 70%;
          }
        }
        
        .brand-subtitle {
          font-size: 1.6rem;
          font-weight: 400;
          color: #666666;
          margin-bottom: 40px;
          letter-spacing: 0.2em;
          font-family: 'Inter', sans-serif;
          opacity: 0;
          transform: translateY(40px);
          animation: subtitleEntrance 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.8s forwards;
          position: relative;
          text-transform: uppercase;
        }
        
        .brand-subtitle::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #666666, transparent);
          opacity: 0;
          animation: lineAppear 1s ease-out 3s forwards;
        }
        
        @keyframes subtitleEntrance {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes lineAppear {
          to {
            opacity: 1;
          }
        }
        
        .hero-description {
          font-size: 1.1rem;
          color: #888888;
          max-width: 600px;
          margin: 0 auto 50px;
          line-height: 1.8;
          opacity: 0;
          transform: translateY(30px);
          animation: descriptionEntrance 1.2s ease-out 2.2s forwards;
        }
        
        @keyframes descriptionEntrance {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(50px);
          animation: buttonsEntrance 1s ease-out 3.2s forwards;
        }
        
        @keyframes buttonsEntrance {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .primary-btn {
          padding: 15px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #000000, #333333);
          border: none;
          border-radius: 50px;
          color: white;
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .primary-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s;
        }
        
        .primary-btn:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: linear-gradient(135deg, #333333, #000000);
        }
        
        .primary-btn:hover::before {
          left: 100%;
        }
        
        .secondary-btn {
          padding: 15px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          background: transparent;
          border: 2px solid #000000;
          border-radius: 50px;
          color: #000000;
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .secondary-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: #000000;
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: -1;
        }
        
        .secondary-btn:hover {
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        .secondary-btn:hover::before {
          width: 100%;
        }
        
        .social-links {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          opacity: 0;
          animation: socialEntrance 1s ease-out 4s forwards;
        }
        
        @keyframes socialEntrance {
          to {
            opacity: 1;
          }
        }
        
        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666666;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .social-link:hover {
          background: #000000;
          color: white;
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .brand-logo { 
            font-size: 3rem; 
            letter-spacing: 0.1em;
          }
          .brand-subtitle { 
            font-size: 1.2rem; 
            margin-bottom: 30px;
          }
          .hero-description {
            font-size: 1rem;
            margin-bottom: 40px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .primary-btn, .secondary-btn {
            padding: 12px 30px;
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .brand-logo { 
            font-size: 2.5rem; 
          }
          .brand-subtitle { 
            font-size: 1rem; 
          }
          .social-links {
            bottom: 20px;
          }
        }
      `}</style>
      
      <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Row className="w-100 justify-content-center align-items-center">
          <Col xs={12} className="hero-container">
            <div className="sparkle-container">
              <div className="sparkle">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
                </svg>
              </div>
              <div className="sparkle">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
                </svg>
              </div>
              <div className="sparkle">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
                </svg>
              </div>
            </div>
            
            <div className="brand-logo">
              A FILMIC TOUCH
            </div>
            
            <div className="brand-subtitle">
              Creative Studio & Digital Agency
            </div>
            
            <div className="hero-description">
              We craft stunning visual stories through photography, videography, and digital experiences. 
              From concept to creation, we bring your vision to life with cinematic precision and artistic flair.
            </div>
            
            <div className="cta-buttons">
              <Button onClick={handleExploreClick} className="primary-btn">
                Explore Our Work <FaArrowRight style={{ marginLeft: '8px' }} />
              </Button>
            </div>
          </Col>
        </Row>
        
        <div className="social-links">
          <a href="#" className="social-link">
                <FaInstagram />
              </a>
          <a href="#" className="social-link">
                <FaTwitter />
              </a>
          <a href="#" className="social-link">
                <FaFacebookF />
              </a>
            </div>
      </Container>
    </div>
  );
};

export default LandingPage;
