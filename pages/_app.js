import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';
import ScrollProvider from '../lib/scrollContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default MyApp;
