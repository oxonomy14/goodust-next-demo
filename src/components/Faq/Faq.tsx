import Container from '../Container/Container';
import css from './Faq.module.css';

export default function Faq() {
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <p className={css.subTitle}>[ FAQ ]</p>
        <h2 className={css.title}>Frequently Asked Questions</h2>
        <p className={css.description}>
          Find answers to the most common questions about our cleaning services,
          booking process, pricing, and service guarantees.
        </p>
        <ul className={css.faqList}>
          <li className={css.faqItem}>
            <details>
              <summary>What cleaning services does Goodust provide?</summary>
              <p>
                We offer residential and commercial cleaning services including
                home, office, carpet, furniture, and window cleaning.
              </p>
            </details>
          </li>

          <li className={css.faqItem}>
            <details>
              <summary>Do I need to provide cleaning supplies?</summary>
              <p>
                No. Our team arrives fully equipped with professional cleaning
                products and tools.
              </p>
            </details>
          </li>

          <li className={css.faqItem}>
            <details>
              <summary>How can I book a cleaning service?</summary>
              <p>
                You can easily schedule a service through our website or by
                contacting our team.
              </p>
            </details>
          </li>

          <li className={css.faqItem}>
            <details>
              <summary>Are your products safe for children and pets?</summary>
              <p>
                Yes. We use safe and effective cleaning solutions whenever
                possible.
              </p>
            </details>
          </li>

          <li className={css.faqItem}>
            <details>
              <summary>Do you offer recurring cleaning plans?</summary>
              <p>
                Yes. Weekly, bi-weekly, and monthly cleaning plans are
                available.
              </p>
            </details>
          </li>

          <li className={css.faqItem}>
            <details>
              <summary>What if I'm not satisfied with the service?</summary>
              <p>Contact us and we'll work quickly to resolve any concerns.</p>
            </details>
          </li>
        </ul>
      </Container>
    </section>
  );
}
