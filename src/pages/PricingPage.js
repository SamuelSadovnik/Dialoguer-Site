import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

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
import { FaCheck } from 'react-icons/fa';

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
const PricingBanner = styled(Section)`
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

const PriceCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  ${({ featured }) => featured && `
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 10px 40px rgba(0, 204, 102, 0.2);
    
    &:hover {
      transform: translateY(-15px) scale(1.02);
      box-shadow: 0 15px 50px rgba(0, 204, 102, 0.25);
    }
    
    @media (max-width: 768px) {
      transform: none;
      
      &:hover {
        transform: translateY(-5px);
      }
    }
  `}
`;

const PriceHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  position: relative;
  
  ${({ featured }) => featured && `
    &:after {
      content: 'Recomendado';
      position: absolute;
      top: 0;
      right: 0;
      background: #00CC66;
      color: white;
      font-size: 0.7rem;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.3rem 0.8rem;
      border-radius: 0 0 0 8px;
    }
  `}
`;

const PriceAmount = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme, featured }) => featured ? theme.colors.primary : theme.colors.secondary};
  margin: 1.5rem 0 1rem;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  small {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const PriceFeatures = styled.ul`
  flex-grow: 1;
  list-style: none;
  padding: 2rem;
  margin: 0;
  min-height: 280px; /* Garantir uma altura mínima consistente */
  
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
      margin-top: 3px;
      flex-shrink: 0;
    }
  }
`;

const PriceFooter = styled.div`
  padding: 0 2rem 2rem;
