'use client';
import css from './CTA.module.css';
import Container from '../Container/Container';

export default function CTA() {
  return (
    <section className={css.sectionContent}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.content}>
            <h2 className={css.title}>Ready for a Spotless Space?</h2>
            <p className={css.description}>
              Whether you need regular home cleaning, deep cleaning, or
              professional office cleaning, Goodust is ready to help. Let our
              experienced team create a cleaner, healthier environment for your
              family, employees, or customers.
            </p>
            <button
              className={css.btn}
              onClick={() => alert('Open Modal Form')}
            >
              Book a Cleaning
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
