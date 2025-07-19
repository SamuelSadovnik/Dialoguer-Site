import React from 'react';
import { logoSvg, logoWhiteSvg } from './logos';

// Função para criar uma imagem SVG a partir de string SVG
const createSVGImage = (svgString, alt) => {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
};

// Logo principal
const logo = createSVGImage(logoSvg, 'DIALOGUER Logo');

// Logo branco para fundos escuros
const logoWhite = createSVGImage(logoWhiteSvg, 'DIALOGUER Logo White');

// Imagens de destaque
const heroImage = 'https://via.placeholder.com/600x600/121827/00CC66?text=DIALOGUER+Chatbot';

// Imagens de recursos
const feature1 = 'https://via.placeholder.com/800x600/f8f9fa/00CC66?text=Automação+Inteligente';
const feature2 = 'https://via.placeholder.com/800x600/f8f9fa/00CC66?text=Gestão+de+Equipes';
const feature3 = 'https://via.placeholder.com/800x600/f8f9fa/00CC66?text=Análises+e+Insights';

// Avatares para depoimentos
const avatar1 = 'https://via.placeholder.com/100/00CC66/ffffff?text=User+1';
const avatar2 = 'https://via.placeholder.com/100/00CC66/ffffff?text=User+2';
const avatar3 = 'https://via.placeholder.com/100/00CC66/ffffff?text=User+3';

// Logos de empresas
const logo1 = 'https://via.placeholder.com/150x50/ffffff/222222?text=Company+1';
const logo2 = 'https://via.placeholder.com/150x50/ffffff/222222?text=Company+2';
const logo3 = 'https://via.placeholder.com/150x50/ffffff/222222?text=Company+3';
const logo4 = 'https://via.placeholder.com/150x50/ffffff/222222?text=Company+4';

export {
  logo,
  logoWhite,
  heroImage,
  feature1,
  feature2,
  feature3,
  avatar1,
  avatar2,
  avatar3,
  logo1,
  logo2,
  logo3,
  logo4
};
