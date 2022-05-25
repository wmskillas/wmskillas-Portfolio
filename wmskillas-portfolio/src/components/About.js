import React from "react";
import { Icon } from "@iconify/react";
import Me from "../assets/images/20210828_222823.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container my-5">
        <div className=" d-flex m-3">
          <img className="myimage d-flex" src={Me}></img>
          <div className="m-3">
            <h3>Hi, I'm William Skillas!</h3>
            <br />
            <p className="">
              I am a Junior Developer who is currently learning MERN stack and
              am looking to use and expand my knowledge on the subject. I
              definitely enjoy working in the front end more than anything else
              but I can do anything that is required of me. I love working and
              learning with others and can't wait to find a place where I can do
              these things and more!
            </p>
            {/* <div>
            <a href="#projects" className="m-3 text-white">
              My Projects
            </a>
          </div>
          <div>
            <a href="#contact" className="text-white">
              Contact Me
            </a>
          </div>
          <div>
            <a href="#resume" className="m-3 text-white">
              My Resume
            </a>
          </div> */}
            <div>
              <a href="https://github.com/wmskillas" className="text-white">
                GitHub
                <Icon
                  icon="carbon:logo-github"
                  color="white"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
