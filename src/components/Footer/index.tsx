import { useMemo } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IconType } from 'react-icons';

import { FooterComponentProps } from '../../types/prismic';

import styles from './styles.module.scss';
import { SocialMediaItem } from './SocialMediaItem/indesx';

const socialMediaProps = {
  Linkedin: BsLinkedin,
  Github: BsGithub,
};

interface FooterProps {
  data: FooterComponentProps;
}

export function Footer({ data }: FooterProps) {
  const socialMediaFormatted = useMemo(() => {
    return data.socialmedia.map(social => ({
      ...social,
      icon: socialMediaProps[social.name] as IconType,
    }));
  }, [data.socialmedia]);

  return (
    <div className={styles.footerContainer}>
      <strong>{data.title}</strong>
      <span>{data.subtitle}</span>
      <div className={styles.socialMediaContent}>
        {socialMediaFormatted.map(social => (
          <SocialMediaItem
            key={social.name}
            name={social.name}
            link={social.link}
            icon={social.icon}
          />
        ))}
      </div>
    </div>
  );
}
