import { GetStaticProps } from 'next';
import PrismicDom from 'prismic-dom';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Into } from '../components/Into';
import { NavBar } from '../components/NavBar';
import { Portfolio } from '../components/Portfolio';
import { client } from '../services/prismic';

import { IntoComponentProps } from '../types/prismic';

import styles from '../styles/Home.module.scss';

interface HomeProps {
  intoComponent: IntoComponentProps;
}

export default function Home({ intoComponent }: HomeProps) {
  return (
    <>
      <NavBar />
      <main className={styles.mainContainer}>
        <Into data={intoComponent} />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const getInto = await client.getByType('section_into', {
    fetch: [
      'data.hi_iam',
      'data.name',
      'data.career',
      'data.avatar',
      'data.cv_pdf',
    ],
  });

  const intoComponent = getInto.results.map(item => ({
    hi_iam: PrismicDom.RichText.asText(item.data.hi_iam),
    name: PrismicDom.RichText.asText(item.data.name),
    career: PrismicDom.RichText.asText(item.data.career),
    avatar_url: item.data.avatar.url,
    cv_pdf: item.data.cv_pdf.url,
    techs: item.data.techs.map(tech => ({
      name: PrismicDom.RichText.asText(tech.tech_name),
      imgUrl: tech.tech_logo.url,
      position: tech.position_select_tech,
    })),
  }))[0];

  return {
    props: {
      intoComponent,
    },
  };
};
