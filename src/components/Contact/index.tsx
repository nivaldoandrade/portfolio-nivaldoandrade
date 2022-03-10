import { FormEvent, useCallback, useState } from 'react';
import emailjs from 'emailjs-com';
import { BiMailSend } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

import { Card } from './Card';

import styles from './styles.module.scss';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState({ title: '' });

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const data = {
        name,
        email,
        message,
      };

      setFormSubmitted({ title: 'Enviando...' });
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
          data,
          process.env.NEXT_PUBLIC_EMAILJS_USERID,
        )
        .then(({ status }) => {
          if (status === 200) {
            setName('');
            setEmail('');
            setMessage('');
            setFormSubmitted({ title: 'Enviado' });
          } else {
            setFormSubmitted({ title: '' });
          }
        });
    },
    [name, email, message, setFormSubmitted],
  );

  setTimeout(() => {
    if (formSubmitted.title === 'Enviado') {
      setFormSubmitted({ title: '' });
    }
  }, 4000);

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
          <form onSubmit={handleSubmit}>
            <div className={styles.input}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                placeholder="Insira seu nome"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Insira seu email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="project">Mensagem</label>
              <textarea
                placeholder="Escreva sua mensagem"
                id="project"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">
              {formSubmitted.title === 'Enviando...'
                ? formSubmitted.title
                : 'Enviar Mensagem'}
            </button>
            {formSubmitted.title === 'Enviado' && (
              <p>Mensagem enviado com sucesso!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
