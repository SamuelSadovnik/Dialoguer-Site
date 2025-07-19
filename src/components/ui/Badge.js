import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BadgeContainer = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => 
    size === 'sm' ? '0.25rem 0.75rem' :
    size === 'lg' ? '0.5rem 1.25rem' :
    '0.35rem 1rem'};
  font-size: ${({ size, theme }) => 
    size === 'sm' ? theme.fontSizes.xs :
    size === 'lg' ? theme.fontSizes.md :
    theme.fontSizes.sm};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.primary + '22' :
    variant === 'secondary' ? theme.colors.secondary + '22' :
    variant === 'success' ? '#10B98122' :
    variant === 'info' ? '#0EA5E922' :
    variant === 'warning' ? '#F59E0B22' :
    variant === 'danger' ? '#EF444422' :
    variant === 'light' ? theme.colors.white + 'DD' :
    variant === 'dark' ? theme.colors.secondary + '22' :
    theme.colors.primary + '22'};
  color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.primary :
    variant === 'secondary' ? theme.colors.secondary :
    variant === 'success' ? '#10B981' :
    variant === 'info' ? '#0EA5E9' :
    variant === 'warning' ? '#F59E0B' :
    variant === 'danger' ? '#EF4444' :
    variant === 'light' ? theme.colors.secondary :
    variant === 'dark' ? theme.colors.secondary :
    theme.colors.primary};
  text-transform: ${({ transform }) => transform || 'uppercase'};
  letter-spacing: 0.05em;
  transition: ${({ theme }) => theme.transitions.default};
  gap: 0.35rem;
  
  svg {
    width: ${({ size }) => 
      size === 'sm' ? '0.75rem' :
      size === 'lg' ? '1.25rem' :
      '1rem'};
    height: ${({ size }) => 
      size === 'sm' ? '0.75rem' :
      size === 'lg' ? '1.25rem' :
      '1rem'};
  }
`;

const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  transform,
  icon,
  ...props 
}) => {
  return (
    <BadgeContainer
      variant={variant}
      size={size}
      transform={transform}
      {...props}
    >
      {icon && icon}
      {children}
    </BadgeContainer>
  );
};

export default Badge;
