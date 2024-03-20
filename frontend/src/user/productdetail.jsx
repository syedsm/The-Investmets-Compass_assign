import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Productdetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/productdetail/${id}`)
      .then((res) => {
        const data = res.data;
        const productData = data.courseRecord || data.eventRecord;
        setProduct(productData);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-6">
          <img src={`../src/assets/${product.thumbnail}`} style={{ width: "400px" }} alt={product.name} className="img-fluid rounded" />
        </div>
        <div className="col-lg-6">
          <h2 className="mb-4">{product.courseName || product.eventName}</h2>
          <p className="mb-3">{product.courseDescription || product.eventDescription}</p>
          {product.coursePrice || product.eventPrice ? (
            <p className="mb-3">Price: ${product.coursePrice || product.eventPrice}</p>
          ) : null}
          <Link to='/productpage'><button className="btn btn-primary">Go back</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
