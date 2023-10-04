import React from "react";

const NavbarEl = () => {
  return (
    <header className=" p-4 text-light text-center headerBg">
      <div className="text-decoration-none">
        <div>
          <h1>
            <a className=" text-decoration-none headerTitle" href="#about">
              William Skillas' Portfolio
            </a>
          </h1>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <h4>
              <a href="#projects" className="m-5 navbarColor">
                Projects
              </a>
              <a href="#contact" className="navbarColor">
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1wRM0IqNqPYSoyNwjZ3TLc_IY97fRUSJT/view?usp=sharing"
                className="m-5 navbarColor"
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
