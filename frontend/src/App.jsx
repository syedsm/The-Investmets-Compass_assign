import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Digitalcourse from "./Admin/course";
import Event from "./Admin/Event";
import CourseDetail from "./Admin/coursedetail";
import Courseupdate from "./Admin/courseupdate";
import Eventdetail from "./Admin/eventdetail";
import EventUpdate from "./Admin/eventupdate";
import Add from "./Admin/Dashboard";
import Main from "./AdminDashboard/SalesDashboard";
import Home from "./user/home";
import Productpage from "./user/header";
import Productdetail from "./user/productdetail";
import { useEffect, useState } from "react";
import { createContext } from "react";
import Cartitem from "./user/cart";
import Userprofile from "./user/userprofile";

function App() {
  const [cart, setCart] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email"));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <Router>
      <Contextapi.Provider value={{ email, setEmail, cart, setCart }}>
        <Routes>
          {email ? (
            <>
              <Route path="/productadd" element={<Add />} />
              <Route path="/digitalcourse" element={<Digitalcourse />} />
              <Route path="/events" element={<Event />} />
              <Route path="/coursedetail/:id" element={<CourseDetail />} />
              <Route path="/courseupdate/:id" element={<Courseupdate />} />
              <Route path="/eventdetail/:id" element={<Eventdetail />} />
              <Route path="/eventupdate/:id" element={<EventUpdate />} />
              <Route path="/salesdashboard" element={<Main />} />

              {/* user page */}
              <Route path="/productpage" element={<Productpage />} />
              <Route path="/productdetail/:id" element={<Productdetail />} />
              <Route path="/cart" element={<Cartitem />} />
              <Route path="/userprofile" element={<Userprofile />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/consumerpage" element={<Home />} />
            </>
          )}
        </Routes>
      </Contextapi.Provider>
    </Router>
  );
}
export let Contextapi = createContext(null);

export default App;
