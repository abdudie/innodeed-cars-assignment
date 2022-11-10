import React from "react";
import { useState, useEffect } from "react";
import "./home.css";
import logo1 from "../docs/chevron-circled.svg";
import logo2 from "../docs/chevron-small.svg";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

//=============================================================
// Breakpoints array for carousel card display
//=============================================================
const breakpoint = [
  { width: 1, itemsToShow: 1 },
  { width: 330, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Home = () => {
  const [toggleFilter, setToggleFilter] = useState(true);
  const [data, setData] = useState([]);

  //=============================================================
  // Async API fetch
  //=============================================================
  const getData = async () => {
    let API = "api/cars.json";

    try {
      let response = await fetch(API);
      let res = await response.json();
      setData(res);
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  //=============================================================
  // Filter - Update state of 'data'
  //=============================================================
  const filterSUV = () => {
    setData(
      data.filter((e) => {
        return e.bodyType === "suv";
      })
    );
    setToggleFilter(false);
  };
  const filterEstate = () => {
    setData(
      data.filter((e) => {
        return e.bodyType === "estate";
      })
    );
    setToggleFilter(false);
  };
  const filterSedan = () => {
    let newData = data.filter((e) => {
      return e.bodyType === "sedan";
    });
    setData(newData);
    setToggleFilter(false);
  };
  const filterAll = () => {
    getData();
    setToggleFilter(true);
  };

  return (
    <>
      <div className="container">
        <h3 className="text-primary text-center">Filter</h3>
        <div
          class="container btn-group"
          role="group"
          aria-label="Basic example"
        >
          {toggleFilter ? (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => filterSUV()}
            >
              SUV
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => filterSUV()}
              disabled
            >
              SUV
            </button>
          )}
          {toggleFilter ? (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => filterEstate()}
            >
              Estate
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => filterEstate()}
              disabled
            >
              Estate
            </button>
          )}
          {toggleFilter ? (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => filterSedan()}
            >
              Sedan
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => filterSedan()}
              disabled
            >
              Sedan
            </button>
          )}

          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => filterAll()}
          >
            All
          </button>
        </div>
      </div>

      <Carousel breakPoints={breakpoint}>
        {data.map((e) => {
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
        })}
      </Carousel>
    </>
  );
};

export default Home;
