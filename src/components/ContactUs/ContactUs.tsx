import css from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <>
      <p className={css.subTitle}>LET'S CONNECT</p>
      <h2 className={css.title}>We'd love to hear from you</h2>
      <p className={css.description}>
        We'd love to hear from you. Whether you need a one-time cleaning,
        recurring service, or simply have a question, our team is ready to
        assist you.
      </p>

      <ul className={css.contactList}>
        <li className={css.contactItem}>
          <div className={css.contactWrapper}>
            <div className={css.wrapperIcon}>
              <svg className={css.phoneIcon}>
                <use href={`/icons/sprite.svg#icon-phone`} />
              </svg>
            </div>
            <div>
              <h3 className={css.contactTitle}>Call Center</h3>
              <p className={css.contactDescription}>+1 (234) 567-8910</p>
            </div>
          </div>
        </li>
        <li className={css.contactItem}>
          <div className={css.contactWrapper}>
            <div className={css.wrapperIcon}>
              <svg className={css.emailIcon}>
                <use href={`/icons/sprite.svg#icon-email`} />
              </svg>
            </div>
            <div>
              <h3 className={css.contactTitle}>Email Support</h3>
              <p className={css.contactDescription}>hello@goodust.demo</p>
            </div>
          </div>
        </li>
        <li className={css.contactItem}>
          <div className={css.contactWrapper}>
            <div className={css.wrapperIcon}>
              <svg className={css.chatIcon}>
                <use href={`/icons/sprite.svg#icon-chat`} />
              </svg>
            </div>
            <div>
              <p className={css.contactTitle}>Chat Us</p>
              <p className={css.contactDescription}>+1 (234) 567-8912</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
