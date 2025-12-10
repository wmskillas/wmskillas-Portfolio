import React from "react";
import { Link } from "react-router-dom";

const NavbarEl = () => {
  return (
    <header className="text-light text-center headerBg">
      <div className="text-decoration-none">
        <div>
          <h1 className="headerTitle">William Skillas' Portfolio</h1>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <h4>
              <Link className="text-decoration-none" to="/wmskillas-Portfolio">
                <a href="/" className="m-3 navbarColor">
                  Home
                </a>
              </Link>
              <a
                href="https://drive.google.com/file/d/1D45a58JZD7oFZeAbysMT8fjQwqNojsx7/view?usp=sharing"
                className="m-3 navbarColor"
              >
                Resume
              </a>
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarEl;
