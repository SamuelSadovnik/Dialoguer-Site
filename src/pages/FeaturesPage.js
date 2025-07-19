import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaRobot, 
  FaChartBar, 
  FaUsers, 
  FaMobileAlt,
  FaDatabase,
  FaCloudUploadAlt
} from 'react-icons/fa';
import { BsLightningCharge, BsShieldCheck } from 'react-icons/bs';

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Styled Components
const FeatureBanner = styled(Section)`
  min-height: 50vh;
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

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.primary}22;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  transition: ${({ theme }) => theme.transitions.default};
  
  ${Card}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  
  li {
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}11;
    display: flex;
    align-items: center;
    gap: 1rem;
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
      flex-shrink: 0;
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
  }
  
  li:last-child {
    border-bottom: none;
  }
`;

const FeaturePage = () => {
  // Hooks para animação baseada no scroll
  const [bannerRef, bannerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [detailsRef, detailsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [integrationRef, integrationInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {/* Banner */}
      <FeatureBanner ref={bannerRef}>
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
                Recursos
              </Badge>
              <Heading level={1} color="white" mb="1.5rem">
                Funcionalidades Avançadas para Revolucionar seu Atendimento
              </Heading>
              <Text size="xl" color="white" mb="2rem" style={{ opacity: 0.9 }}>
                Explore todos os recursos que fazem do DIALOGUER a plataforma mais completa para automação de WhatsApp.
              </Text>
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
            </motion.div>
          </Flex>
        </Container>
      </FeatureBanner>

      {/* Recursos Principais */}
      <Section ref={featuresRef}>
        <Container>
          <SectionTitle
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeIn}
            underline="center"
          >
            Potencialize sua Comunicação
          </SectionTitle>
          <SectionSubtitle
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Conheça as ferramentas que transformam a maneira como você interage com seus clientes
          </SectionSubtitle>
          
          <Grid 
            columns={3} 
            tabletColumns={2}
            gap="2rem"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card padding="2rem" shadow="md" border hover="lift" style={{ height: "100%" }}>
                <FeatureIcon>
                  <FaRobot />
                </FeatureIcon>
                <FeatureTitle>Chatbot Inteligente</FeatureTitle>
                <Text>
                  Automatize respostas a perguntas frequentes, qualifique leads e guie clientes em toda a jornada de compra com nossa IA avançada.
                </Text>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card padding="2rem" shadow="md" border hover="lift" style={{ height: "100%" }}>
                <FeatureIcon>
                  <FaChartBar />
                </FeatureIcon>
                <FeatureTitle>Métricas Avançadas</FeatureTitle>
                <Text>
                  Acompanhe todas as estatísticas de atendimento, taxas de conversão e satisfação do cliente em dashboards intuitivos.
                </Text>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card padding="2rem" shadow="md" border hover="lift" style={{ height: "100%" }}>
                <FeatureIcon>
                  <FaUsers />
                </FeatureIcon>
                <FeatureTitle>Gestão de Equipe</FeatureTitle>
                <Text>
                  Distribua automaticamente conversas entre atendentes, monitore performance em tempo real e otimize sua operação.
                </Text>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card padding="2rem" shadow="md" border hover="lift" style={{ height: "100%" }}>
                <FeatureIcon>
                  <BsLightningCharge />
                </FeatureIcon>
                <FeatureTitle>Automação de Marketing</FeatureTitle>
                <Text>
                  Crie fluxos de nutrição, campanhas segmentadas e recupere carrinho abandonado com mensagens personalizadas.
                </Text>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card padding="2rem" shadow="md" border hover="lift" style={{ height: "100%" }}>
                <FeatureIcon>
                  <FaDatabase />
                </FeatureIcon>
                <FeatureTitle>Base de Conhecimento</FeatureTitle>
                <Text>
                  Organize informações de produtos, respostas a dúvidas e procedimentos para acesso rápido pela equipe e chatbot.
                </Text>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Card padding="2rem" shadow="md" border hover="lift" style={{ height: "100%" }}>
                <FeatureIcon>
                  <BsShieldCheck />
                </FeatureIcon>
                <FeatureTitle>Segurança Avançada</FeatureTitle>
                <Text>
                  Proteção de dados completa, conformidade com LGPD e criptografia de ponta a ponta em todas as conversas.
                </Text>
              </Card>
            </motion.div>
          </Grid>
        </Container>
      </Section>
      
      {/* Recursos Detalhados */}
      <Section bg="light" ref={detailsRef}>
        <Container>
          <SectionTitle
            initial="hidden"
            animate={detailsInView ? "visible" : "hidden"}
            variants={fadeIn}
            align="left"
            underline="left"
          >
            Recursos em Detalhes
          </SectionTitle>
          <SectionSubtitle
            initial="hidden"
            animate={detailsInView ? "visible" : "hidden"}
            variants={fadeIn}
            align="left"
            maxWidth="100%"
          >
            Cada recurso do DIALOGUER foi desenvolvido para otimizar seu atendimento
          </SectionSubtitle>
          
          <motion.div
            initial="hidden"
            animate={detailsInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <FeatureList>
              <li>
                <FaMobileAlt size={24} />
                <div>
                  <h4>Multi-dispositivo e Multi-WhatsApp</h4>
                  <p>Gerencie vários números de WhatsApp na mesma plataforma, com acesso via desktop, tablet e smartphone. Ideal para empresas com múltiplos departamentos ou unidades.</p>
                </div>
              </li>
              <li>
                <FaRobot size={24} />
                <div>
                  <h4>Fluxos de Conversação Dinâmicos</h4>
                  <p>Crie jornadas de interação complexas com decisões condicionais, variáveis personalizadas e integrações com sistemas externos. O chatbot se adapta às respostas e comportamento do usuário.</p>
                </div>
              </li>
              <li>
                <FaChartBar size={24} />
                <div>
                  <h4>Relatórios Personalizáveis</h4>
                  <p>Configure dashboards personalizados com as métricas mais importantes para seu negócio. Exporte dados em diversos formatos e agende relatórios automáticos por email.</p>
                </div>
              </li>
              <li>
                <FaUsers size={24} />
                <div>
                  <h4>Perfis e Permissões</h4>
                  <p>Configure diferentes níveis de acesso para cada membro da equipe. Administradores, supervisores e atendentes têm visualizações e permissões específicas para suas funções.</p>
                </div>
              </li>
              <li>
                <BsLightningCharge size={24} />
                <div>
                  <h4>Gatilhos Automatizados</h4>
                  <p>Configure ações automáticas baseadas em comportamentos, como enviar uma oferta após o abandono de carrinho, lembrete de consulta ou aniversário do cliente.</p>
                </div>
              </li>
              <li>
                <FaCloudUploadAlt size={24} />
                <div>
                  <h4>Mídia Rica e Templates</h4>
                  <p>Envie imagens, vídeos, arquivos PDF, localização e botões interativos. Use templates aprovados pelo WhatsApp para mensagens promocionais em conformidade com as regras.</p>
                </div>
              </li>
            </FeatureList>
          </motion.div>
        </Container>
      </Section>
      
      {/* Integrações */}
      <Section ref={integrationRef}>
        <Container>
          <SectionTitle
            initial="hidden"
            animate={integrationInView ? "visible" : "hidden"}
            variants={fadeIn}
            underline="center"
          >
            Integrações Poderosas
          </SectionTitle>
          <SectionSubtitle
            initial="hidden"
            animate={integrationInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Conecte o DIALOGUER com seus sistemas favoritos
          </SectionSubtitle>
          
          <Grid 
            columns={4} 
            tabletColumns={2}
            gap="1.5rem"
            initial="hidden"
            animate={integrationInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div key={item} variants={fadeIn}>
                <Card 
                  padding="1.5rem" 
                  shadow="sm" 
                  border 
                  hover="lift" 
                  style={{ 
                    height: "100%", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img 
                    src={`https://via.placeholder.com/80x80/f8f9fa/00CC66?text=App+${item}`} 
                    alt={`Integration ${item}`} 
                    style={{ marginBottom: "1rem" }}
                  />
                  <Text align="center" weight="500">
                    Integração {item}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </Grid>
          
          <Flex 
            justify="center" 
            style={{ marginTop: "3rem" }}
            initial="hidden"
            animate={integrationInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Button variant="secondary" size="lg" rounded to="/integracoes">
              Ver Todas as Integrações
            </Button>
          </Flex>
        </Container>
      </Section>
      
      {/* CTA */}
      <Section bg="primary" padding="80px 0" ref={ctaRef}>
        <Container>
          <Flex 
            direction="column" 
            align="center" 
            style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Heading level={2} color="white" mb="1.5rem">
              Comece a usar o DIALOGUER hoje mesmo
            </Heading>
            <Text size="xl" color="white" mb="2rem" style={{ opacity: 0.9 }}>
              Experimente todos os recursos por 14 dias sem compromisso e transforme seu atendimento no WhatsApp.
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

export default FeaturePage;
