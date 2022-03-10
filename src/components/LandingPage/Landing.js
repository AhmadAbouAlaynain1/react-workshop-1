import React from "react";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import List from "./List";

const Landing = () => {
  const name = "Ahmad";
  return (
    <>
      <NavBar />
      {/* Passing in props */}
      <Hero name={name} />
      <ContactUs />
      <List />
      {/* Outlet for nested routes */}
      <Outlet />
    </>
  );
};

export default Landing;
