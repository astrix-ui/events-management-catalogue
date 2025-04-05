import React, {useEffect} from "react";
import "./Events.css"; 
import { Link } from "react-router-dom";
import eventsData from "../data/eventsData"; // Import the events data

function Events() {

  useEffect(() => {
    document.title = "Our Events | CompanyName"; // Set the tab title here
  }, []);
  return (
    <div className="events-container">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <h2>{event.title}</h2>
            <p><strong>{event.date}</strong></p>
            <p>{event.description}</p>
            <Link to={`/events/${event.id}`}>
              <button id="read-more-btn">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
