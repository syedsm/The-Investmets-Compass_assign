import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
 const Naviagte=useNavigate()
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  function handleform(e) {
    e.preventDefault();
    const data = {
      email: formdata.email,
      password: formdata.password,
    };

    axios.post("/api/login", data)
      .then((res) => {
        console.log(res)
        alert(res.data.message);
        if(res.data.data.email==="Admin@gmail.com"){
          localStorage.setItem('email',res.data.data.email)
          Naviagte('/productadd')
        }else{
          localStorage.setItem('email',res.data.data.email)
          Navigate('/productpage')
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Sign In</h2>
          <form onSubmit={handleform}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formdata.email}
                onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={formdata.password}
                onChange={(e) => setFormdata({ ...formdata, password: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100">Sign In</button>
            </div>
          </form>
          <p className="mt-3 text-center">Dont have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
