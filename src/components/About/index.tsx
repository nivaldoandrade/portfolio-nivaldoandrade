import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { Card } from './Card';
import { SkillItem } from './SkillItem';

import styles from './styles.module.scss';

export function About() {
  return (
    <section className={styles.aboutContainer} id="about">
      <h1>Sobre Mim</h1>
      <div className={styles.aboutContent}>
        <div className={styles.infoContainer}>
          <div className={styles.cards}>
            <Card title="LinkedIn" icon={BsLinkedin} />
            <Card title="GitHub" icon={BsGithub} />
          </div>
          <div className={styles.info}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={styles.skillContainer}>
          <SkillItem title="HTML" percentage={85} />
          <SkillItem title="CSS" percentage={85} />
          <SkillItem title="JAVASCRIPT" percentage={85} />
          <SkillItem title="REACTJS" percentage={80} />
          <SkillItem title="REACT NATIVE" percentage={70} />
          <SkillItem title="NODE.JS" percentage={60} />
        </div>
      </div>
    </section>
  );
}
