import Head from 'next/head';
import styles from '../styles/About.module.css';

// About page. Demonstrates Server-Side Rendering via getServerSideProps:
// the skills list is "fetched" on the server for each request.
export default function About({ skills, renderedAt }) {
  return (
    <>
      <Head>
        <title>About | Jane Doe</title>
      </Head>

      <section className={styles.about}>
        <h1>About Me</h1>
        <p>
          I&apos;m a front-end developer with a passion for building fast,
          accessible web applications. I enjoy turning complex problems into
          simple, elegant interfaces.
        </p>

        <h2>Skills</h2>
        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        {/* Timestamp proves the page was rendered on the server per request */}
        <p className={styles.timestamp}>Page rendered at: {renderedAt}</p>
      </section>
    </>
  );
}

// Server-Side Rendering: runs on every request on the server.
export async function getServerSideProps() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'CSS / Sass',
    'Git',
  ];

  return {
    props: {
      skills,
      renderedAt: new Date().toISOString(),
    },
  };
}
