import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaRocket, 
  FaUsers, 
  FaChartLine, 
  FaCheck, 
  FaWhatsapp, 
  FaMobileAlt,
  FaCog,
  FaLock,
  FaHeadset
} from 'react-icons/fa';
import { RiRobot2Fill } from 'react-icons/ri';
import { BsChatDots, BsSpeedometer } from 'react-icons/bs';
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
import Accordion from '../components/ui/Accordion';

// Imagens de exemplo
import { 
  heroImage, 
  feature1 as featureImage1, 
  feature2 as featureImage2, 
  feature3 as featureImage3,
  avatar1 as testimonialAvatar1,
  avatar2 as testimonialAvatar2,
  avatar3 as testimonialAvatar3,
  logo1 as logoCompany1,
  logo2 as logoCompany2,
  logo3 as logoCompany3,
  logo4 as logoCompany4
} from '../assets/index';

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

const fadeInDelay = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  }
});

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Styled Components específicos
const HeroSection = styled(Section)`
  min-height: 100vh;
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

const HeroContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const HeroContent = styled(Flex)`
  width: 100%;
`;

const HeroTextContainer = styled(motion.div)`
  flex: 1;
  padding-right: 3rem;
  
  @media (max-width: 992px) {
    padding-right: 0;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background: ${({ theme }) => theme.colors.primary}33;
      z-index: -1;
      border-radius: ${({ theme }) => theme.borderRadius.full};
    }
  }
  
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }
  
  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white}cc;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin: 0 auto 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const HeroImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    background: ${({ theme }) => theme.colors.gradientGreen};
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.5;
    z-index: -1;
  }
  
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
  }
  
  @media (max-width: 992px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: ${({ center }) => center ? 'center' : 'flex-start'};
  }
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const FeatureCard = styled(Card)`
  padding: 2.5rem 2rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  height: 100%;
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}22;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const FeatureText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
`;

const FeatureImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const TestimonialCard = styled(Card)`
  padding: 2.5rem;
  text-align: left;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  flex-grow: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TestimonialAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const TestimonialInfo = styled.div``;

const TestimonialName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const TestimonialRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 3rem;
  text-align: center;
  gap: 2rem;
`;

const StatItem = styled(motion.div)`
  flex: 1;
  min-width: 200px;
`;

const StatNumber = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 0.5rem;
`;

const StatLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
`;

const CompanyLogosContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  margin-top: 4rem;
  
  img {
    height: 40px;
    opacity: 0.7;
    filter: grayscale(100%);
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      opacity: 1;
      filter: grayscale(0);
    }
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
    
    img {
      height: 30px;
    }
  }
`;

const PricingSection = styled(Section)`
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    height: 150px;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 50%;
    box-shadow: 0 0 100px 100px ${({ theme }) => theme.colors.background};
  }
`;

const PricingCard = styled(Card)`
  padding: 3rem 2rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: ${({ popular, theme }) => popular ? `2px solid ${theme.colors.primary}` : '1px solid #eee'};
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  ${({ popular }) => popular && `
    transform: scale(1.05);
    
    @media (max-width: 992px) {
      transform: scale(1);
    }
  `}
`;

const PricingTag = styled.div`
  position: absolute;
  top: 20px;
  right: -30px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 2rem;
  transform: rotate(45deg);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
`;

const PricingHeader = styled.div`
  margin-bottom: 2rem;
