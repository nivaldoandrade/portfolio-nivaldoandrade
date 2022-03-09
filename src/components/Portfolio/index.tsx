import styles from './styles.module.scss';

import EurofileImg from '../../../public/images/site-eurofile.png';
import NanewsImg from '../../../public/images/site-na.news.png';
import Mc3Img from '../../../public/images/site-mc3.png';
import NaquizImg from '../../../public/images/site-naquiz.png';
import PerguntaAiImg from '../../../public/images/site-perguntaai.png';
import SamuelImg from '../../../public/images/site-samuel.png';

import { Project } from './Project';

export function Portfolio() {
  return (
    <section className={styles.portfolioContainer} id="portfolio">
      <span>Meu portfólio</span>
      <h1>Projetos</h1>
      <div className={styles.projects}>
        <Project
          title="Eurofile"
          image={EurofileImg}
          tech="REACTJS"
          link="https://www.eurofile.com.br/"
          subtitle="O site Eurofile é uma landing page construida com next.js para divulgação de serviços relacionado a gestão da informação, digitlização documentos, etc."
        />
        <Project
          title="Na.news"
          image={NanewsImg}
          tech="NEXT.JS"
          link="https://nanews-reactjs.vercel.app/"
          github="https://github.com/nivaldoandrade/nanews-reactjs"
          subtitle="O nanews é um blog por assinatura mensal utilizando o stripe como sistema de pagamento, prismic como CMS para criação dos posts e FaunaDB como banco de dados."
        />
        <Project
          title="NaQuiz"
          image={NaquizImg}
          tech="NEXT.JS"
          link="https://naquiz-nextjs.vercel.app/"
          github="https://github.com/nivaldoandrade/naquiz-nextjs"
          subtitle="O NaQuiz é uma aplicação de quiz, onde foi utilizado a API do opentdb para a busca das perguntas aleatoriamente e framework material-ui para criação da interface."
        />
        <Project
          title="Pergunta aí"
          image={PerguntaAiImg}
          tech="REACTJS"
          link="https://perguntaai-reactjs.vercel.app/"
          github="https://github.com/nivaldoandrade/perguntaai-reactjs"
          subtitle="O Pergunta aí é uma aplicação de criação de sala para realização de perguntas em tempo real. Foi utilizado o firebase Authentication(Google) e Realtime Database."
        />
        <Project
          title="Samuel Batista Braz Arquiteto e Urbanista"
          image={SamuelImg}
          tech="WORDPRESS"
          link="http://samuelbrazarquiteto.com.br/"
          subtitle="O site Samuel Braz Arquiteto e Urbanista é um site pessoal para divulgação de seus trabalhos e projetos. Meu 2º site criado utilizado o Wordpress como CMS."
        />
        <Project
          title="MC3 Tecnologia"
          image={Mc3Img}
          tech="WORDPRESS"
          link="https://www.mc3tecnologia.com.br/"
          subtitle="A MC3 estava precisando de um novo site, mesmo sem nenhuma experiência em criação de site, resolvi colocar a cara a tapa e criar um novo site para MC3 utilizando WordPress."
        />
      </div>
    </section>
  );
}
