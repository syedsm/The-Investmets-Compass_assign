import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleform = (e) => {
  e.preventDefault()
  const data = { name, email, password }; 

  axios.post("/api/reg", data)
      .then((res) => {
          alert(res.data.message); 
      })
      .catch((error) => {
          if (error.response) {
              alert(error.response.data.message); 
          } else if (error.request) {
              console.error("No response received:", error.request);
          } else {
              console.error("Error:", error.message);
          }
      });
};

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Sign Up</h2>
          <form
            onSubmit={(e) => {
              handleform(e);
            }}
          >
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-3 text-center">
            Already have an account? <Link to="/">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
