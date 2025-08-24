import React from "react";

interface EventModalProps {
  year: number;
  achievement: string;
  description: string;
  link: string;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ year, achievement, description, link, onClose }) => {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span id="closeModal" onClick={onClose}>&times;</span>
        <h2>{year}</h2>
        <h3>{achievement}</h3>
        <p>{description}</p>
        <a href={link} style={{ color: "#0856CC" }}>Read More</a>
      </div>
    </div>
  );
};

export default EventModal;
