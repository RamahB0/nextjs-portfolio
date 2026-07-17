import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// Home page. This is the landing/hero section of the portfolio.
export default function Home() {
  return (
    <>
      <Head>
        <title>Jane Doe | Portfolio</title>
      </Head>

      <section className={styles.hero}>
        {/* Profile picture rendered with the optimized next/image component */}
        <Image
          className={styles.avatar}
          src="/images/profile.jpg"
          alt="Profile picture"
          width={160}
          height={160}
          priority
        />
        <h1 className={styles.title}>Hi, I&apos;m Jane Doe</h1>
        <p className={styles.subtitle}>
          Front-end developer specializing in React &amp; Next.js.
        </p>
        <div className={styles.cta}>
          <Link href="/projects" className={styles.button}>
            View My Work
          </Link>
          <Link href="/contact" className={styles.buttonOutline}>
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
