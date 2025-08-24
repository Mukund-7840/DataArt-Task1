import React, { useEffect, useState, useRef } from "react";
import EventMarker from "./EventMarker";
import EventModal from "./EventModal";
import eventsData from "../data/events.json";

interface Event {
  year: number;
  achievement: string;
  description: string;
  link: string;
}

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      const next = (index + 1) % events.length;
      setActiveIndex(next);
      markerRefs.current[next]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      const prev = (index - 1 + events.length) % events.length;
      setActiveIndex(prev);
      markerRefs.current[prev]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      setSelectedEvent(events[index]);
    }
  };

  return (
    <div className="timeline" role="list">
      {events.map((event, idx) => (
        <EventMarker
          key={idx}
          year={event.year}
          achievement={event.achievement}
          description={event.description}
          isActive={idx === activeIndex}
          onClick={() => setSelectedEvent(event)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        />
      ))}

      {selectedEvent && (
        <EventModal
          year={selectedEvent.year}
          achievement={selectedEvent.achievement}
          description={selectedEvent.description}
          link={selectedEvent.link}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Timeline;
