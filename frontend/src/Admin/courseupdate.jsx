import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import axios from "axios";

function CourseUpdate() {
  let Navigate=  useNavigate()
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
    coursePrice: "",
    thumbnail: null,
    thumbnailPreview: "" // Add thumbnailPreview field
  });

  useEffect(() => {
    axios.get(`/api/courseupdate/${id}`)
      .then(response => {
        setCourse(response.data.apidata);
        setFormData({
          courseName: response.data.apidata.courseName,
          courseDescription: response.data.apidata.courseDescription,
          coursePrice: response.data.apidata.coursePrice,
          thumbnail: response.data.apidata.thumbnail, // Set thumbnail to existing thumbnail
          thumbnailPreview: response.data.apidata.thumbnail ? `/src/assets/${response.data.apidata.thumbnail}` : "" // Set thumbnailPreview to existing thumbnail
        });
      })
      .catch(error => {
        console.error("Error fetching course details:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === "thumbnail") {
      // Handle image upload separately
      setFormData({
        ...formData,
        thumbnail: e.target.files[0], 
        thumbnailPreview: URL.createObjectURL(e.target.files[0]) 
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
    // Send updated course data to the server using axios
    const updatedCourseData = new FormData();
    updatedCourseData.append("courseName", formData.courseName);
    updatedCourseData.append("courseDescription", formData.courseDescription);
    updatedCourseData.append("coursePrice", formData.coursePrice);
    updatedCourseData.append("thumbnail", formData.thumbnail);

    axios.put(`/api/courseupdate/${id}`, updatedCourseData)
      .then(response => {
        console.log(response.data);
        alert(response.data.message); 
        Navigate("/digitalcourse");
      });
    //   .catch(error => {
    //     console.error("Error updating course:", error);
    //     // Handle error, e.g., display error message to the user
    //   });
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="text-center mb-4">Update Course</h2>
        {course ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="courseName" className="form-label">Course Name</label>
              <input type="text" className="form-control" name="courseName" value={formData.courseName} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="courseDescription" className="form-label">Course Description</label>
              <textarea className="form-control" name="courseDescription" value={formData.courseDescription} onChange={handleChange}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="coursePrice" className="form-label">Course Price</label>
              <input type="number" className="form-control" name="coursePrice" value={formData.coursePrice} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="thumbnail" className="form-label">Course Thumbnail</label>
              <input type="file" className="form-control" name="thumbnail" onChange={handleChange} />
              {formData.thumbnailPreview && (
                <div className="mt-2">
                  <img src={formData.thumbnailPreview} alt="Thumbnail Preview" className="img-thumbnail" style={{ maxWidth: "150px" }} />
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">Update Course</button>
            <Link to={`/course/${id}`} className="btn btn-secondary ms-2">Cancel</Link>
          </form>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </>
  );
}

export default CourseUpdate;
