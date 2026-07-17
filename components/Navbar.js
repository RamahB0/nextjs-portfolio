import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

// Navigation bar with links to each page (file-based routes).
// The active link is highlighted using the current router path.
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Jane Doe
      </Link>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                router.pathname === link.href ? styles.active : styles.link
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
