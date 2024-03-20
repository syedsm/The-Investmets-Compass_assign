import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./menu";
import { Link } from "react-router-dom";
import Header from "../Header";

function DigitalCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data from API
    axios
      .get("/api/courses")
      .then((response) => {
        console.log(response);
        setCourses(response.data.apidata);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const handleDelete = (courseid) => {
    // console.log("Delete course:", courseid);
    axios.delete(`/api/coursedelete/${courseid}`).then((res)=>{
        // console.log(res)
        alert(res.data.message)
        setCourses(prevCourses => prevCourses.filter(course => course._id !== courseid));
    }).catch(error => {
        alert("Error deleting course:", error);
    });
  };


  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          {/* Menu */}
          <div className="col-md-3">
            <Menu />
          </div>
          {/* Content */}
          <div className="col-md-9">
            <h2>Digital Courses</h2>
            <div className="row">
              {/* Display each course in card format */}
              {courses.map((course) => (
                <div key={course._id} className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      src={`/src/assets/${course.thumbnail}`}
                      className="card-img-top"
                      alt={course.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.courseName}</h5>
                      <p className="card-text">{course.courseDescription}</p>
                      <p className="card-text">Price: ${course.coursePrice}</p>
                      <Link to={`/coursedetail/${course._id}`}>
                        <button className="btn btn-primary">
                          More Details
                        </button>
                      </Link>
                     <Link to={`/courseupdate/${course._id}`}> <button
                        className="btn btn-warning mx-2"
                     >
                        Update
                      </button>
                      </Link>
                      
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(course._id)}
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

export default DigitalCourses;
