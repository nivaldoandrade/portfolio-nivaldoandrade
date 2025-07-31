import { useMemo } from 'react';
import { IconType } from 'react-icons';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import { Card } from './Card';

import { AboutComponentProps } from '../../types/prismic';

import { HardSkills } from './HardSkills';
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
        <HardSkills skills={data.hardSkills} />
      </div>
    </section>
  );
}
