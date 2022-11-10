import React from "react";
import { useState, useEffect } from "react";
import "./home.css";
import logo1 from "../docs/chevron-circled.svg";

import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Buttons from "./Buttons";
import Card from "./Card";

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
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("suv");
  const [data2, setData2] = useState([]);

  //=============================================================
  // Async API fetch
  //=============================================================
  const getData = async () => {
    let API = "api/cars.json";

    try {
      let response = await fetch(API);
      let res = await response.json();
      setData(res);
      // setData2(res);
    } catch (err) {
      console.log(err);
    }
  };

  //=============================================================
  // useEffect - API Call
  //=============================================================
  useEffect(() => {
    getData();
  }, []);
  //=============================================================
  // useEffect to update secondary data according to master data
  //=============================================================
  useEffect(() => {
    setData2(data);
  }, [data]);

  //=============================================================
  // filter functions
  //=============================================================
  const filterAll = () => {
    setData2(data);
  };

  const filterCar = (a) => {
    setFilter(a);
    setData2(
      data.filter((e) => {
        return e.bodyType === a;
      })
    );
    console.log(data2);
  };
  return (
    <>
      <Buttons filterAll={filterAll} filterCar={filterCar} />

      <Carousel breakPoints={breakpoint}>
        {data2.map((e) => {
          return (
            <>
              <Card e={e} />
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default Home;
