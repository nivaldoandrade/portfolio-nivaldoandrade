import { BiMailSend } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

import { Card } from './Card';

import styles from './styles.module.scss';

export function Contact() {
  return (
    <section className={styles.contactContainer} id="contact">
      <span>Entre em</span>
      <h1>Contato</h1>
      <div className={styles.contactContent}>
        <div className={styles.talkToMeContent}>
          <h2>Diga Olá</h2>
          <Card
            title="Email"
            subtitle="nivaldoandradef@gmail.com"
            icon={BiMailSend}
            link="mailto:nivaldoandradef@gmail.com"
          />
          <Card
            title="Whatsapp"
            subtitle="+55 11 98478 4784"
            icon={FaWhatsapp}
            link="tel:+5511984784284"
          />
          <Card
            title="LinkedIn"
            subtitle="nivaldo-andrade"
            icon={BsLinkedin}
            link="https://www.linkedin.com/in/nivaldo-andrade/"
          />
        </div>
        <div className={styles.formContent}>
          <h2>Fale Comigo</h2>
          <form>
            <div className={styles.input}>
              <label htmlFor="name">Nome</label>
              <input type="text" placeholder="Insira seu nome" id="name" />
            </div>
            <div className={styles.input}>
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Insira seu email" id="email" />
            </div>
            <div className={styles.input}>
              <label htmlFor="project">Mensagem</label>
              <textarea placeholder="Escreva sua mensagem" id="project" />
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}
