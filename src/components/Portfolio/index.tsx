import styles from './styles.module.scss';

import { Project } from './Project';
import { ProjectProps } from '../../types/prismic';

interface PortfolioProps {
  data: ProjectProps[];
}

export function Portfolio({ data }: PortfolioProps) {
  return (
    <section className={styles.portfolioContainer} id="portfolio">
      <span>Meu portfólio</span>
      <h1>Projetos</h1>
      <div className={styles.projects}>
        {data.map(project => (
          <Project
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
            tech={project.tech}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
