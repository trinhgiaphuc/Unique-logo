import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
