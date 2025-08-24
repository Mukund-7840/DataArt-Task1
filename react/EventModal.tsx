import React, { useEffect, useRef } from "react";

interface EventModalProps {
  year: number;
  achievement: string;
  description: string;
  link: string;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({
  year,
  achievement,
  description,
  link,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    // Save focus
    const prevFocused = document.activeElement as HTMLElement;

    // Focus first focusable element inside modal
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) focusable[0].focus();

    // Trap focus inside modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      prevFocused?.focus(); // return focus
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      id="modal"
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDesc"
    >
      <div className="modal-content">
        <button
          id="closeModal"
          aria-label="Close dialog"
          onClick={onClose}
          autoFocus
        >
          &times;
        </button>
        <h2 id="modalTitle">{year}</h2>
        <h3>{achievement}</h3>
        <p id="modalDesc">{description}</p>
        <a href={link} style={{ color: "#4EA1F3" }}>Read More</a>
      </div>
    </div>
  );
};

export default EventModal;