`;

const PricingName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 600;
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const PricingPrice = styled.div`
  margin-bottom: 1.5rem;
  
  .amount {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    font-weight: 700;
    color: ${({ theme, popular }) => popular ? theme.colors.primary : theme.colors.secondary};
    
    .currency {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
      font-weight: 500;
      vertical-align: super;
    }
  }
  
  .period {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex-grow: 1;
  
  li {
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.md};
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  li.disabled {
    color: ${({ theme }) => theme.colors.textLight}99;
    
    svg {
      color: ${({ theme }) => theme.colors.textLight}99;
    }
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}22;
  filter: blur(100px);
  z-index: -1;
  
  &.top-right {
    top: -300px;
    right: -300px;
  }
  
  &.bottom-left {
    bottom: -300px;
    left: -300px;
  }
`;

const HomePage = () => {
  // Hooks para animação baseada no scroll
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featureDetailRef1, featureDetail1InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featureDetailRef2, featureDetail2InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featureDetailRef3, featureDetail3InView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {/* Seção Hero */}
      <HeroSection ref={heroRef}>
        <BackgroundGlow className="top-right" />
        <HeroContainer>
          <HeroContent 
            direction="row" 
            align="center" 
            gap="2rem"
            mobileDirection="column"
          >
            <HeroTextContainer
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeInLeft}
            >
              <Badge 
                variant="primary" 
                size="md" 
                as={motion.span}
                variants={fadeInDelay(0.2)}
              >
                Seu WhatsApp automático e inteligente
              </Badge>
              <HeroTitle variants={fadeInDelay(0.4)}>
                Transforme seu <span>atendimento</span> com automação de WhatsApp
              </HeroTitle>
              <HeroSubtitle variants={fadeInDelay(0.6)}>
                DIALOGUER é a plataforma completa que automatiza seus atendimentos no WhatsApp, gerando mais vendas e reduzindo custos com uma experiência personalizada para seus clientes.
              </HeroSubtitle>
              <ButtonGroup variants={fadeInDelay(0.8)}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  rounded 
                  as="a" 
                  href="https://app.dialoguer.com.br/signup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Teste Grátis por 14 Dias
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  rounded 
                  to="/contato"
                >
                  Fale Conosco
                </Button>
              </ButtonGroup>
            </HeroTextContainer>
            
            <HeroImageContainer
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              <img src={heroImage} alt="DIALOGUER - Chatbot para WhatsApp" />
            </HeroImageContainer>
          </HeroContent>
        </HeroContainer>
      </HeroSection>

      {/* Seção de Recursos */}
      <Section ref={featuresRef}>
        <Container>
          <SectionTitle
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeIn}
            underline="center"
          >
            Por que escolher o DIALOGUER?
          </SectionTitle>
          <SectionSubtitle
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Potencialize seu atendimento com recursos avançados de automação e inteligência artificial
          </SectionSubtitle>
          
          <Grid 
            columns={3} 
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <FeatureCard hover="lift">
                <FeatureIcon>
                  <RiRobot2Fill />
                </FeatureIcon>
                <FeatureTitle>Atendimento Automatizado</FeatureTitle>
                <FeatureText>
                  Chatbot inteligente que responde perguntas frequentes e guia seus clientes 24 horas por dia, 7 dias por semana.
                </FeatureText>
              </FeatureCard>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard hover="lift">
                <FeatureIcon>
                  <FaRocket />
                </FeatureIcon>
                <FeatureTitle>Aumente suas Vendas</FeatureTitle>
                <FeatureText>
                  Capture leads, qualifique clientes e envie campanhas personalizadas diretamente pelo WhatsApp.
                </FeatureText>
              </FeatureCard>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard hover="lift">
                <FeatureIcon>
                  <FaChartLine />
                </FeatureIcon>
                <FeatureTitle>Análises Detalhadas</FeatureTitle>
                <FeatureText>
                  Relatórios completos sobre suas conversas, desempenho de atendentes e eficiência de automações.
                </FeatureText>
              </FeatureCard>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard hover="lift">
                <FeatureIcon>
                  <FaUsers />
                </FeatureIcon>
                <FeatureTitle>Gestão de Equipes</FeatureTitle>
                <FeatureText>
                  Organize seu time de atendimento com distribuição inteligente de conversas e monitoramento em tempo real.
                </FeatureText>
              </FeatureCard>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard hover="lift">
                <FeatureIcon>
                  <BsSpeedometer />
                </FeatureIcon>
                <FeatureTitle>Respostas Rápidas</FeatureTitle>
                <FeatureText>
                  Agilize seu atendimento com modelos de mensagens prontos e personalizáveis para cada situação.
                </FeatureText>
              </FeatureCard>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <FeatureCard hover="lift">
                <FeatureIcon>
                  <FaCog />
                </FeatureIcon>
                <FeatureTitle>Integrações</FeatureTitle>
                <FeatureText>
                  Conecte com CRM, e-commerce, planilhas e outros sistemas para uma operação totalmente sincronizada.
                </FeatureText>
              </FeatureCard>
            </motion.div>
          </Grid>
        </Container>
      </Section>
      
      {/* Seção de Detalhes de Recursos */}
      <Section bg="light" ref={featureDetailRef1}>
        <Container>
          <Flex 
            direction="row" 
            align="center" 
            gap="3rem"
            mobileDirection="column"
          >
            <motion.div 
              style={{ flex: 1 }}
              initial="hidden"
              animate={featureDetail1InView ? "visible" : "hidden"}
              variants={fadeInLeft}
            >
              <Badge variant="primary" size="md">Automação Inteligente</Badge>
              <Heading level={2} mb="1.5rem">
                Atendimento 24/7 com chatbot que entende seus clientes
              </Heading>
              <Text size="lg" color="textLight" mb="2rem">
                Nosso chatbot com inteligência artificial compreende a linguagem natural dos seus clientes, garantindo respostas precisas e personalizadas a qualquer hora do dia.
              </Text>
              
              <Flex direction="column" gap="1rem" mb="2rem">
                <Flex gap="1rem" align="center">
                  <FaCheck color="#00CC66" size={20} />
                  <Text>Fluxos de conversas personalizáveis</Text>
                </Flex>
                <Flex gap="1rem" align="center">
                  <FaCheck color="#00CC66" size={20} />
                  <Text>Transferência para atendente humano quando necessário</Text>
                </Flex>
                <Flex gap="1rem" align="center">
                  <FaCheck color="#00CC66" size={20} />
                  <Text>Aprendizado contínuo e melhoria da base de conhecimento</Text>
                </Flex>
              </Flex>
              
              <Button variant="primary" rounded to="/recursos/chatbot">
                Saiba mais sobre Automação
              </Button>
            </motion.div>
            
            <motion.div 
              style={{ flex: 1 }}
              initial="hidden"
              animate={featureDetail1InView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              <FeatureImage src={featureImage1} alt="Automação Inteligente DIALOGUER" />
            </motion.div>
          </Flex>
        </Container>
      </Section>
      
      <Section ref={featureDetailRef2}>
        <Container>
          <Flex 
            direction="row-reverse" 
            align="center" 
            gap="3rem"
            mobileDirection="column"
          >
            <motion.div 
              style={{ flex: 1 }}
              initial="hidden"
              animate={featureDetail2InView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              <Badge variant="primary" size="md">Gestão de Equipes</Badge>
              <Heading level={2} mb="1.5rem">
                Organize seu time e potencialize resultados
              </Heading>
              <Text size="lg" color="textLight" mb="2rem">
                Distribua automaticamente as conversas entre sua equipe, monitore o desempenho em tempo real e garanta que nenhum cliente fique sem resposta.
              </Text>
              
              <Flex direction="column" gap="1rem" mb="2rem">
                <Flex gap="1rem" align="center">
                  <FaCheck color="#00CC66" size={20} />
                  <Text>Distribuição inteligente de conversas</Text>
                </Flex>
                <Flex gap="1rem" align="center">
                  <FaCheck color="#00CC66" size={20} />
                  <Text>Métricas de atendimento por atendente</Text>
                </Flex>
                <Flex gap="1rem" align="center">
                  <FaCheck color="#00CC66" size={20} />
                  <Text>Supervisão e monitoramento em tempo real</Text>
                </Flex>
              </Flex>
              
              <Button variant="primary" rounded to="/recursos/equipes">
                Conheça a Gestão de Equipes
              </Button>
            </motion.div>
            
            <motion.div 
              style={{ flex: 1 }}
              initial="hidden"
              animate={featureDetail2InView ? "visible" : "hidden"}
              variants={fadeInLeft}
            >
              <FeatureImage src={featureImage2} alt="Gestão de Equipes DIALOGUER" />
            </motion.div>
          </Flex>
        </Container>
      </Section>
      
      {/* Seção de Estatísticas */}
      <Section bg="dark" ref={statsRef}>
        <Container>
          <SectionTitle 
            color="white"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Resultados que transformam negócios
          </SectionTitle>
          
          <StatsContainer>
            <StatItem
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={fadeInDelay(0.2)}
            >
              <StatNumber>+80%</StatNumber>
              <StatLabel>Aumento na satisfação dos clientes</StatLabel>
            </StatItem>
            
            <StatItem
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={fadeInDelay(0.4)}
            >
              <StatNumber>65%</StatNumber>
              <StatLabel>Redução no tempo de atendimento</StatLabel>
            </StatItem>
            
            <StatItem
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={fadeInDelay(0.6)}
            >
              <StatNumber>3x</StatNumber>
              <StatLabel>Aumento na capacidade de atendimento</StatLabel>
            </StatItem>
            
            <StatItem
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={fadeInDelay(0.8)}
            >
              <StatNumber>+5.000</StatNumber>
              <StatLabel>Empresas utilizando o DIALOGUER</StatLabel>
            </StatItem>
          </StatsContainer>
        </Container>
      </Section>
      
      {/* Seção de Depoimentos */}
      <Section ref={testimonialsRef}>
        <Container>
          <SectionTitle
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeIn}
            underline="center"
          >
            O que nossos clientes dizem
          </SectionTitle>
          <SectionSubtitle
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Empresas que transformaram sua comunicação com o DIALOGUER
          </SectionSubtitle>
          
          <Grid 
            columns={3}
            tabletColumns={2}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <TestimonialCard shadow="md" border>
                <TestimonialText>
                  "O DIALOGUER revolucionou nosso atendimento ao cliente. Conseguimos automatizar 70% das perguntas frequentes e nossos vendedores agora podem focar em conversões. Excelente ferramenta!"
                </TestimonialText>
                <TestimonialAuthor>
                  <TestimonialAvatar src={testimonialAvatar1} alt="João Silva" />
                  <TestimonialInfo>
                    <TestimonialName>João Silva</TestimonialName>
                    <TestimonialRole>Diretor de Marketing, TechShop</TestimonialRole>
                  </TestimonialInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <TestimonialCard shadow="md" border>
                <TestimonialText>
                  "Implementamos o DIALOGUER há 3 meses e já percebemos um aumento de 35% nas vendas por WhatsApp. O suporte é excelente e as atualizações constantes tornam a plataforma cada vez melhor."
                </TestimonialText>
                <TestimonialAuthor>
                  <TestimonialAvatar src={testimonialAvatar2} alt="Maria Oliveira" />
                  <TestimonialInfo>
                    <TestimonialName>Maria Oliveira</TestimonialName>
                    <TestimonialRole>Gerente Comercial, ModaFina</TestimonialRole>
                  </TestimonialInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <TestimonialCard shadow="md" border>
                <TestimonialText>
                  "A facilidade para criar fluxos de atendimento é impressionante! Mesmo sem conhecimento técnico, conseguimos personalizar totalmente o chatbot para nossa realidade. Recomendo 100%."
                </TestimonialText>
                <TestimonialAuthor>
                  <TestimonialAvatar src={testimonialAvatar3} alt="Carlos Mendes" />
                  <TestimonialInfo>
                    <TestimonialName>Carlos Mendes</TestimonialName>
                    <TestimonialRole>CEO, Restaurante Sabor & Arte</TestimonialRole>
                  </TestimonialInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            </motion.div>
          </Grid>
          
          <CompanyLogosContainer
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeInDelay(0.6)}
          >
            <img src={logoCompany1} alt="Logo Empresa 1" />
            <img src={logoCompany2} alt="Logo Empresa 2" />
            <img src={logoCompany3} alt="Logo Empresa 3" />
            <img src={logoCompany4} alt="Logo Empresa 4" />
          </CompanyLogosContainer>
        </Container>
      </Section>
      
      {/* Seção Explore nossas Análises */}
      <Section bg="gradient" padding="80px 0" ref={featureDetailRef3}>
        <Container>
          <Flex 
            direction="column" 
            align="center" 
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div
              initial="hidden"
              animate={featureDetail3InView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <Badge variant="light" size="lg" mb="1rem">
                Análises e Insights
              </Badge>
              <Heading level={2} color="white" mb="1.5rem">
                Tome decisões baseadas em dados
              </Heading>
              <Text size="xl" color="white" mb="2.5rem" maxWidth="600px" style={{ opacity: 0.9 }}>
                Dashboards completos com métricas de atendimento, funil de vendas, tempos de resposta e satisfação dos clientes para otimizar sua operação.
              </Text>
              <Button variant="light" rounded size="lg" to="/recursos/analises">
                Explore nossas Análises
              </Button>
            </motion.div>
          </Flex>
        </Container>
      </Section>
      
      {/* Seção de Preços */}
      <PricingSection bg="light" ref={pricingRef}>
        <BackgroundGlow className="bottom-left" />
        <Container>
          <SectionTitle
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={fadeIn}
            underline="center"
          >
            Planos para todos os tamanhos de negócios
          </SectionTitle>
          <SectionSubtitle
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Escolha o plano ideal para o seu negócio e comece a transformar seu atendimento hoje mesmo
          </SectionSubtitle>
          
          <Grid 
            columns={3}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <PricingCard shadow="md">
                <PricingHeader>
                  <PricingName>Inicial</PricingName>
                  <PricingPrice>
                    <div className="amount">
                      <span className="currency">R$</span>199
                    </div>
                    <div className="period">/mês</div>
                  </PricingPrice>
                </PricingHeader>
                
                <PricingFeatures>
                  <li>
                    <FaCheck size={16} />
                    1 número de WhatsApp
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Até 1.000 mensagens/mês
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Chatbot básico
                  </li>
                  <li>
                    <FaCheck size={16} />
                    3 usuários
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Relatórios básicos
                  </li>
                  <li className="disabled">
                    <FaCheck size={16} />
                    Integrações
                  </li>
                </PricingFeatures>
                
                <Button variant="outline" rounded as="a" href="https://app.dialoguer.com.br/signup" target="_blank" rel="noopener noreferrer">
                  Começar Agora
                </Button>
              </PricingCard>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <PricingCard shadow="lg" popular>
                <PricingTag>Mais Popular</PricingTag>
                <PricingHeader>
                  <PricingName>Profissional</PricingName>
                  <PricingPrice popular>
                    <div className="amount">
                      <span className="currency">R$</span>399
                    </div>
                    <div className="period">/mês</div>
                  </PricingPrice>
                </PricingHeader>
                
                <PricingFeatures>
                  <li>
                    <FaCheck size={16} />
                    2 números de WhatsApp
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Até 5.000 mensagens/mês
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Chatbot avançado com IA
                  </li>
                  <li>
                    <FaCheck size={16} />
                    10 usuários
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Relatórios completos
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Integrações básicas
                  </li>
                </PricingFeatures>
                
                <Button variant="primary" rounded as="a" href="https://app.dialoguer.com.br/signup" target="_blank" rel="noopener noreferrer">
                  Escolher Plano
                </Button>
              </PricingCard>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <PricingCard shadow="md">
                <PricingHeader>
                  <PricingName>Empresarial</PricingName>
                  <PricingPrice>
                    <div className="amount">
                      <span className="currency"></span>Fale Conosco
                    </div>
                    <div className="period"></div>
                  </PricingPrice>
                </PricingHeader>
                
                <PricingFeatures>
                  <li>
                    <FaCheck size={16} />
                    5 números de WhatsApp
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Mensagens ilimitadas
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Chatbot personalizado com IA
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Usuários ilimitados
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Relatórios avançados e API
                  </li>
                  <li>
                    <FaCheck size={16} />
                    Todas as integrações
                  </li>
                </PricingFeatures>
                
                <Button variant="secondary" rounded as="a" href="https://app.dialoguer.com.br/signup" target="_blank" rel="noopener noreferrer">
                  Começar Agora
                </Button>
              </PricingCard>
            </motion.div>
          </Grid>
        </Container>
      </PricingSection>
      
      {/* Seção FAQ */}
      <Section ref={faqRef}>
        <Container>
          <SectionTitle
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={fadeIn}
            underline="center"
          >
            Perguntas Frequentes
          </SectionTitle>
          <SectionSubtitle
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Tire suas dúvidas sobre o DIALOGUER
          </SectionSubtitle>
          
          <Flex 
            direction="column" 
            style={{ maxWidth: "800px", margin: "0 auto" }}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Accordion title="O que é o DIALOGUER?">
                <Text>
                  DIALOGUER é uma plataforma completa para automação de atendimento via WhatsApp. Com nosso chatbot inteligente, você pode automatizar respostas a perguntas frequentes, qualificar leads, gerar vendas e proporcionar uma experiência personalizada aos seus clientes, 24 horas por dia, 7 dias por semana.
                </Text>
              </Accordion>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Accordion title="Preciso ter conhecimento técnico para usar?">
                <Text>
                  Não! O DIALOGUER foi desenvolvido pensando na facilidade de uso. Nossa interface intuitiva permite que você crie fluxos de conversação, personalize respostas e configure automações sem nenhum conhecimento de programação.
                </Text>
              </Accordion>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Accordion title="Preciso ter WhatsApp Business para usar o DIALOGUER?">
                <Text>
                  Sim, é necessário ter uma conta WhatsApp Business para integrar com nossa plataforma. Ajudamos você em todo o processo de configuração e aprovação junto ao WhatsApp.
                </Text>
              </Accordion>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Accordion title="Quantas conversas simultâneas posso gerenciar?">
                <Text>
                  Depende do plano escolhido. Nossos planos variam desde o gerenciamento de 1.000 conversas mensais até conversas ilimitadas no plano Empresarial. Todos os planos permitem conversas simultâneas sem limitação de concorrência.
                </Text>
              </Accordion>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Accordion title="O DIALOGUER funciona com outros mensageiros além do WhatsApp?">
                <Text>
                  Atualmente o DIALOGUER é especializado em WhatsApp, garantindo a melhor experiência possível nesta plataforma. Estamos desenvolvendo integrações com outros mensageiros como Telegram e Instagram Direct que estarão disponíveis em breve.
                </Text>
              </Accordion>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Accordion title="Como posso integrar o DIALOGUER com meu sistema atual?">
                <Text>
                  O DIALOGUER oferece APIs e webhooks para integração com diversos sistemas como CRM, e-commerce, ERP e planilhas. Também temos integrações nativas com sistemas populares como Salesforce, Hubspot, RD Station, Shopify e muitos outros.
                </Text>
              </Accordion>
            </motion.div>
          </Flex>
        </Container>
      </Section>
      
      {/* Seção CTA */}
      <Section bg="primary" padding="100px 0" ref={ctaRef}>
        <Container>
          <Flex 
            direction="column" 
            align="center" 
            style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <Badge variant="light" size="lg" mb="1rem">
                Comece hoje mesmo
              </Badge>
              <Heading level={2} color="white" mb="1.5rem">
                Transforme seu atendimento no WhatsApp com o DIALOGUER
              </Heading>
              <Text size="xl" color="white" mb="2.5rem" maxWidth="600px" style={{ opacity: 0.9 }}>
                Experimente gratuitamente por 14 dias e descubra como nosso chatbot pode aumentar suas vendas e melhorar a satisfação dos seus clientes.
              </Text>
              <ButtonGroup center>
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
                  <FaWhatsapp size={20} />
                  Teste Grátis
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  rounded 
                  to="/contato"
                  style={{ color: 'white', borderColor: 'white' }}
                >
                  <FaHeadset size={20} />
                  Falar com Consultor
                </Button>
              </ButtonGroup>
            </motion.div>
          </Flex>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
