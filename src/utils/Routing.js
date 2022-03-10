import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../components/LandingPage/Landing";
import Page1 from "../components/LandingPage/Page1";
import Page2 from "../components/Page2/Page2";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        {/* Nested routing */}
        <Route path="page1" element={<Page1 />}></Route>
      </Route>
      <Route path="/page2" element={<Page2 />}></Route>
    </Routes>
  );
};

export default Routing;
