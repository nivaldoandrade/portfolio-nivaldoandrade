import { BiMailSend } from 'react-icons/bi';
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { Card } from './Card';

import styles from './styles.module.scss';

export function Contact() {
  return (
    <section className={styles.contactContainer}>
      <span>Get in touch</span>
      <h1>Contact Me</h1>
      <div className={styles.contactContent}>
        <div className={styles.talkToMeContent}>
          <h2>Talk to me</h2>
          <Card
            title="Email"
            subtitle="user@gmail.com"
            icon={BiMailSend}
            link="#"
          />
          <Card
            title="Whatsapp"
            subtitle="999-888-777"
            icon={FaWhatsapp}
            link="#"
          />
          <Card
            title="Message"
            subtitle="user.fb123"
            icon={FaFacebookMessenger}
            link="#"
          />
        </div>
        <div className={styles.formContent}>
          <h2>Send me a message</h2>
          <form>
            <div className={styles.input}>
              <label htmlFor="name">Names</label>
              <input type="text" placeholder="Insert your name" id="name" />
            </div>
            <div className={styles.input}>
              <label htmlFor="email">Mail</label>
              <input type="text" placeholder="Insert your email" id="email" />
            </div>
            <div className={styles.input}>
              <label htmlFor="project">Project</label>
              <textarea placeholder="White your project" id="project" />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
