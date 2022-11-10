import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../docs/chevron-small.svg";

const Card = ({ e }) => {
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="card mb-5 m-auto">
          <div className="card-text text-secondary">{e.bodyType}</div>

          <div className="d-inline-flex flex-sm-column flex-lg-row align-items-center">
            <h5 className="card-title ">{e.modelName}</h5>
            <span className="model-type card-text text-secondary font-size-small">
              {e.modelType}
            </span>
          </div>
          <img
            className="card-image"
            // style={{ width: "20vw" }}
            src={e.imageUrl}
            alt="card-img"
          ></img>
          <div className="container mt-4 d-flex justify-content-center">
            <Link
              to={"/learn/" + e.id}
              className=" anchor text-primary font-weight-bold"
            >
              LEARN{" "}
              <img
                className="ml-1"
                src={logo2}
                style={{ width: "2vh" }}
                alt="img"
              ></img>
            </Link>
            <Link
              to={"/shop/" + e.id}
              className="anchor text-primary ml-3 font-weight-bold"
            >
              SHOP{" "}
              <img
                className="ml-1"
                src={logo2}
                style={{ width: "2vh" }}
                alt="img"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
