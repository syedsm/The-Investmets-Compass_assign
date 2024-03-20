import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import axios from "axios";

function Eventdetail() {
  const { id } = useParams();
  const [event, setEvents] = useState(null);

  useEffect(() => {
    axios.get(`/api/eventdetail/${id}`)
      .then(response => {
        console.log(response)
        setEvents(response.data.apidata); 
      })
      .catch(error => {
        console.error("Error fetching course details:", error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-center mb-4">Event Details</h2>
        {event ? (
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src={`/src/assets/${event.thumbnail}`} alt={event.courseName} className="img-fluid rounded" />
            </div>
            <div className="col-md-8">
                <h2 className="text-center">Event Name</h2>
              <p>{event.courseName}</p>
              <h3 className="text-center">Event Description</h3>
              <p>{event.courseDescription}</p>
              
              <Link to="/events" className="btn btn-primary"> <button className="btn btn-primary" >Go Back</button></Link>
            </div>
          </div>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </>
  );
}

export default Eventdetail;
