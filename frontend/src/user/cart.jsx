import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Contextapi } from "../App";

function Cartitem() {
  const { cart, setCart } = useContext(Contextapi);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let totalAmount = 0;

  useEffect(() => {
    if (!cart.item) {
      return;
    }
    axios
      .post("/api/cartproducts", { ids: Object.keys(cart.item) })
      .then((res) => {
        if (res.data.status === 200) {
          setProducts(res.data.apiData);
        } else {
          setMessage(res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching cart products:", error);
        setMessage("Error fetching cart products");
      });
  }, [cart.item]);

  const handleIncrement = (id) => {
    const updatedCart = { ...cart };
    updatedCart.item[id] += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (id) => {
    const updatedCart = { ...cart };
    if (updatedCart.item[id] > 1) {
      updatedCart.item[id] -= 1;
      setCart(updatedCart);
    }
  };

  const handleQuantity = (id) => {
    return cart.item[id];
  };

//   const handleDelete = (id) => {
//     const updatedCart = { ...cart };
//     delete updatedCart.item[id];
//     setCart(updatedCart);
//   };

const handleDelete = (productId) => {
    // Filter out the product with the specified productId from the products array
    const updatedProducts = products.filter((product) => product._id !== productId);
    setProducts(updatedProducts);
  
    // Remove the product from the cart
    const updatedCart = { ...cart };
    delete updatedCart.item[productId];
    setCart(updatedCart);
  };
    
  

  const handleCheckout = () => {
    // Handle checkout logic
  };

  return (
    <div className="container mt-4">
      {products.length ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((result, index) => (
              <tr key={result._id}>
                <td>{index + 1}</td>
                <td>{result.courseName}</td>
                <td>
                  <img
                    className="img-thumbnail"
                    style={{ width: "100px" }}
                    src={`./src/assets/${result.thumbnail}`}
                    alt=""
                  />
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleIncrement(result._id)}
                  >
                    +
                  </button>
                  <span className="me-2">{handleQuantity(result._id)}</span>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleDecrement(result._id)}
                  >
                    -
                  </button>
                </td>
                <td>${result.coursePrice * handleQuantity(result._id)}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(result._id)}
                    style={{ boxShadow: "0 0 0 0 rgba(255, 99, 71, 0.5)" }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow =
                        "0 0 10px rgba(255, 99, 71, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow =
                        "0 0 0 0 rgba(255, 99, 71, 0.5)";
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="text-end fw-bold">
                Total Amount:
              </td>
              <td>${totalAmount}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <img
            src="7612-removebg-preview.png"
            className="img-fluid rounded"
            style={{ width: "50%" }}
            alt=""
          />
          <p>No items in the cart.</p>
        </div>
      )}
    </div>
  );
}

export default Cartitem;
