import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StyledButton = styled(motion.button)`
  padding: ${({ size }) => 
    size === 'sm' ? '0.5rem 1rem' : 
    size === 'lg' ? '1rem 2rem' : 
    '0.75rem 1.5rem'};
  font-size: ${({ size, theme }) => 
    size === 'sm' ? theme.fontSizes.sm : 
    size === 'lg' ? theme.fontSizes.lg : 
    theme.fontSizes.md};
  font-weight: 500;
  border-radius: ${({ rounded, theme }) => 
    rounded ? theme.borderRadius.full : theme.borderRadius.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  text-decoration: none;
  line-height: 1.5;
  white-space: nowrap;

  /* Variants */
  background: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.gradientGreen :
    variant === 'secondary' ? theme.colors.secondary :
    variant === 'outline' ? 'transparent' :
    variant === 'ghost' ? 'transparent' :
    theme.colors.primary};

  color: ${({ variant, theme }) =>
    variant === 'outline' || variant === 'ghost' ? theme.colors.primary :
    theme.colors.white};

  border: ${({ variant, theme }) =>
    variant === 'outline' ? `2px solid ${theme.colors.primary}` :
    'none'};

  &:hover {
    transform: ${({ variant }) => 
      variant === 'ghost' ? 'none' : 'translateY(-3px)'};
    box-shadow: ${({ variant, theme }) => 
      variant === 'ghost' ? 'none' : theme.shadows.md};
    background: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.primary :
      variant === 'secondary' ? theme.colors.accent :
      variant === 'outline' ? theme.colors.primary :
      variant === 'ghost' ? theme.colors.primary + '11' :
      theme.colors.primaryDark};
    color: ${({ variant, theme }) =>
      variant === 'outline' ? theme.colors.white :
      variant === 'ghost' ? theme.colors.primary :
      theme.colors.white};
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: ${({ variant, theme }) => 
      variant === 'ghost' ? 'none' : theme.shadows.sm};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const StyledLinkButton = StyledButton.withComponent(Link);
const StyledAnchorButton = StyledButton.withComponent('a');

// Animation variants
const buttonVariants = {
  initial: { y: 0 },
  hover: { y: -3 },
  tap: { y: -1 },
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  rounded = false,
  to, 
  href, 
  disabled,
  animate = true,
  onClick,
  type = 'button',
  ...props 
}) => {
  if (to) {
    return (
      <StyledLinkButton 
        to={to}
        variant={variant}
        size={size}
        rounded={rounded}
        disabled={disabled}
        whileHover={animate ? "hover" : undefined}
        whileTap={animate ? "tap" : undefined}
        variants={animate ? buttonVariants : undefined}
        {...props}
      >
        {children}
      </StyledLinkButton>
    );
  }

  if (href) {
    return (
      <StyledAnchorButton 
        href={href}
        variant={variant}
        size={size}
        rounded={rounded}
        disabled={disabled}
        whileHover={animate ? "hover" : undefined}
        whileTap={animate ? "tap" : undefined}
        variants={animate ? buttonVariants : undefined}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </StyledAnchorButton>
    );
  }

  return (
    <StyledButton 
      variant={variant}
      size={size}
      rounded={rounded}
      disabled={disabled}
      onClick={onClick}
      whileHover={animate ? "hover" : undefined}
      whileTap={animate ? "tap" : undefined}
      variants={animate ? buttonVariants : undefined}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
