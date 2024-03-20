import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu bg-light border rounded p-3">
      <h5 className="mb-3">Menu</h5>
      <ul className="list-group">
        <Link to={"/productadd"}style={{ textDecoration: "none" }}>
          
          <li className="list-group-item">Add Services</li>
        </Link>
        <Link to={"/digitalcourse"} style={{ textDecoration: "none" }}>
          
          <li className="list-group-item">Courses</li>
        </Link>
        <Link to={"/events"} style={{ textDecoration: "none" }}>
          
          <li className="list-group-item">Events</li>
        </Link>
        {/* <li className="list-group-item">Users</li>
        <li className="list-group-item">Settings</li> */}
      </ul>
    </div>
  );
}

export default Menu;
