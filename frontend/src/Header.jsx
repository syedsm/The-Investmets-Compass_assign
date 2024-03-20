import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Contextapi } from './App';

function Header() {
  const { email, setEmail } = useContext(Contextapi)
    let navigate = useNavigate()
    function handleLogout(e) {
        setEmail(localStorage.removeItem('email'))
        navigate('/')
    }
  



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">test Website</Link>
      
        
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/consumerpage">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/salesdashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      
    </nav>
  );
}

export default Header;
