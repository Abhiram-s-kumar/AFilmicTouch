// import React, { useState, useEffect } from 'react';
// import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showBrandingDropdown, setShowBrandingDropdown] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(true);

//   const isActive = (path) => location.pathname === path;

//   // Track viewport to enable hover only on desktop
//   useEffect(() => {
//     const update = () => setIsDesktop(window.matchMedia('(min-width: 992px)').matches);
//     update();
//     window.addEventListener('resize', update);
//     return () => window.removeEventListener('resize', update);
//   }, []);

//   return (
//     <Navbar expand="lg" sticky="top" className="bg-white py-3 px-3 px-lg-5"
//       style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
//       <Container fluid className="px-0">
//         <Navbar.Brand onClick={() => navigate('/')} className="fw-bold fs-4 text-dark cursor-pointer">
//           A FILMIC TOUCH
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar" className="justify-content-between align-items-center">
//           <Nav className="mx-3 align-items-lg-center">
//             <Nav.Link className={isActive('/home') ? 'active' : ''} onClick={() => navigate('/home')}>Home</Nav.Link>
//             <Nav.Link className={isActive('/about') ? 'active' : ''} onClick={() => navigate('/about')}>About Us</Nav.Link>
//             <Nav.Link className={isActive('/digital-marketing') ? 'active' : ''} onClick={() => navigate('/digital-marketing')}>Digital Marketing</Nav.Link>
//             <Nav.Link className={isActive('/web-development') ? 'active' : ''} onClick={() => navigate('/web-development')}>Web Development</Nav.Link>
//             <Nav.Link className={isActive('/wedding') ? 'active' : ''} onClick={() => navigate('/wedding')}>Wedding Events</Nav.Link>
//             <Nav.Link className={isActive('/ads') ? 'active' : ''} onClick={() => navigate('/ads')}>Ads</Nav.Link>

//             <NavDropdown
//               title={<span style={{ letterSpacing: '2px', fontWeight: 600 }}>Branding Media</span>}
//               id="branding-dropdown"
//               show={isDesktop ? showBrandingDropdown : undefined}
//               onMouseEnter={() => isDesktop && setShowBrandingDropdown(true)}
//               onMouseLeave={() => isDesktop && setShowBrandingDropdown(false)}
//               renderMenuOnMount
//               menuVariant="light"
//               align="start"
//             >
//               <NavDropdown.Item onClick={() => navigate('/photoshoots')}>
//                 photoshoots
//               </NavDropdown.Item>
//               <NavDropdown.Item onClick={() => navigate('/videography')}>
//                 videography
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           <Button variant="outline-dark" className="animate-btn" onClick={() => navigate('/contact')}>
//             Get In Touch →
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;


// frontend/src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBrandingDropdown, setShowBrandingDropdown] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const isActive = (path) => location.pathname === path;

  // Track viewport to enable hover only on desktop
  useEffect(() => {
    // Guard for non-browser environments
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return;

    const update = () => setIsDesktop(window.matchMedia('(min-width: 992px)').matches);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="bg-white py-3 px-3 px-lg-5"
      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
    >
      <Container fluid className="px-0">
        <Navbar.Brand
          onClick={() => navigate('/')}
          className="fw-bold fs-4 text-dark cursor-pointer"
          role="button"
        >
          A FILMIC TOUCH
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between align-items-center">
          <Nav className="mx-3 align-items-lg-center">
            <Nav.Link className={isActive('/home') ? 'active' : ''} onClick={() => navigate('/home')}>
              Home
            </Nav.Link>
            <Nav.Link className={isActive('/about') ? 'active' : ''} onClick={() => navigate('/about')}>
              About Us
            </Nav.Link>
            <Nav.Link
              className={isActive('/digital-marketing') ? 'active' : ''}
              onClick={() => navigate('/digital-marketing')}
            >
              Digital Marketing
            </Nav.Link>
            <Nav.Link
              className={isActive('/web-development') ? 'active' : ''}
              onClick={() => navigate('/web-development')}
            >
              Web Development
            </Nav.Link>
            <Nav.Link className={isActive('/wedding') ? 'active' : ''} onClick={() => navigate('/wedding')}>
              Wedding Events
            </Nav.Link>
            <Nav.Link className={isActive('/ads') ? 'active' : ''} onClick={() => navigate('/ads')}>
              Ads
            </Nav.Link>

            <NavDropdown
              title={<span style={{ letterSpacing: '2px', fontWeight: 600 }}>Branding Media</span>}
              id="branding-dropdown"
              show={isDesktop ? showBrandingDropdown : undefined}
              onMouseEnter={() => isDesktop && setShowBrandingDropdown(true)}
              onMouseLeave={() => isDesktop && setShowBrandingDropdown(false)}
              renderMenuOnMount
              menuVariant="light"
              align="start"
            >
              <NavDropdown.Item onClick={() => navigate('/photoshoots')}>
                photoshoots
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/videography')}>
                videography
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button variant="outline-dark" className="animate-btn" onClick={() => navigate('/contact')}>
            Get In Touch →
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
