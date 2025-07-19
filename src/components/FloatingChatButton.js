import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatingButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: ${({ theme }) => theme.zIndices.tooltip};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ChatWindow = styled(motion.div)`
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 350px;
  height: 450px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: ${({ theme }) => theme.zIndices.tooltip};
  display: flex;
  flex-direction: column;
  
  @media (max-width: 480px) {
    width: calc(100% - 60px);
    height: 400px;
  }
`;

const ChatHeader = styled.div`
  background: ${({ theme }) => theme.colors.gradientGreen};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ChatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.div`
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.white}dd;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.5;
  
  &.bot {
    align-self: flex-start;
    background: ${({ theme }) => theme.colors.secondary}11;
    color: ${({ theme }) => theme.colors.text};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.sm};
  }
  
  &.user {
    align-self: flex-end;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

const ChatInput = styled.form`
  display: flex;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary}22;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary}33;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.md};
  outline: none;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientGreen};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const buttonVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  },
  tap: { scale: 0.95 }
};

const windowVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 50,
    originY: 1,
    originX: 1
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

const FloatingChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: 'Olá! Bem-vindo ao DIALOGUER. Como posso ajudar você hoje?' }
  ]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { sender: 'user', text: message }]);
    setMessage('');
    
    // Simulate bot response after a delay
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        { 
          sender: 'bot', 
          text: 'Obrigado pela sua mensagem! Um de nossos consultores entrará em contato em breve. Você também pode nos contatar pelo telefone (11) 4002-8922.' 
        }
      ]);
    }, 1000);
  };

  return (
    <>
      <FloatingButton
        onClick={toggleChat}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      >
        {isChatOpen ? <FaTimes size={24} color="white" /> : <FaWhatsapp size={28} color="white" />}
      </FloatingButton>
      
      <AnimatePresence>
        {isChatOpen && (
          <ChatWindow
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ChatHeader>
              <HeaderInfo>
                <ChatIcon>
                  <FaWhatsapp size={20} color="#00CC66" />
                </ChatIcon>
                <HeaderText>
                  <h4>DIALOGUER Chat</h4>
                  <p>Atendimento Online</p>
                </HeaderText>
              </HeaderInfo>
              <CloseButton onClick={toggleChat}>
                <FaTimes />
              </CloseButton>
            </ChatHeader>
            
            <ChatMessages>
              {chatHistory.map((msg, index) => (
                <Message key={index} className={msg.sender}>
                  {msg.text}
                </Message>
              ))}
            </ChatMessages>
            
            <ChatInput onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <SendButton type="submit" disabled={!message.trim()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </SendButton>
            </ChatInput>
          </ChatWindow>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatButton;
