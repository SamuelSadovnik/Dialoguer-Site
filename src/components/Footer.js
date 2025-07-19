import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { logoWhite as logo } from '../assets/index';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 5rem 0 2rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background: ${({ theme }) => theme.colors.white};
    clip-path: ellipse(50% 50% at 50% 100%);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.div`
  img {
    height: 40px;
    margin-bottom: 1rem;
  }
`;

const FooterDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white}cc;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white}33;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FooterLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.white}cc;
  transition: ${({ theme }) => theme.transitions.fast};
  margin-bottom: 0.75rem;
  display: inline-block;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.white}cc;
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  text-align: center;
  
  &.primary {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-3px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  }
  
  &.outline {
    border: 2px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    
    &:hover {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-3px);
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.white}22;
  margin: 3rem 0 1.5rem;
`;

const BottomFooter = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white}99;
`;

const FooterNav = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterNavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white}99;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo>
            <img src={logo} alt="DIALOGUER Logo" />
          </Logo>
          <FooterDescription>
            Transforme sua comunicação com o DIALOGUER, o chatbot que automatiza e potencializa seu atendimento no WhatsApp.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF color="white" size={18} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter color="white" size={18} />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram color="white" size={18} />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn color="white" size={18} />
            </SocialIcon>
            <SocialIcon href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp color="white" size={18} />
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Navegação</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/recursos">Recursos</FooterLink>
          <FooterLink to="/precos">Preços</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/contato">Contato</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Soluções</FooterTitle>
          <FooterLink to="/recursos/atendimento">Atendimento automático</FooterLink>
          <FooterLink to="/recursos/vendas">Impulsione suas vendas</FooterLink>
          <FooterLink to="/recursos/equipes">Gestão de equipes</FooterLink>
          <FooterLink to="/recursos/integracao">Integração com sistemas</FooterLink>
          <FooterLink to="/recursos/relatorios">Relatórios e análises</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contato</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <strong>Email:</strong> contato@dialoguer.com.br
            </ContactItem>
            <ContactItem>
              <strong>Telefone:</strong> (11) 4002-8922
            </ContactItem>
            <ContactItem>
              <strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP
            </ContactItem>
          </ContactInfo>
          <ButtonContainer>
            <FooterButton as="a" href="https://app.dialoguer.com.br/signup" target="_blank" rel="noopener noreferrer" className="primary">Teste Grátis</FooterButton>
            <FooterButton to="/contato" className="outline">Fale Conosco</FooterButton>
          </ButtonContainer>
        </FooterColumn>
      </FooterContent>
      
      <Divider />
      
      <BottomFooter>
        <Copyright>© {new Date().getFullYear()} DIALOGUER. Todos os direitos reservados.</Copyright>
        <FooterNav>
          <FooterNavLink to="/termos">Termos de Uso</FooterNavLink>
          <FooterNavLink to="/privacidade">Política de Privacidade</FooterNavLink>
          <FooterNavLink to="/cookies">Cookies</FooterNavLink>
        </FooterNav>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
