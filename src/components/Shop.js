import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Shop = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h1>Buy this Item</h1>
        <Link className="btn btn-primary" to="/" style={{ height: "6vh" }}>
          Close
        </Link>
      </div>
      <div className="jumbotron d-flex justify-content-center">
        <div className="card">
          <h3 className=" card-title text-center text-primary mb-5">
            Car Name: {id}{" "}
          </h3>
          <button className="btn bg-primary" style={{ width: "30vw" }}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
