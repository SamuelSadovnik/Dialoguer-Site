import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { 
  Container, 
  Section, 
  SectionTitle, 
  SectionSubtitle, 
  Flex,
  Heading,
  Text
} from '../components/ui/Layout';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Accordion from '../components/ui/Accordion';

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
const FAQBanner = styled(Section)`
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

const FAQTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FAQTab = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.secondary};
  border: 1px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.border};
  
  &:hover {
    background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.border};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
`;

const FAQGroup = styled.div`
  margin-bottom: 3rem;
`;

const FAQPage = () => {
  // State para controlar a categoria ativa
  const [activeCategory, setActiveCategory] = React.useState('geral');
  
  // Hooks para animação baseada no scroll
  const [bannerRef, bannerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Perguntas agrupadas por categoria
  const faqs = {
    geral: [
      {
        question: "O que é o DIALOGUER?",
        answer: "DIALOGUER é uma plataforma completa para automação de atendimento pelo WhatsApp. Permite criar chatbots inteligentes, gerenciar conversas com clientes, automatizar marketing e integrar com seus sistemas atuais, tudo para otimizar o relacionamento com seus clientes."
      },
      {
        question: "Quais são as principais funcionalidades do DIALOGUER?",
        answer: "As principais funcionalidades incluem: chatbot inteligente com IA, automação de atendimento, métricas e relatórios avançados, gestão de equipe, automação de marketing, multi-dispositivo e multi-WhatsApp, integrações com outros sistemas e muito mais."
      },
      {
        question: "Para quais tipos de negócio o DIALOGUER é indicado?",
        answer: "O DIALOGUER é indicado para todos os tipos de negócios que utilizam o WhatsApp como canal de comunicação com clientes. Desde pequenas empresas até grandes corporações em diversos setores como comércio, serviços, saúde, educação, finanças e muitos outros."
      },
      {
        question: "Como o DIALOGUER se diferencia de outras soluções de WhatsApp Business?",
        answer: "O DIALOGUER se destaca pela potência de sua IA proprietária, pela flexibilidade de integração com diferentes sistemas, pela facilidade de uso e pela qualidade do suporte técnico. Nossa solução é completa e não requer conhecimentos técnicos para operação."
      }
    ],
    planos: [
      {
        question: "Quais são os planos disponíveis?",
        answer: "Oferecemos três planos principais: Básico, Profissional e Empresarial, cada um com diferentes recursos e limites para atender desde pequenos negócios até grandes empresas. Também temos opções de planos personalizados para necessidades específicas."
      },
      {
        question: "Posso mudar de plano depois?",
        answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações de plano entram em vigor imediatamente para upgrades e no próximo ciclo de cobrança para downgrades."
      },
      {
        question: "O que acontece após o período de teste gratuito?",
        answer: "Após o período de teste gratuito de 14 dias, você pode escolher um dos nossos planos pagos para continuar usando o DIALOGUER. Não há cobrança automática, então você decide se quer continuar ou não."
      },
      {
        question: "Existe alguma taxa de configuração ou custos ocultos?",
        answer: "Não, não há taxas de configuração ou custos ocultos. O valor do plano é o único valor que você pagará. Todas as funcionalidades incluídas no seu plano são disponibilizadas sem custos adicionais."
      }
    ],
    tecnico: [
      {
        question: "Preciso instalar algum software para usar o DIALOGUER?",
        answer: "Não, o DIALOGUER é uma plataforma 100% baseada em nuvem (SaaS). Você acessa através de qualquer navegador moderno, sem necessidade de instalação. Basta se cadastrar e começar a usar."
      },
      {
        question: "Como é feita a integração com o WhatsApp?",
        answer: "A integração é feita através da API oficial do WhatsApp Business, garantindo total conformidade com os termos de uso do WhatsApp. O processo é simples e guiado dentro da plataforma, levando apenas alguns minutos."
      },
      {
        question: "O DIALOGUER é compatível com quais sistemas?",
        answer: "O DIALOGUER oferece integrações prontas com diversos sistemas como CRMs, e-commerce, ERPs e plataformas de marketing. Também disponibilizamos uma API robusta para criar integrações personalizadas com praticamente qualquer sistema."
      },
      {
        question: "Os dados das conversas ficam armazenados por quanto tempo?",
        answer: "Todas as conversas ficam armazenadas por pelo menos 12 meses em nossos servidores seguros. Para planos empresariais, oferecemos opções de armazenamento estendido de até 5 anos."
      }
    ],
    seguranca: [
      {
        question: "Como o DIALOGUER garante a segurança dos dados?",
        answer: "Utilizamos criptografia de ponta a ponta para todas as conversas, servidores com certificação ISO 27001, backups regulares e outras medidas de segurança para proteger os dados dos nossos clientes. Todos os dados são armazenados em servidores no Brasil."
      },
      {
        question: "O DIALOGUER está em conformidade com a LGPD?",
        answer: "Sim, o DIALOGUER está totalmente em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o GDPR europeu. Implementamos todos os requisitos e boas práticas para garantir a proteção dos dados pessoais."
      },
      {
        question: "Como funciona o controle de acesso à plataforma?",
        answer: "O DIALOGUER oferece um sistema robusto de perfis e permissões, permitindo definir exatamente o que cada membro da equipe pode ver e fazer na plataforma. Também utilizamos autenticação em dois fatores para maior segurança."
      },
      {
        question: "Existe um contrato de nível de serviço (SLA)?",
        answer: "Sim, para todos os planos oferecemos SLA com garantia de uptime de 99,9%. Para planos empresariais, oferecemos SLAs personalizados com níveis de suporte prioritário e tempo de resposta garantido."
      }
    ]
  };

  return (
    <>
      {/* Banner */}
      <FAQBanner ref={bannerRef}>
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
                FAQ
              </Badge>
              <Heading level={1} color="white" mb="1.5rem">
                Perguntas Frequentes
              </Heading>
              <Text size="xl" color="white" mb="2rem" style={{ opacity: 0.9 }}>
                Encontre respostas para as perguntas mais comuns sobre o DIALOGUER e nossos serviços.
              </Text>
            </motion.div>
          </Flex>
        </Container>
      </FAQBanner>

      {/* FAQs */}
      <Section ref={faqRef} style={{ paddingTop: "4rem" }}>
        <Container>
          {/* Tabs */}
          <motion.div
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <FAQTabs>
              <FAQTab 
                active={activeCategory === 'geral'} 
                onClick={() => setActiveCategory('geral')}
              >
                Geral
              </FAQTab>
              <FAQTab 
                active={activeCategory === 'planos'} 
                onClick={() => setActiveCategory('planos')}
              >
                Planos e Preços
              </FAQTab>
              <FAQTab 
                active={activeCategory === 'tecnico'} 
                onClick={() => setActiveCategory('tecnico')}
              >
                Questões Técnicas
              </FAQTab>
              <FAQTab 
                active={activeCategory === 'seguranca'} 
                onClick={() => setActiveCategory('seguranca')}
              >
                Segurança e Conformidade
              </FAQTab>
            </FAQTabs>
          </motion.div>
          
          {/* FAQ Items */}
          <motion.div
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <FAQGroup>
              {faqs[activeCategory].map((faq, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Accordion title={faq.question} content={faq.answer} />
                </motion.div>
              ))}
            </FAQGroup>
          </motion.div>
          
          {/* Ainda com Dúvidas? */}
          <motion.div
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={fadeIn}
            style={{ textAlign: "center", maxWidth: "700px", margin: "2rem auto 0" }}
          >
            <Heading level={3} mb="1rem">
              Ainda tem dúvidas?
            </Heading>
            <Text mb="2rem">
              Se você não encontrou o que procurava, nossa equipe de suporte está pronta para ajudar. Entre em contato conosco.
            </Text>
            <Flex justify="center" gap="1rem">
              <Button variant="outline" to="/contato">
                Entre em Contato
              </Button>
              <Button 
                variant="primary" 
                as="a"
                href="https://app.dialoguer.com.br/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma Demonstração
              </Button>
            </Flex>
          </motion.div>
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

export default FAQPage;
