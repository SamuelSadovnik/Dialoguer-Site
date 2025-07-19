import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

import { 
  Container, 
  Section, 
  SectionTitle, 
  SectionSubtitle, 
  Grid, 
  Flex,
  Card,
  Heading,
  Text
} from '../components/ui/Layout';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

// Animações
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Styled Components
const ContactBanner = styled(Section)`
  min-height: 40vh;
  display: flex;
  align-items: center;
  padding-top: 120px;
  background: linear-gradient(135deg, #1A2238 0%, #121827 100%);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    z-index: 0;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 4px;
  }
  
  div {
    flex: 1;
  }
  
  h4 {
    margin: 0 0 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 2rem;
`;

const ContactPage = () => {
  // Hooks para animação baseada no scroll
  const [bannerRef, bannerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mapRef, mapInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    alert('Formulário enviado! Em breve entraremos em contato.');
  };

  return (
    <>
      {/* Banner */}
      <ContactBanner ref={bannerRef}>
        <Container>
          <Flex 
            direction="column" 
            align="center" 
            style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
          >
            <motion.div
              initial="hidden"
              animate={bannerInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <Badge variant="primary" size="lg" mb="1rem">
                Contato
              </Badge>
              <Heading level={1} color="white" mb="1.5rem">
                Estamos Aqui para Ajudar
              </Heading>
              <Text size="xl" color="white" mb="2rem" style={{ opacity: 0.9 }}>
                Entre em contato com nossa equipe para tirar dúvidas, solicitar uma demonstração ou conhecer mais sobre o DIALOGUER.
              </Text>
            </motion.div>
          </Flex>
        </Container>
      </ContactBanner>

      {/* Formulário e Informações de Contato */}
      <Section ref={formRef}>
        <Container>
          <Grid 
            columns={2} 
            tabletColumns={1}
            gap="3rem"
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            {/* Formulário */}
            <div>
              <Heading level={2} mb="2rem">Envie-nos uma Mensagem</Heading>
              <ContactForm onSubmit={handleSubmit}>
                <Grid columns={2} tabletColumns={1} gap="1.5rem">
                  <FormGroup>
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Seu nome completo" required />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="seu@email.com" required />
                  </FormGroup>
                </Grid>
                <FormGroup>
                  <Label>Telefone / WhatsApp</Label>
                  <Input type="tel" placeholder="(00) 00000-0000" />
                </FormGroup>
                <FormGroup>
                  <Label>Assunto</Label>
                  <Input type="text" placeholder="Sobre o que você quer falar?" required />
                </FormGroup>
                <FormGroup>
                  <Label>Mensagem</Label>
                  <Textarea placeholder="Como podemos ajudar você?" required />
                </FormGroup>
                <div>
                  <Button variant="primary" size="lg" type="submit" style={{ minWidth: "200px" }}>
                    Enviar Mensagem
                  </Button>
                </div>
              </ContactForm>
            </div>
            
            {/* Informações de Contato */}
            <div>
              <Heading level={2} mb="2rem">Informações de Contato</Heading>
              <Card shadow="md" padding="2rem">
                <ContactInfo>
                  <ContactItem>
                    <FaEnvelope size={20} />
                    <div>
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:contato@dialoguer.com.br">contato@dialoguer.com.br</a>
                      </p>
                    </div>
                  </ContactItem>
                  <ContactItem>
                    <FaPhone size={20} />
                    <div>
                      <h4>Telefone</h4>
                      <p>
                        <a href="tel:+551199999999">+55 (11) 9999-9999</a>
                      </p>
                    </div>
                  </ContactItem>
                  <ContactItem>
                    <FaWhatsapp size={20} />
                    <div>
                      <h4>WhatsApp</h4>
                      <p>
                        <a href="https://wa.me/5511999999999">+55 (11) 9999-9999</a>
                      </p>
                    </div>
                  </ContactItem>
                  <ContactItem>
                    <FaMapMarkerAlt size={20} />
                    <div>
                      <h4>Endereço</h4>
                      <p>
                        Rua Carlos de Carvalho, 1671<br />
                        Cascavel - Paraná<br />
                        Brasil
                      </p>
                    </div>
                  </ContactItem>
                </ContactInfo>
                
                <Flex justify="center" style={{ marginTop: "2rem" }}>
                  <Button 
                    variant="secondary" 
                    size="md" 
                    as="a"
                    href="https://app.dialoguer.com.br/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agende uma Demonstração
                  </Button>
                </Flex>
              </Card>
            </div>
          </Grid>
          
          {/* Mapa */}
          <motion.div
            ref={mapRef}
            initial="hidden"
            animate={mapInView ? "visible" : "hidden"}
            variants={fadeIn}
            style={{ marginTop: "3rem" }}
          >
            <Heading level={2} mb="1.5rem">Nossa Localização</Heading>
            <MapContainer>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9489323358643!2d-53.473080823803385!3d-24.95178584716736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d41c85f1ae5f%3A0x27c5cda4671e7d69!2sR.%20Carlos%20de%20Carvalho%2C%201671%20-%20Centro%2C%20Cascavel%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1689835960263!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa do escritório da DIALOGUER"
              />
            </MapContainer>
          </motion.div>
        </Container>
      </Section>
      
      {/* CTA */}
      <Section bg="primary" padding="80px 0">
        <Container>
          <Flex 
            direction="column" 
            align="center" 
            style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Heading level={2} color="white" mb="1.5rem">
              Pronto para Transformar seu Atendimento?
            </Heading>
            <Text size="xl" color="white" mb="2rem" style={{ opacity: 0.9 }}>
              Experimente o DIALOGUER gratuitamente por 14 dias e descubra como podemos ajudar seu negócio.
            </Text>
            <Button 
              variant="light" 
              size="lg" 
              rounded 
              as="a"
              href="https://app.dialoguer.com.br/signup"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00CC66' }}
            >
              Iniciar Teste Grátis
            </Button>
          </Flex>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
