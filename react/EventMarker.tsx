import React, { useRef } from "react";

interface EventMarkerProps {
  year: number;
  achievement: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({
  year,
  achievement,
  description,
  isActive,
  onClick,
  onKeyDown,
}) => {
  const markerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={markerRef}
      className="block"
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-current={isActive ? "true" : undefined}
      aria-label={`Event ${year}: ${achievement}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <h2 className="year">{year}</h2>
      <h2 className="achievement">{achievement}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default EventMarker;
