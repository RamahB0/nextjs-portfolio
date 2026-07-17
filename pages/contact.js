import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';

// Contact page with a simple controlled form.
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app you would POST to an API route here.
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact | Jane Doe</title>
      </Head>

      <section className={styles.contact}>
        <h1>Contact Me</h1>
        <p>Have a question or want to work together? Send me a message.</p>

        {submitted ? (
          <p className={styles.success}>Thanks! Your message has been sent.</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        )}

        <div className={styles.links}>
          <a href="mailto:jane@example.com">jane@example.com</a>
        </div>
      </section>
    </>
  );
}
