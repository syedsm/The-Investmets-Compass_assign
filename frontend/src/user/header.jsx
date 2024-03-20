import { Link } from "react-router-dom";
import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { Contextapi } from "../App";

function Productpage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('/api/userproduct')
      .then((res) => {
        // console.log(res.data)
        setUserData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user product data:', error);
      });
  }, []);

  const {cart,setCart}=useContext(Contextapi)
  // console.log("cart",cart)
  let _cart = { ...cart }

  function handlecart(e, course) {
    console.log(course._id)
    console.log(course)
    if (!_cart.item) {
        _cart.item = {}
    } if (!_cart.item[course._id]) {
        _cart.item[course._id] = 1
    } else {
        _cart.item[course._id] += 1
    } if (!_cart.totalItems) {
        _cart.totalItems = 1
    } else {
        _cart.totalItems += 1
    }
    setCart(_cart)
    // console.log(cart)
}
  return (
    <>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light " id="fixed-container" >
  <div className="container px-4 px-lg-5 d-flex align-items-center justify-content-between">
    <Link className="navbar-brand" href="#">
      test Website
    </Link>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/userprofile">
          <i className="bi bi-person"></i> Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/cart'>
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart  
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {!cart.totalItems ? 0 : cart.totalItems}
            </span>
          </button>
        </Link>
      </li>
    </ul>
  </div>
</nav>


      {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-1">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="text-center text-lg-start text-white">
                <h1 className="display-4 fw-bolder">Our Digital Services</h1>
                <p className="lead fw-normal text-white-50 mb-0">
                  Try Our Digital products
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://marketplace.canva.com/EAFOYjzOgjw/1/0/1131w/canva-red-bold-business-conference-poster-KVjH7Y5SC9o.jpg"
                      className="d-block w-100"
                      alt="Image 1"
                      style={{ maxHeight: "450px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artificial-intelligence-workshop-template-design-fb1c69ffa0c1d8d418b943540d7b6e19_screen.jpg?ts=1683899822"
                      className="d-block w-100"
                      alt="Image 2"
                      style={{ maxHeight: "450px" }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Section--> */}
      <section className="py-5">
      <h3 className="text-center">Our Events</h3>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {/* Map through the first 4 events */}
                {userData.events && userData.events.slice(0, 4).map((event, index) => (
                  <div className="col mb-6" key={index}>
                    <div className="card h-100">
                      <img
                        className="card-img-top"
                        src={`./src/assets/${event.thumbnail}`}
                        alt={event.Name}
                        style={{ minHeight: "450px" }}
                      />
                      <h4 className="text-center mt-2">{event.eventName}</h4>

                      <div className="card-footer p-2 pt-3 border-top-0 bg-transparent">
                        <div className="text-center">
                          <Link className="btn btn-outline-dark mt-auto" to="#">
                            Register Now 
                          </Link>
                          <Link
                            className="btn btn-outline-dark  ms-3"
                            to={`/productdetail/${event._id}`}
                          >
                          
                            More Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h3 className="text-center mt-5">Online Course</h3>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* Map through the online courses */}
          {userData.courses && userData.courses.map((course, index) => (
            <div className="col mb-6" key={index}>
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={`./src/assets/${course.thumbnail}`}
                  alt={course.name}
                  style={{ minHeight: "450px" }}
                />
                      <h4 className="text-center mt-2">{course.courseName}</h4>
             
                <div className="card-footer p-2 pt-3 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto"  onClick={(e) => handlecart(e, course)}>
                      Add to cart
                    </Link>
                    <Link className="btn btn-outline-dark mt-auto ms-2" to={`/productdetail/${course._id}`}>
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <footer id="footer" className="overflow-hidden">
        <div className="container ">
          <div className="row">
            <div className="footer-top-area">
              <div className="row d-flex flex-wrap justify-content-between">
                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu">
                    <p>test Website</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi amet ab nobis nisi iste officiis nam nemo velit
                      non, suscipit dolores totam magnam assumenda inventore
                      modi incidunt nulla alias quae.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 pb-3">
                  <div className="footer-menu text-uppercase">
                    <h5 className="widget-title pb-2">Quick Links</h5>
                    <ul className="menu-list list-unstyled text-uppercase">
                      <li className="menu-item pb-2">
                        <Link href="#">Home</Link>
                      </li>
                      <li className="menu-item pb-2">
                        <Link href="#">About</Link>
                      </li>

                      <li className="menu-item pb-2">
                        <Link href="#">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 pb-3">
                  <div className="footer-menu contact-item">
                    <h5 className="widget-title text-uppercase pb-2">
                      Contact Us
                    </h5>
                    <p>
                      Do you have any queries or suggestions?{" "}
                      <Link to="mailto:">yourinfo@gmail.com</Link>
                    </p>
                    <p>
                      If you need support? Just give us a call.{" "}
                      <Link to="">+55 111 222 333 44</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Productpage;
