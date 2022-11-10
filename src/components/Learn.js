import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import React from "react";

const Learn = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h1>Learn More</h1>
        <Link className="btn btn-primary" to="/" style={{ height: "6vh" }}>
          Close
        </Link>
      </div>
      <div className="jumbotron">
        <div className="card">
          <h3 className="card-title">Car Name: {id} </h3>
          <p className="card-text">
            This is car details component which is being controlled by Link in
            Home component. In the assignment, there was not enough data present
            for showing the details as it is already being shown in home tab.
            Further data can be shown by adding some dummy data also.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
