import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Importação da fonte Montserrat do Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: 'Montserrat', 'Gotham', 'Poppins', sans-serif;
    scroll-behavior: smooth;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat', 'Gotham', 'Poppins', sans-serif;
    border: none;
  }

  ul, ol {
    list-style: none;
  }

  section {
    padding: 80px 0;

    @media (max-width: 768px) {
      padding: 60px 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 1240px) {
      max-width: 100%;
    }
  }
`;
