import styles from './styles.module.scss';

import work1Img from '../../../public/images/work1.jpg';
import work2Img from '../../../public/images/work2.jpg';

import { Project } from './Project';

export function Portfolio() {
  return (
    <section className={styles.portfolioContainer}>
      <span>My portfolio</span>
      <h1>Recent Works</h1>
      <div className={styles.projects}>
        <Project title="Web Design" image={work1Img} />
        <Project title="Web Design" image={work2Img} />
        <Project title="Web Design" image={work1Img} />
        <Project title="Web Design" image={work2Img} />
      </div>
    </section>
  );
}
