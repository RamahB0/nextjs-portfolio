import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

// Projects page. Uses getStaticProps so the project list is built at
// build time (Static Site Generation) for fast loads.
export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects | Jane Doe</title>
      </Head>

      <section className={styles.projects}>
        <h1>My Projects</h1>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

// Static generation: data is baked in at build time.
export async function getStaticProps() {
  const projects = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'A responsive weather app consuming a public REST API.',
      image: '/images/project-weather.jpg',
      link: 'https://github.com/',
      tags: ['React', 'API', 'CSS'],
    },
    {
      id: 2,
      title: 'E-commerce Store',
      description: 'A Next.js storefront with cart and checkout flow.',
      image: '/images/project-store.jpg',
      link: 'https://github.com/',
      tags: ['Next.js', 'Stripe', 'SSR'],
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'A drag-and-drop kanban board for organizing tasks.',
      image: '/images/project-tasks.jpg',
      link: 'https://github.com/',
      tags: ['React', 'DnD', 'LocalStorage'],
    },
  ];

  return { props: { projects } };
}
