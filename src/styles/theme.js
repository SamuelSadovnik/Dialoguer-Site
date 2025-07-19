export const theme = {
  colors: {
    primary: '#25D366',     // Verde WhatsApp: Pantone 354C (#25D366)
    primaryDark: '#1DA851', // Verde escuro
    primaryLight: '#4DDB8C', // Verde claro
    secondary: '#373A36',   // Cinza escuro: Pantone 447C (#373A36)
    background: '#FFFFFF',  // Fundo branco
    text: '#333333',        // Texto quase preto
    textLight: '#666666',   // Texto cinza
    accent: '#1A2238',      // Azul escuro para acentos
    white: '#FFFFFF',       // Branco puro
    gradientGreen: 'linear-gradient(135deg, #25D366 0%, #4DDB8C 100%)',
    gradientBlue: 'linear-gradient(135deg, #1A2238 0%, #2D3A5A 100%)',
    transparent: 'transparent'
  },
  fonts: {
    body: "'Montserrat', 'Gotham', 'Poppins', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    md: '1rem',        // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  borderRadius: {
    sm: '0.25rem',     // 4px
    md: '0.5rem',      // 8px
    lg: '1rem',        // 16px
    xl: '1.5rem',      // 24px
    '2xl': '2rem',     // 32px
    full: '9999px',    // Circle
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
    toast: 1700,
  }
};
