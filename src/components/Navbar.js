import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { logo } from '../assets/index';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.sticky};
  transition: ${({ theme }) => theme.transitions.default};
  background-color: ${({ scrolled, theme }) => scrolled ? theme.colors.white : 'transparent'};
  box-shadow: ${({ scrolled, theme }) => scrolled ? theme.shadows.md : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    transition: ${({ theme }) => theme.transitions.default};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ active, scrolled, theme }) => 
    active 
      ? theme.colors.primary 
      : scrolled 
        ? theme.colors.secondary 
        : theme.colors.white};
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.default};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const LoginButton = styled(Link)`
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ scrolled, theme }) => scrolled ? theme.colors.primary : theme.colors.white};
  border: 2px solid ${({ scrolled, theme }) => scrolled ? theme.colors.primary : theme.colors.white};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const DemoButton = styled(Link)`
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.gradientGreen};
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${({ scrolled, theme }) => scrolled ? theme.colors.secondary : theme.colors.white};
  cursor: pointer;
  z-index: 2000;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  z-index: 1500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: 80%;
  max-width: 300px;
`;

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100
    }
  },
  exit: { 
    x: '100%', 
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavContent>
        <Logo to="/">
          <img src={logo} alt="DIALOGUER Logo" />
        </Logo>
        
        <NavLinks>
          <NavLink 
            to="/" 
            active={location.pathname === '/' ? 1 : 0}
            scrolled={scrolled ? 1 : 0}
          >
            Home
          </NavLink>
          <NavLink 
            to="/recursos" 
            active={location.pathname === '/recursos' ? 1 : 0}
            scrolled={scrolled ? 1 : 0}
          >
            Recursos
          </NavLink>
          <NavLink 
            to="/precos" 
            active={location.pathname === '/precos' ? 1 : 0}
            scrolled={scrolled ? 1 : 0}
          >
            Preços
          </NavLink>
          <NavLink 
            to="/faq" 
            active={location.pathname === '/faq' ? 1 : 0}
            scrolled={scrolled ? 1 : 0}
          >
            FAQ
          </NavLink>
          <NavLink 
            to="/contato" 
            active={location.pathname === '/contato' ? 1 : 0}
            scrolled={scrolled ? 1 : 0}
          >
            Contato
          </NavLink>
        </NavLinks>
        
        <ActionButtons>
          <LoginButton as="a" href="https://app.dialoguer.com.br" target="_blank" rel="noopener noreferrer" scrolled={scrolled ? 1 : 0}>
            Login
          </LoginButton>
          <DemoButton as="a" href="https://app.dialoguer.com.br/signup" target="_blank" rel="noopener noreferrer">
            Teste Grátis
          </DemoButton>
        </ActionButtons>
        
        <MobileMenuButton 
          scrolled={scrolled ? 1 : 0}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <MobileNavLink 
                to="/" 
                active={location.pathname === '/' ? 1 : 0}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </MobileNavLink>
              <MobileNavLink 
                to="/recursos" 
                active={location.pathname === '/recursos' ? 1 : 0}
                onClick={() => setMobileMenuOpen(false)}
              >
                Recursos
              </MobileNavLink>
              <MobileNavLink 
                to="/precos" 
                active={location.pathname === '/precos' ? 1 : 0}
                onClick={() => setMobileMenuOpen(false)}
              >
                Preços
              </MobileNavLink>
              <MobileNavLink 
                to="/faq" 
                active={location.pathname === '/faq' ? 1 : 0}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </MobileNavLink>
              <MobileNavLink 
                to="/contato" 
                active={location.pathname === '/contato' ? 1 : 0}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </MobileNavLink>
              
              <MobileActionButtons>
                <LoginButton as="a" href="https://app.dialoguer.com.br" target="_blank" rel="noopener noreferrer" scrolled={1}>
                  Login
                </LoginButton>
                <DemoButton as="a" href="https://app.dialoguer.com.br/signup" target="_blank" rel="noopener noreferrer">
                  Teste Grátis
                </DemoButton>
              </MobileActionButtons>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;
