import { GetStaticProps } from 'next';
import PrismicDom from 'prismic-dom';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Into } from '../components/Into';
import { NavBar } from '../components/NavBar';
import { Portfolio } from '../components/Portfolio';
import { client } from '../services/prismic';

import {
  IntoComponentProps,
  AboutComponentProps,
  PortfolioComponentProps,
  ContactComponentProps,
  FooterComponentProps,
} from '../types/prismic';

import styles from '../styles/Home.module.scss';

interface HomeProps {
  intoComponent: IntoComponentProps;
  aboutComponent: AboutComponentProps;
  portfolioComponent: PortfolioComponentProps;
  contactComponent: ContactComponentProps;
  footerComponent: FooterComponentProps;
}

export default function Home({
  intoComponent,
  aboutComponent,
  portfolioComponent,
  contactComponent,
  footerComponent,
}: HomeProps) {
  return (
    <>
      <NavBar />
      <main className={styles.mainContainer}>
        <Into data={intoComponent} />
        <About data={aboutComponent} />
        <Portfolio data={portfolioComponent} />
        <Contact data={contactComponent} />
      </main>
      <Footer data={footerComponent} />
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

  const getPortfolio = await client.getAllByType('portfolio', {
    orderings: ['document.first_publication_date desc'],
  });

  const { data: dataContact } = await client.getSingle('section_contact');

  const { data: dataFooter } = await client.getSingle('section_footer');

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

  const portfolioComponent = getPortfolio.map(project => ({
    title: PrismicDom.RichText.asText(project.data.title),
    subtitle: PrismicDom.RichText.asText(project.data.subtitle),
    image: project.data.image.url,
    tech: PrismicDom.RichText.asText(project.data.tech),
    link: project.data.link_demo.url,
    github: project.data.link_github.url ?? '',
  }));

  const contactComponent = dataContact.cards.map(card => ({
    title: PrismicDom.RichText.asText(card.title),
    subtitle: PrismicDom.RichText.asText(card.subtitle),
    link: PrismicDom.RichText.asText(card.link),
  }));

  const footerComponent = {
    title: PrismicDom.RichText.asText(dataFooter.title),
    subtitle: PrismicDom.RichText.asText(dataFooter.subtitle),
    socialmedia: dataFooter.socialmedia.map(item => ({
      name: PrismicDom.RichText.asText(item.name),
      link: item.link.url,
    })),
  };

  return {
    props: {
      intoComponent,
      aboutComponent,
      portfolioComponent,
      contactComponent,
      footerComponent,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
