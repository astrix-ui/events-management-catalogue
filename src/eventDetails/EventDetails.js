import React from "react";
import { useParams, Link } from "react-router-dom";
import "./EventDetails.css"; 
import Gallery from "../Gallery/Gallery";
import eventsData from "../data/eventsData"; // Import the events data

function EventDetails() {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(id));

  if (!event) {
    return <h2>Event not found!</h2>;
  }

  return (
    <div className="event-details-container">
      <h1>{event.title}</h1>
      <img src={event.image} alt={event.title} className="event-details-image" />
      <p>{event.details}</p>
      <Link to="/events/">
        <button className="back-button">Back to Events</button>
      </Link>
      <Gallery images={event.images} />
    </div>
  );
}

export default EventDetails;
