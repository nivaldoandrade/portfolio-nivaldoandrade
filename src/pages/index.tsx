import { GetStaticProps } from 'next';
import PrismicDom from 'prismic-dom';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Into } from '../components/Into';
import { NavBar } from '../components/NavBar';
import { Portfolio } from '../components/Portfolio';
import { client } from '../services/prismic';

import { IntoComponentProps, AboutComponentProps } from '../types/prismic';

import styles from '../styles/Home.module.scss';

interface HomeProps {
  intoComponent: IntoComponentProps;
  aboutComponent: AboutComponentProps;
}

export default function Home({ intoComponent, aboutComponent }: HomeProps) {
  return (
    <>
      <NavBar />
      <main className={styles.mainContainer}>
        <Into data={intoComponent} />
        <About data={aboutComponent} />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: dataInto } = await client.getSingle('section_into', {
    fetch: [
      'section_into.hi_iam',
      'section_into.name',
      'section_into.career',
      'section_into.avatar',
      'section_into.cv_pdf',
      'section_into.techs',
    ],
  });

  const { data: dataAbout } = await client.getSingle('section_about', {
    fetch: [
      'section_about.text',
      'section_about.slogan',
      'section_about.cards_socialmedia',
      'section_about.skills',
    ],
  });

  const intoComponent = {
    hi_iam: PrismicDom.RichText.asText(dataInto.hi_iam),
    name: PrismicDom.RichText.asText(dataInto.name),
    career: PrismicDom.RichText.asText(dataInto.career),
    avatar_url: dataInto.avatar.url,
    cv_pdf: dataInto.cv_pdf.url,
    techs: dataInto.techs.map(tech => ({
      name: PrismicDom.RichText.asText(tech.tech_name),
      imgUrl: tech.tech_logo.url,
      position: tech.position_select_tech,
    })),
  };

  const aboutComponent = {
    text: PrismicDom.RichText.asText(dataAbout.text),
    slogan: PrismicDom.RichText.asText(dataAbout.slogan),
    cards: dataAbout.cards_socialmedia.map(card => ({
      name: card.card_name,
      link: card.card_link.url,
    })),
    skills: dataAbout.skills.map(skill => ({
      title: PrismicDom.RichText.asText(skill.skill_title),
      percentage: skill.skill_percentage,
    })),
  };

  return {
    props: {
      intoComponent,
      aboutComponent,
    },
  };
};

// const getInto = await client.getByType('section_into', {
//   fetch: [
//     'data.hi_iam',
//     'data.name',
//     'data.career',
//     'data.avatar',
//     'data.cv_pdf',
//   ],
// });

// const intoComponent = getInto.results.map(item => ({
//   hi_iam: PrismicDom.RichText.asText(item.data.hi_iam),
//   name: PrismicDom.RichText.asText(item.data.name),
//   career: PrismicDom.RichText.asText(item.data.career),
//   avatar_url: item.data.avatar.url,
//   cv_pdf: item.data.cv_pdf.url,
//   techs: item.data.techs.map(tech => ({
//     name: PrismicDom.RichText.asText(tech.tech_name),
//     imgUrl: tech.tech_logo.url,
//     position: tech.position_select_tech,
//   })),
// }))[0];
