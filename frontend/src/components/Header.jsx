// import React, { useState } from 'react';
// import { Navbar, Nav, Button, Container } from 'react-bootstrap';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [showBrandingDropdown, setShowBrandingDropdown] = useState(false);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <Navbar
//       expand="lg"
//       sticky="top"
//       className="bg-white py-3 px-3 px-lg-5"
//       style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
//     >
//       <Container fluid className="px-0">
//         <Navbar.Brand
//           onClick={() => navigate('/')}
//           className="fw-bold fs-4 text-dark cursor-pointer"
//         >
//           A FILMIC TOUCH
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse
//           id="main-navbar"
//           className="justify-content-between align-items-center"
//         >
//           <Nav className="mx-3 align-items-center nav-hover">
//             <Nav.Link
//               className={isActive('/home') ? 'active' : ''}
//               onClick={() => navigate('/home')}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               className={isActive('/about') ? 'active' : ''}
//               onClick={() => navigate('/about')}
//             >
//               About Us
//             </Nav.Link>
//             <Nav.Link
//               className={isActive('/digital-marketing') ? 'active' : ''}
//               onClick={() => navigate('/digital-marketing')}
//             >
//               Digital Marketing
//             </Nav.Link>
//             <Nav.Link
//               className={isActive('/web-development') ? 'active' : ''}
//               onClick={() => navigate('/web-development')}
//             >
//               Web Development
//             </Nav.Link>
//             <Nav.Link
//               className={isActive('/wedding') ? 'active' : ''}
//               onClick={() => navigate('/wedding')}
//             >
//               Wedding Events
//             </Nav.Link>
//             <Nav.Link
//               className={isActive('/ads') ? 'active' : ''}
//               onClick={() => navigate('/ads')}
//             >
//               Ads
//             </Nav.Link>
//             <Nav.Item style={{ position: 'relative' }}>
//               <Nav.Link
//                 className={isActive('/branding-media') ? 'active' : ''}
//                 onClick={() => {
//                   setShowBrandingDropdown((prev) => !prev);
//                   navigate('/branding-media');
//                 }}
//                 onMouseEnter={() => setShowBrandingDropdown(true)}
//                 onMouseLeave={() => setShowBrandingDropdown(false)}
//                 style={{ cursor: 'pointer', letterSpacing: '2px', fontWeight: 600 }}
//               >
//                 Branding Media <span style={{ fontSize: '12px' }}>+</span>
//               </Nav.Link>
//               {showBrandingDropdown && (
//                 <div
//                   onMouseEnter={() => setShowBrandingDropdown(true)}
//                   onMouseLeave={() => setShowBrandingDropdown(false)}
//                   style={{
//                     position: 'absolute',
//                     top: '100%',
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                     background: '#fff',
//                     boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
//                     borderRadius: 0,
//                     minWidth: 220,
//                     zIndex: 1000,
//                     padding: '0',
//                     borderTop: '2px solid #eee',
//                   }}
//                 >
//                   <div style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     fontFamily: 'Poppins, sans-serif',
//                     fontWeight: 500,
//                     fontSize: '1.1rem',
//                     letterSpacing: '1px'
//                   }}>
//                     <Nav.Link
//                       style={{
//                         color: '#222',
//                         padding: '16px 0',
//                         width: '100%',
//                         textAlign: 'center',
//                         borderBottom: '1px solid #f3f3f3',
//                         background: 'none'
//                       }}
//                       onClick={() => {
//                         setShowBrandingDropdown(false);
//                         navigate('/photoshoots');
//                       }}
//                     >
//                       photoshoots <span style={{ fontSize: '14px', marginLeft: 4 }}>+</span>
//                     </Nav.Link>
//                     <Nav.Link
//                       style={{
//                         color: '#222',
//                         padding: '16px 0',
//                         width: '100%',
//                         textAlign: 'center',
//                         background: 'none'
//                       }}
//                       onClick={() => {
//                         setShowBrandingDropdown(false);
//                         navigate('/videography');
//                       }}
//                     >
//                       videography <span style={{ fontSize: '14px', marginLeft: 4 }}>+</span>
//                     </Nav.Link>
//                   </div>
//                 </div>
//               )}
//             </Nav.Item>
//           </Nav>

//           <Button
//             variant="outline-dark"
//             className="animate-btn"
//             onClick={() => navigate('/contact')}
//           >
//             Get In Touch →
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import { NavDropdown } from 'react-bootstrap';
import { useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBrandingDropdown, setShowBrandingDropdown] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const isActive = (path) => location.pathname === path;

  // track viewport to enable hover only on desktop
  useEffect(() => {
    const update = () => setIsDesktop(window.matchMedia('(min-width: 992px)').matches);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <Navbar expand="lg" sticky="top" className="bg-white py-3 px-3 px-lg-5"
      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
      <Container fluid className="px-0">
        <Navbar.Brand onClick={() => navigate('/')} className="fw-bold fs-4 text-dark cursor-pointer">
          A FILMIC TOUCH
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between align-items-center">
          <Nav className="mx-3 align-items-lg-center">
            <Nav.Link className={isActive('/home') ? 'active' : ''} onClick={() => navigate('/home')}>Home</Nav.Link>
            <Nav.Link className={isActive('/about') ? 'active' : ''} onClick={() => navigate('/about')}>About Us</Nav.Link>
            <Nav.Link className={isActive('/digital-marketing') ? 'active' : ''} onClick={() => navigate('/digital-marketing')}>Digital Marketing</Nav.Link>
            <Nav.Link className={isActive('/web-development') ? 'active' : ''} onClick={() => navigate('/web-development')}>Web Development</Nav.Link>
            <Nav.Link className={isActive('/wedding') ? 'active' : ''} onClick={() => navigate('/wedding')}>Wedding Events</Nav.Link>
            <Nav.Link className={isActive('/ads') ? 'active' : ''} onClick={() => navigate('/ads')}>Ads</Nav.Link>

            {/* ✅ Works on mobile + desktop */}
            <NavDropdown
              title={<span style={{ letterSpacing: '2px', fontWeight: 600 }}>Branding Media</span>}
              id="branding-dropdown"
              show={isDesktop ? showBrandingDropdown : undefined}  // desktop hover control
              onMouseEnter={() => isDesktop && setShowBrandingDropdown(true)}
              onMouseLeave={() => isDesktop && setShowBrandingDropdown(false)}
              // on mobile, NavDropdown handles tap to open by itself
              renderMenuOnMount
              menuVariant="light"
              align="start"
            >
              <NavDropdown.Item
                onClick={() => {
                  navigate('/photoshoots');
                }}
              >
                photoshoots
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate('/videography');
                }}
              >
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
};
export default Header;