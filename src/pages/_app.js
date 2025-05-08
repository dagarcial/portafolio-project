import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/themes';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
