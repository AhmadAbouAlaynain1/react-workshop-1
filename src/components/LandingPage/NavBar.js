import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const b = true;

  const sayHello = () => {
    console.log("Hello");
  };
  return (
    <nav className="h-4rem container w-full flex align-items-center justify-content-between bg-white fixed top-0 shadow-5">
      <p>Logo</p>
      {/* Conditional Rendering */}
      {b && <p>hagsdhasghdas</p>}
      {b ? (
        <p
          onClick={() => {
            sayHello();
          }}
        >
          Ahmad
        </p>
      ) : (
        <p>Khaled</p>
      )}
      <ul className="flex">
        <Link to="/page2">
          <li>Home</li>
        </Link>
        <li>Login</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default NavBar;
