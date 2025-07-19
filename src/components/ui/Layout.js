import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1240px) {
    max-width: 100%;
  }
`;

const Section = styled(motion.section)`
  padding: ${({ padding }) => padding || '80px 0'};
  background: ${({ bg, theme }) => 
    bg === 'dark' ? theme.colors.secondary :
    bg === 'light' ? theme.colors.background + 'f9' :
    bg === 'gradient' ? theme.colors.gradientGreen :
    theme.colors.background};
  color: ${({ bg, theme }) => 
    bg === 'dark' || bg === 'gradient' ? theme.colors.white : 
    theme.colors.text};
  position: relative;
  overflow: ${({ overflow }) => overflow || 'hidden'};

  @media (max-width: 768px) {
    padding: ${({ mobilePadding, padding }) => mobilePadding || 
      (padding ? padding : '60px 0')};
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  margin-bottom: ${({ spacing }) => spacing || '1rem'};
  text-align: ${({ align }) => align || 'center'};
  color: ${({ color, theme, bg }) => 
    color ? theme.colors[color] : 
    bg === 'dark' || bg === 'gradient' ? theme.colors.white : 
    theme.colors.secondary};
  position: relative;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }

  ${({ underline, theme }) => underline && `
    &:after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: ${theme.colors.primary};
      margin: ${underline === 'center' ? '1rem auto 0' : '1rem 0 0'};
      border-radius: ${theme.borderRadius.full};
    }
  `}
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.6;
  margin-bottom: ${({ spacing }) => spacing || '2.5rem'};
  text-align: ${({ align }) => align || 'center'};
  max-width: ${({ maxWidth }) => maxWidth || '700px'};
  margin-left: ${({ align }) => align === 'center' ? 'auto' : '0'};
  margin-right: ${({ align }) => align === 'center' ? 'auto' : '0'};
  color: ${({ color, theme, bg }) => 
    color ? theme.colors[color] : 
    bg === 'dark' ? theme.colors.white + 'cc' : 
    bg === 'gradient' ? theme.colors.white : 
    theme.colors.textLight};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: 2rem;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  grid-gap: ${({ gap }) => gap || '2rem'};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(${({ tabletColumns, columns }) => 
      tabletColumns || (columns > 2 ? 2 : columns)}, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: ${({ mobileGap, gap }) => mobileGap || gap || '2rem'};
  }
`;

const Flex = styled(motion.div)`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};

  @media (max-width: 768px) {
    flex-direction: ${({ mobileDirection, direction }) => 
      mobileDirection || (direction === 'row' ? 'column' : direction)};
    gap: ${({ mobileGap, gap }) => mobileGap || gap || '0'};
  }
`;

const Card = styled(motion.div)`
  background: ${({ bg, theme }) => 
    bg === 'dark' ? theme.colors.secondary : 
    bg === 'light' ? theme.colors.white : 
    bg ? theme.colors[bg] : 
    theme.colors.white};
  border-radius: ${({ theme, rounded }) => 
    rounded === 'sm' ? theme.borderRadius.sm :
    rounded === 'lg' ? theme.borderRadius.lg :
    rounded === 'xl' ? theme.borderRadius.xl :
    theme.borderRadius.md};
  padding: ${({ padding }) => padding || '2rem'};
  box-shadow: ${({ shadow, theme }) => 
    shadow === 'sm' ? theme.shadows.sm :
    shadow === 'lg' ? theme.shadows.lg :
    shadow === 'xl' ? theme.shadows.xl :
    shadow ? theme.shadows[shadow] :
    theme.shadows.md};
  border: ${({ border, theme }) => border ? `1px solid ${theme.colors.secondary}22` : 'none'};
  height: ${({ height }) => height || 'auto'};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: ${({ hover }) => hover === 'lift' ? 'translateY(-10px)' : 'none'};
    box-shadow: ${({ hover, theme }) => hover === 'lift' ? theme.shadows.xl : ''};
  }
`;

const Text = styled(motion.p)`
  font-size: ${({ size, theme }) => 
    size === 'xs' ? theme.fontSizes.xs :
    size === 'sm' ? theme.fontSizes.sm :
    size === 'lg' ? theme.fontSizes.lg :
    size === 'xl' ? theme.fontSizes.xl :
    theme.fontSizes.md};
  font-weight: ${({ weight }) => weight || 'normal'};
  color: ${({ color, theme }) => color ? theme.colors[color] : 'inherit'};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '1.6'};
  margin-bottom: ${({ mb }) => mb || '0'};
  margin-top: ${({ mt }) => mt || '0'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
`;

const Heading = styled(motion.h2)`
  font-size: ${({ level, theme }) => 
    level === 1 ? theme.fontSizes['5xl'] :
    level === 2 ? theme.fontSizes['4xl'] :
    level === 3 ? theme.fontSizes['3xl'] :
    level === 4 ? theme.fontSizes['2xl'] :
    level === 5 ? theme.fontSizes.xl :
    level === 6 ? theme.fontSizes.lg :
    theme.fontSizes['4xl']};
  font-weight: ${({ weight }) => weight || '700'};
  color: ${({ color, theme }) => color ? theme.colors[color] : theme.colors.secondary};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '1.3'};
  margin-bottom: ${({ mb }) => mb || '1rem'};
  margin-top: ${({ mt }) => mt || '0'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 'normal'};

  @media (max-width: 768px) {
    font-size: ${({ level, theme }) => 
      level === 1 ? theme.fontSizes['4xl'] :
      level === 2 ? theme.fontSizes['3xl'] :
      level === 3 ? theme.fontSizes['2xl'] :
      level === 4 ? theme.fontSizes.xl :
      level === 5 ? theme.fontSizes.lg :
      level === 6 ? theme.fontSizes.md :
      theme.fontSizes['3xl']};
  }
`;

export { 
  Container, 
  Section, 
  SectionTitle, 
  SectionSubtitle, 
  Grid, 
  Flex, 
  Card,
  Text,
  Heading
};
