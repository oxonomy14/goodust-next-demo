import css from './Hero.module.css';
import Container from '../Container/Container';

export default function Hero() {
  return (
    <div className={css.hero}>
      <Container>
        <h1 className={css.title}>Welcome to the Hero Section</h1>
        <p className={css.subtitle}>This is a simple hero section component.</p>
      </Container>
    </div>
  );
}
