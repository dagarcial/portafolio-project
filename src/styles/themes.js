export const theme = {
  colors: {
    primary: '#3A6D9C',     // Blue (used for text and borders)
    secondary: '#A9B0B8',   // Light grey (used in hexagons)
    accent: '#1F2A44',      // Deep navy/black lines
    background: '#FFFFFF',  // White
    text: '#101020',        // Dark text
    link: '#3A6D9C'         // Same as primary
  },
  fonts: {
    family: {
      default: "'Segoe UI', sans-serif", // Default font family
    },
    style: {
      normal: 'normal',
      italic: 'italic',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  spacing: {
    tiny: '0.125rem',// 2px if root font size is 16px
    xs:   '0.25rem', // 4px if root font size is 16px
    sm:   '0.5rem',  // 8px if root font size is 16px
    md:   '0.75rem', // 12px if root font size is 16px
    base: '1rem',    // 16px if root font size is 16px
    ml:   '1.25rem', // 20px if root font size is 16px
    lg:   '1.5rem',  // 24px if root font size is 16px
    xl:   '2rem',    // 32px if root font size is 16px
    xxl:  '4rem',    // 64px if root font size is 16px
    xxxl: '8rem',    // 128px if root font size is 16px
  },
  breakpoints: {
    small: '480px',       // Small screens (e.g., mobile)
    medium: '768px',      // Medium screens (e.g., tablets)
    large: '1024px',      // Large screens (e.g., desktops)
    extraLarge: '1280px', // Extra large screens (e.g., large desktops)
  },
  borderRadius: '12px',
  shadows: {
    bottom: '0px 10px 10px 0px rgba(9, 5, 29, 0.171)',
    box: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
  }
};
// Add default export
export default theme;