`;

const ComparisonTable = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 3rem 0;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
    
    th {
      background: ${({ theme }) => theme.colors.lightBg};
      font-weight: 600;
    }
    
    tr:last-child td {
      border-bottom: none;
    }
    
    td:first-child {
      font-weight: 500;
    }
    
    td svg.check {
      color: ${({ theme }) => theme.colors.primary};
    }
    
    td svg.minus {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;

const PricingPage = () => {
  // Hooks para animação baseada no scroll
  const [bannerRef, bannerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [comparisonRef, comparisonInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const plans = [
    {
      name: "Básico",
      price: "R$ 199",
      period: "/mês",
      description: "Ideal para empresas iniciantes com volume de atendimento baixo",
      features: [
        "1 número de WhatsApp",
        "Até 3 atendentes",
        "Chatbot básico",
        "Métricas essenciais",
        "Suporte por email"
      ],
      buttonText: "Começar Agora",
      buttonVariant: "outline",
      featured: false
    },
    {
      name: "Profissional",
      price: "R$ 399",
      period: "/mês",
      description: "Perfeito para empresas em crescimento com equipes de atendimento maiores",
      features: [
        "3 números de WhatsApp",
        "Até 10 atendentes",
        "Chatbot avançado com IA",
        "Métricas completas e relatórios",
        "Integrações com CRM",
        "Automações de marketing",
        "Suporte prioritário"
      ],
      buttonText: "Teste Grátis por 14 Dias",
      buttonVariant: "primary",
      featured: true
    },
    {
      name: "Empresarial",
      price: "Fale Conosco",
      period: "",
      description: "Para grandes operações com necessidades avançadas de atendimento",
      features: [
        "10 números de WhatsApp",
        "Atendentes ilimitados",
        "Chatbot avançado personalizado",
        "API completa",
        "Integrações customizadas",
        "Análise avançada de dados",
        "Suporte 24/7 com SLA",
        "Gerente de conta dedicado"
      ],
      buttonText: "Falar com Consultor",
      buttonVariant: "outline",
      featured: false
    }
  ];

  return (
    <>
      {/* Banner */}
      <PricingBanner ref={bannerRef}>
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
                Preços
              </Badge>
              <Heading level={1} color="white" mb="1.5rem">
                Escolha o Plano Ideal para o Seu Negócio
              </Heading>
              <Text size="xl" color="white" mb="2rem" style={{ opacity: 0.9 }}>
                Todos os planos incluem os principais recursos do DIALOGUER e podem ser personalizados para suas necessidades específicas.
              </Text>
            </motion.div>
          </Flex>
        </Container>
      </PricingBanner>

      {/* Planos de Preço */}
      <Section ref={pricingRef} padding="80px 0">
        <Container>
          <SectionTitle
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={fadeIn}
            underline="center"
          >
            Planos Flexíveis
          </SectionTitle>
          <SectionSubtitle
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Escolha o plano ideal para o tamanho e necessidade do seu negócio
          </SectionSubtitle>
          
          <Grid 
            columns={3} 
            tabletColumns={1}
            gap="2rem"
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={staggerContainer}
            style={{ marginTop: "3rem" }}
          >
            {plans.map((plan, index) => (
              <motion.div key={index} variants={fadeIn}>
                <PriceCard shadow={plan.featured ? "lg" : "md"} border featured={plan.featured}>
                  <PriceHeader featured={plan.featured}>
                    <Heading level={3}>{plan.name}</Heading>
                    <PriceAmount featured={plan.featured}>
                      {plan.price === "Fale Conosco" ? (
                        <span>{plan.price}</span>
                      ) : (
                        <>
                          <span>{plan.price}</span>
                          <small>{plan.period}</small>
                        </>
                      )}
                    </PriceAmount>
                    <Text size="sm" color="textLight" style={{ minHeight: "40px" }}>
                      {plan.description}
                    </Text>
                  </PriceHeader>
                  <PriceFeatures>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheck size={16} />
                        {feature}
                      </li>
                    ))}
                  </PriceFeatures>
                  <PriceFooter>
                    <Button 
                      variant={plan.buttonVariant} 
                      size="lg" 
                      rounded 
                      fullWidth
                      as={plan.featured ? "a" : Link}
                      href={plan.featured ? "https://app.dialoguer.com.br/signup" : undefined}
                      to={plan.featured ? undefined : "/contato"}
                      target={plan.featured ? "_blank" : undefined}
                      rel={plan.featured ? "noopener noreferrer" : undefined}
                    >
                      {plan.buttonText}
                    </Button>
                  </PriceFooter>
                </PriceCard>
              </motion.div>
            ))}
          </Grid>
          
          <Flex 
            justify="center" 
            style={{ marginTop: "2rem" }}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Text size="sm" color="textLight" align="center">
              * Todos os preços são para pagamento mensal. Descontos disponíveis para planos anuais.
              <br />Necessidades específicas? <a href="/contato" style={{ color: '#00CC66', textDecoration: 'none' }}>Entre em contato</a> para um plano personalizado.
            </Text>
          </Flex>
        </Container>
      </Section>
      
      {/* Tabela Comparativa */}
      <Section bg="light" ref={comparisonRef}>
        <Container>
          <SectionTitle
            initial="hidden"
            animate={comparisonInView ? "visible" : "hidden"}
            variants={fadeIn}
            underline="center"
          >
            Compare os Recursos
          </SectionTitle>
          <SectionSubtitle
            initial="hidden"
            animate={comparisonInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            Detalhes completos de cada plano para ajudar você a fazer a escolha certa
          </SectionSubtitle>
          
          <motion.div
            initial="hidden"
            animate={comparisonInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <ComparisonTable>
              <table>
                <thead>
                  <tr>
                    <th>Recurso</th>
                    <th>Básico</th>
                    <th>Profissional</th>
                    <th>Empresarial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Números de WhatsApp</td>
                    <td>1</td>
                    <td>3</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Atendentes</td>
                    <td>Até 3</td>
                    <td>Até 10</td>
                    <td>Ilimitados</td>
                  </tr>
                  <tr>
                    <td>Chatbot com IA</td>
                    <td>Básico</td>
                    <td>Avançado</td>
                    <td>Personalizado</td>
                  </tr>
                  <tr>
                    <td>Integrações</td>
                    <td>3 pré-definidas</td>
                    <td>10 pré-definidas</td>
                    <td>Ilimitadas + API</td>
                  </tr>
                  <tr>
                    <td>Automação de Marketing</td>
                    <td><FaCheck className="minus" size={16} /></td>
                    <td><FaCheck className="check" size={16} /></td>
                    <td><FaCheck className="check" size={16} /></td>
                  </tr>
                  <tr>
                    <td>Relatórios Avançados</td>
                    <td><FaCheck className="minus" size={16} /></td>
                    <td><FaCheck className="check" size={16} /></td>
                    <td><FaCheck className="check" size={16} /></td>
                  </tr>
                  <tr>
                    <td>Suporte</td>
                    <td>Email</td>
                    <td>Prioritário</td>
                    <td>24/7 com SLA</td>
                  </tr>
                </tbody>
              </table>
            </ComparisonTable>
          </motion.div>
        </Container>
      </Section>
      
      {/* CTA */}
      <Section bg="primary" padding="80px 0" ref={faqRef}>
        <Container>
          <Flex 
            direction="column" 
            align="center" 
            style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Heading level={2} color="white" mb="1.5rem">
              Ainda com Dúvidas?
            </Heading>
            <Text size="xl" color="white" mb="2rem" style={{ opacity: 0.9 }}>
              Nossa equipe está pronta para ajudar você a escolher o plano perfeito para o seu negócio e responder qualquer pergunta.
            </Text>
            <Flex gap="1rem">
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
                Teste Grátis por 14 Dias
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                rounded 
                to="/contato"
              >
                Fale com um Consultor
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </>
  );
};

export default PricingPage;
