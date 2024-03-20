import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import axios from "axios";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`/api/coursedetail/${id}`)
      .then(response => {
        console.log(response)
        setCourse(response.data.apidata); 
      })
      .catch(error => {
        console.error("Error fetching course details:", error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-center mb-4">Course Details</h2>
        {course ? (
          <div className="row">
            <div className="col-md-4 mb-3">
              {/* Render course thumbnail here */}
              <img src={`/src/assets/${course.thumbnail}`} alt={course.courseName} className="img-fluid rounded" />
            </div>
            <div className="col-md-8">
                <h2 className="text-center">Course Name</h2>
              <p>{course.courseName}</p>
              <h3 className="text-center">Course Description</h3>
              <p>{course.courseDescription}</p>
              {/* Add more course details as needed */}
              <h2>Price: $ {course.coursePrice}</h2>
              <Link to="/digitalcourse" className="btn btn-primary"> <button className="btn btn-primary" >Go Back</button></Link>
            </div>
          </div>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </>
  );
}

export default CourseDetail;
