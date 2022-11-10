import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./components/Learn";
import Shop from "./components/Shop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/learn/:id" element={<Learn />}></Route>
          <Route path="/shop/:id" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
