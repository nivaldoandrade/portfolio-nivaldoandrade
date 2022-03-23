import Image from 'next/image';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import { IntoComponentProps } from '../../types/prismic';

import meImg from '../../../public/images/me.png';
import reactImg from '../../../public/images/react.svg';
import javascriptImg from '../../../public/images/javascript.svg';
import htmlImg from '../../../public/images/html.svg';
import cssImg from '../../../public/images/css3.svg';

import styles from './styles.module.scss';
import { CardTech } from './CardTech';

interface IntoProps {
  data: IntoComponentProps;
}

export function Into({ data }: IntoProps) {
  return (
    <section className={styles.intoContainer} id="into">
      <motion.div
        className={styles.info}
        initial={{ opacity: 0 }}
        animate={{ y: ['-30px', '30px', '0px'], opacity: 1 }}
        transition={{
          type: 'tween',
          ease: 'easeInOut',
          duration: 1,
        }}
      >
        <strong>{data.hi_iam}</strong>
        <h1>{data.name}</h1>
        <span>{data.career}</span>
        <div>
          <a href={data.cv_pdf} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
          <Link href="about" to="about" smooth offset={50}>
            Sobre mim
          </Link>
        </div>
      </motion.div>
      <div className={styles.imgContainer}>
        {data.techs.map(tech => (
          <CardTech
            key={tech.name}
            name={tech.name}
            position={tech.position}
            imgUrl={tech.imgUrl}
          />
        ))}
        <motion.div
          className={styles.imgContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 1,
            delay: 0.3,
          }}
        >
          <Image
            src={data.avatar_url}
            layout="fill"
            alt={`Avatar 3D do ${data.name}`}
            objectFit="cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
