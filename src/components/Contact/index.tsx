import { FormEvent, useCallback, useMemo, useState } from 'react';
import emailjs from 'emailjs-com';
import { BiMailSend } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

import { Card } from './Card';

import { ContactComponentProps } from '../../types/prismic';

import styles from './styles.module.scss';

const cardProps = {
  icon: {
    LinkedIn: BsLinkedin,
    WhatsApp: FaWhatsapp,
    Email: BiMailSend,
  },
  link: {
    Email: 'mailto:',
    WhatsApp: 'https://wa.me/',
  },
};

interface ContactProps {
  data: ContactComponentProps;
}

export function Contact({ data: cards }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState({ title: '' });

  const cardsFormatted = useMemo(() => {
    return cards.map(card => ({
      ...card,
      icon: cardProps.icon[card.title] ?? '',
      link: cardProps.link[card.title]
        ? `${cardProps.link[card.title]}${card.link}`
        : card.link,
    }));
  }, [cards]);

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
          {cardsFormatted.map(card => (
            <Card
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              link={card.link}
            />
          ))}
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
