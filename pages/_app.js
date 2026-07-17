import '../styles/globals.css';
import Layout from '../components/Layout';

// Custom App component. Next.js uses this to initialize every page.
// Wrapping pages in <Layout> gives them a shared Navbar and footer.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
