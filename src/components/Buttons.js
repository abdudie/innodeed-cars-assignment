import React from "react";

const Buttons = ({ filterAll, filterCar }) => {
  return (
    <div>
      <div className="container">
        <h3 className="text-primary text-center">Filter</h3>
        <div
          class="container btn-group"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => {
              filterCar("suv");
            }}
          >
            SUV
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => filterCar("estate")}
          >
            Estate
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => filterCar("sedan")}
          >
            Sedan
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => filterAll()}
          >
            All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
