import { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "./menu";
import axios from "axios";
import { Link } from "react-router-dom";

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/event")
      .then(response => {
        console.log(response)
        setEvents(response.data.apidata);

      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });
  }, []);
  const handleDelete = (eventid) => {
    // alert("Delete event:", eventid);
    console.log(eventid)
    axios.delete(`/api/eventdelete/${eventid}`).then((res)=>{
        // console.log(res)
        alert(res.data.message)
        setEvents(prevEvents => prevEvents.filter(events => events._id !== eventid));
    }).catch(error => {
        alert("Error deleting event detail:", error);
    });
  };
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h2>Tech Events</h2>
            <div className="row">
              {events.map((event) => (
                <div key={event._id} className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      src={`/src/assets/${event.thumbnail}`}
                      className="card-img-top"
                      alt={event.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{event.eventName}</h5>
                      <p className="card-text">{event.eventDescription}</p>
                      
                      <Link to={`/eventdetail/${event._id}`}>
                        <button className="btn btn-primary">
                          More Details
                        </button>
                      </Link>
                     <Link to={`/eventupdate/${event._id}`}> <button
                        className="btn btn-warning mx-2"
                     >
                        Update
                      </button>
                      </Link>
                      
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(event._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
