import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

// Reusable card that displays a single project: image, title,
// description, tags and a link to the source/live demo.
export default function ProjectCard({ project }) {
  const { title, description, image, link, tags } = project;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project &rarr;
        </a>
      </div>
    </article>
  );
}
