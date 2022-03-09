import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { Card } from './Card';
import { SkillItem } from './SkillItem';

import styles from './styles.module.scss';

export function About() {
  return (
    <section className={styles.aboutContainer} id="about">
      <span>Breve resumo</span>
      <h1>Sobre Mim</h1>
      <div className={styles.aboutContent}>
        <div className={styles.infoContainer}>
          <div className={styles.cards}>
            <Card
              title="LinkedIn"
              icon={BsLinkedin}
              href="https://www.linkedin.com/in/nivaldo-andrade/"
            />
            <Card
              title="GitHub"
              icon={BsGithub}
              href="https://github.com/nivaldoandrade"
            />
          </div>
          <div className={styles.info}>
            <p>
              Sou Nivaldo Andrade, entusiasta por desenvolvimento front end e
              mobile orientado por resultados, totalmente comprometido em criar
              aplicações inovadores e funcionais.
            </p>
            <strong>
              Um pequeno aprendiz nesse grande mundo da programação!!
            </strong>
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
