import React from "react";

const NavbarEl = () => {
  return (
    <header className=" p-4 text-light text-center headerbg">
      <div className="text-decoration-none">
        <div>
          <h1>
            <a className="text-white text-decoration-none" href="#about">
              William Skillas' Portfolio Page
            </a>
          </h1>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <p>
              <a
                href="#projects"
                className="m-3 text-white text-decoration-none"
              >
                My Projects
              </a>
              <a href="#contact" className="text-white text-decoration-none">
                Contact Me
              </a>
              <a href="#resume" className="m-3 text-white text-decoration-none">
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarEl;
