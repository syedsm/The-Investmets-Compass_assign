import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import axios from "axios";

function EventUpdate() {
  let Navigate=  useNavigate()
  const { id } = useParams();
  const [event, setEvents] = useState(null);
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventStartDate:"",
    thumbnail: null,
    thumbnailPreview: "" // Add thumbnailPreview field
  });

  useEffect(() => {
    axios.get(`/api/eventupdate/${id}`)
      .then(response => {
        console.log(response)
        setEvents(response.data.apidata);
        setFormData({
          eventName: response.data.apidata.eventName,
          eventDescription: response.data.apidata.eventDescription,
          eventStartDate:response.data.apidata.eventStartDate,
          thumbnail: response.data.apidata.thumbnail, 
          thumbnailPreview: response.data.apidata.thumbnail ? `/src/assets/${response.data.apidata.thumbnail}` : "" // Set thumbnailPreview to existing thumbnail
        });
      })
      .catch(error => {
        console.error("Error fetching Event details:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === "thumbnail") {
      // Handle image upload separately
      setFormData({
        ...formData,
        thumbnail: e.target.files[0], // Update thumbnail field with the uploaded file
        thumbnailPreview: URL.createObjectURL(e.target.files[0]) // Update thumbnailPreview to show a preview of the uploaded image
      });
    } else {
      // For other fields, update the formData state as usual
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated Event data to the server using axios
    const updatedEventData = new FormData();
    updatedEventData.append("eventName", formData.eventName);
    updatedEventData.append("eventDescription", formData.eventDescription);
   
    updatedEventData.append("thumbnail", formData.thumbnail);
    updatedEventData.append("eventStartDate", formData.eventStartDate);

    axios.put(`/api/eventupdate/${id}`, updatedEventData)
      .then(response => {
        console.log(response.data);
        alert(response.data.message); 
        Navigate("/events");
      });
    //   .catch(error => {
    //     console.error("Error updating Event:", error);
    //     // Handle error, e.g., display error message to the user
    //   });
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-center mb-4">Update Event</h2>
        {event ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="eventName" className="form-label">Event Name</label>
              <input type="text" className="form-control" name="eventName" value={formData.eventName} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="eventDescription" className="form-label">Event Description</label>
              <textarea className="form-control" name="eventDescription" value={formData.eventDescription} onChange={handleChange}></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="EventPrice" className="form-label">Event Start Date</label>
              <input type="date" className="form-control" name="EventPrice" value={formData.eventStartDate} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="thumbnail" className="form-label">Event Thumbnail</label>
              <input type="file" className="form-control" name="thumbnail" onChange={handleChange} />
              {formData.thumbnailPreview && (
                <div className="mt-2">
                  <img src={formData.thumbnailPreview} alt="Thumbnail Preview" className="img-thumbnail" style={{ maxWidth: "150px" }} />
                </div>
              )}
            </div>
            <button type="submit" onClick={()=>handleSubmit(event._id)} className="btn btn-primary">Update Event</button>
            <Link to='/Event' className="btn btn-secondary ms-2">Cancel</Link>
          </form>
        ) : (
          <p>Loading Event details...</p>
        )}
      </div>
    </>
  );
}

export default EventUpdate;
