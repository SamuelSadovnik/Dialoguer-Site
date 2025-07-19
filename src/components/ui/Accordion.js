import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  margin-bottom: ${({ spacing }) => spacing || '1rem'};
  background: ${({ theme, variant }) => 
    variant === 'filled' ? theme.colors.white : 
    variant === 'outlined' ? 'transparent' : 
    'transparent'};
  border: ${({ theme, variant }) => 
    variant === 'outlined' ? `1px solid ${theme.colors.secondary}22` : 
    variant === 'underlined' ? 'none' :
    'none'};
  box-shadow: ${({ theme, variant }) => 
    variant === 'filled' ? theme.shadows.sm : 'none'};
`;

const AccordionHeader = styled.button`
  width: 100%;
  background: ${({ theme, variant, isOpen }) => 
    variant === 'filled' ? (isOpen ? theme.colors.primary + '11' : theme.colors.white) : 
    variant === 'outlined' ? 'transparent' : 
    variant === 'underlined' ? 'transparent' : 
    'transparent'};
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: none;
  border-bottom: ${({ theme, variant, isOpen }) => 
    variant === 'underlined' ? `1px solid ${isOpen ? theme.colors.primary : theme.colors.secondary + '22'}` : 
    variant === 'outlined' && isOpen ? `1px solid ${theme.colors.secondary}22` : 
    'none'};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background: ${({ theme, variant }) => 
      variant === 'filled' ? theme.colors.primary + '11' : 
      variant === 'outlined' || variant === 'underlined' ? theme.colors.secondary + '11' : 
      'transparent'};
  }
`;

const AccordionTitle = styled.h3`
  font-size: ${({ theme, size }) => 
    size === 'sm' ? theme.fontSizes.md : 
    size === 'lg' ? theme.fontSizes.xl : 
    theme.fontSizes.lg};
  font-weight: 500;
  color: ${({ theme, isOpen }) => isOpen ? theme.colors.primary : theme.colors.secondary};
  margin: 0;
  text-align: left;
  transition: ${({ theme }) => theme.transitions.default};
`;

const IconWrapper = styled(motion.div)`
  color: ${({ theme, isOpen }) => isOpen ? theme.colors.primary : theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccordionContent = styled(motion.div)`
  overflow: hidden;
  background: ${({ theme, variant }) => 
    variant === 'filled' ? theme.colors.white : 
    'transparent'};
  
  .content-inner {
    padding: ${({ variant }) => 
      variant === 'underlined' ? '1rem 0' : 
      '1rem 1.5rem'};
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ theme, size }) => 
      size === 'sm' ? theme.fontSizes.sm : 
      size === 'lg' ? theme.fontSizes.lg : 
      theme.fontSizes.md};
    line-height: 1.6;
  }
`;

const Accordion = ({ 
  title, 
  children, 
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
  variant = 'underlined', 
  size = 'md',
  spacing,
  ...props 
}) => {
  const [isOpenState, setIsOpenState] = useState(false);
  
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : isOpenState;
  const onToggle = controlledOnToggle || (() => setIsOpenState(!isOpenState));

  return (
    <AccordionContainer variant={variant} spacing={spacing} {...props}>
      <AccordionHeader 
        onClick={onToggle} 
        variant={variant} 
        isOpen={isOpen}
        type="button"
      >
        <AccordionTitle isOpen={isOpen} size={size}>{title}</AccordionTitle>
        <IconWrapper isOpen={isOpen}>
          {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
        </IconWrapper>
      </AccordionHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <AccordionContent
            variant={variant}
            size={size}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="content-inner">{children}</div>
          </AccordionContent>
        )}
      </AnimatePresence>
    </AccordionContainer>
  );
};

export default Accordion;
