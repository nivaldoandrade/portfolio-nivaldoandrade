import { useMemo } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IconType } from 'react-icons';

import { Card } from './Card';
import { SkillItem } from './SkillItem';

import { AboutComponentProps } from '../../types/prismic';

import styles from './styles.module.scss';

interface AboutProps {
  data: AboutComponentProps;
}

const cardIcon = {
  LinkedIn: BsLinkedin,
  GitHub: BsGithub,
};

export function About({ data }: AboutProps) {
  const cardsFormatted = useMemo(() => {
    return data.cards.map(card => ({
      ...card,
      icon: cardIcon[card.name] as IconType,
    }));
  }, [data.cards]);

  return (
    <section className={styles.aboutContainer} id="about">
      <span>Breve resumo</span>
      <h1>Sobre Mim</h1>
      <div className={styles.aboutContent}>
        <div className={styles.infoContainer}>
          <div className={styles.cards}>
            {cardsFormatted.map(card => (
              <Card
                key={card.name}
                title={card.name}
                icon={card.icon}
                href={card.link}
              />
            ))}
          </div>
          <div className={styles.info}>
            <p>{data.text}</p>
            <strong>{data.slogan}</strong>
          </div>
        </div>
        <div className={styles.skillContainer}>
          {data.skills.map(skill => (
            <SkillItem
              key={skill.title}
              title={skill.title}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
