import  { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Contextapi } from "../App";

function Userprofile() {
  const { email: currentEmail, name: currentName, setEmail, setName } = useContext(Contextapi);
  const [newEmail, setNewEmail] = useState(currentEmail); // Initialize with current email
  const [newName, setNewName] = useState(currentName); // Initialize with current name
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
    axios.get(`/api/userprofile/${currentEmail}`)
      .then((res) => {
        console.log(res);
        const { email, name } = res.data;
        setNewEmail(email);
        setNewName(name);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/updateprofile', { email: currentEmail, newEmail, name: newName, password })
      .then((res) => {
        console.log(res);
        const { email } = res.data;
        // Update the context with the new email received from the server
        setEmail(email);
        // const { name } = res.data;
        // setName(name);
        alert("Profile updated successfully");
        // Show a success message to the user
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        setError("Error updating profile. Please try again."); // Set error state if there's an error
      });
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container py-4">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="newEmail" className="form-label">New Email Address</label>
          <input
            type="email"
            className="form-control"
            id="newEmail"
            value={newEmail}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newName" className="form-label">New Name</label>
          <input
            type="text"
            className="form-control"
            id="newName"
            value={newName}
            onChange={handleNameChange}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Current Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message if there's an error */}
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
}

export default Userprofile;
