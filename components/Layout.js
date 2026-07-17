import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

// Shared layout wrapper: renders the Navbar on top, page content in the
// middle, and a footer at the bottom for every page.
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Jane Doe. Built with Next.js.</p>
      </footer>
    </div>
  );
}
