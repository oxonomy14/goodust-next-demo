import Container from '../Container/Container';
import css from './Terms.module.css';

export default function Terms() {
  return (
    <>
      <section className={css.hero}>
        <Container>
          <h1>Terms of Use</h1>
          <p>
            Terms and conditions governing the use of Goodust cleaning services.
          </p>
        </Container>
      </section>

      <section className={css.content}>
        <Container>
          <h2>Acceptance of Terms</h2>
          <p>By accessing and using our website...</p>

          <h2>Services</h2>
          <p>
            Goodust provides residential and commercial cleaning services...
          </p>

          <h2>Payments</h2>
          <p>Payment is due upon completion of services...</p>
        </Container>
      </section>
    </>
  );
}
