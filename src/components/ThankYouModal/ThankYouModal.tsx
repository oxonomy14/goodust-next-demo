import css from './ThankYouModal.module.css';

type ThankYouModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) return null;
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 className={css.modalTitle}>Thank You!</h2>

        <p className={css.modalText}>
          Your appointment request has been successfully submitted. Our team
          will contact you shortly.
        </p>

        <button className={css.modalButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
