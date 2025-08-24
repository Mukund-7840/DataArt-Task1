import React from "react";

interface EventMarkerProps {
  year: number;
  achievement: string;
  description: string;
  onClick: () => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({ year, achievement, description, onClick }) => {
  return (
    <div className="block">
      <h2 className="year">{year}</h2>
      <h2 className="achievement">{achievement}</h2>
      <p className="description">{description}</p>
      <button className="next" onClick={onClick}>{">"}</button>
    </div>
  );
};

export default EventMarker;
