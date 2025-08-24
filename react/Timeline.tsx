import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <EventMarker
          key={index}
          year={event.year}
          achievement={event.achievement}
          description={event.description}
          onClick={() => setSelectedEvent(event)}
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
