import { useState } from "react";
import Menu from "./menu";
import Header from "../Header";
import axios from "axios";

function Add() {
  const [servicetype, setServicetype] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");

  const handleProductTypeChange = (e) => {
    setServicetype(e.target.value);
  };

  const handleAddProduct = () => {
    console.log("Adding product:", {
      productName,
      productPrice,
      productDescription,
      productThumbnail,
      eventName,
      eventDescription,
      eventStartDate,
    });
   

    if (servicetype === "course") {
      const productdata = new FormData();
      productdata.append("servicetype", servicetype);
      productdata.append("productName", productName);
      productdata.append("productPrice", productPrice);
      productdata.append("productThumbnail", productThumbnail);
      productdata.append("productDescription", productDescription);
      axios.post("/api/productadd", productdata).then((res) => {
        console.log(res)
        alert(res.data.message);
      });
    } else if (servicetype === "event") {
      const eventData = new FormData();
      eventData.append("servicetype", servicetype);
      eventData.append("eventName", eventName);
      eventData.append("eventDescription", eventDescription);
      eventData.append("eventStartDate", eventStartDate);
      eventData.append("productThumbnail", productThumbnail);

      axios.post("/api/productadd", eventData).then((res) => {
        console.log(res)
        alert(res.data.message);
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* Menu */}
          <div className="col-md-3">
            <Menu />
          </div>
          {/* Content */}
          <div className="col-md-9">
            <h2>Add product </h2>
            {/* Select Product Type */}
            <div className="mb-3">
              <label htmlFor="servicetype" className="form-label">
                Select Product Type
              </label>
              <select
                className="form-select"
                value={servicetype}
                onChange={handleProductTypeChange}
              >
                <option value="">Select Product Type</option>
                <option value="course">Digital Course</option>
                <option value="event">Event Registration</option>
              </select>
            </div>
            {/* Add Product Form */}
            {servicetype === "course" && (
              <>
                <h3>Add New Digital Course</h3>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Course Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="productThumbnail" className="form-label">
                    Course Thumbnail Image (URL)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setProductThumbnail(e.target.files[0])}
                  />
                </div>
                <button
                  className="btn btn-primary form-control"
                  onClick={handleAddProduct}
                >
                  Add Product
                </button>
              </>
            )}
            {servicetype === "event" && (
              <>
                <h3>Register for Event</h3>
                <div className="mb-3">
                  <label htmlFor="eventName" className="form-label">
                    Event Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="eventDescription" className="form-label">
                    Event Description
                  </label>
                  <textarea
                    className="form-control"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="eventStartDate" className="form-label">
                    Event Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={eventStartDate}
                    onChange={(e) => setEventStartDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productThumbnail" className="form-label">
                    Event Thumbnail Image (URL)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setProductThumbnail(e.target.files[0])}
                  />
                </div>
                <button
                  className="btn btn-primary form-control"
                  onClick={handleAddProduct}
                >
                  Add Product
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
