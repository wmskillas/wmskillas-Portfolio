import React from "react";
import { Icon } from '@iconify/react';

const Projects = () => {
  return (
    <section className="" id="projects">
      <h2 className="text-center text-white my-4">Projects</h2>
      <div className=" container col-8-md d-flex flex-wrap text-dark">
        <div className="card cardsize m-3">
          <img
            src="https://images.unsplash.com/photo-1607357221935-9133bb4b44ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270"
            alt="conspiracy.img"
          ></img>
          <div className="card-body headerbg text-white">
            <h2 className="card-title border-bottom border-dark">
              <strong>The Theorist</strong>
            </h2>
            <p className="card-text border-bottom border-dark">
              My group developed a place where users could go to see current
              Conspiracy Theories and Make Your Own! Users can view them and/or
              create them. They can also make comments on them as well.
              Authentication was set up where users need to create a username
              and password as well as submit an email address.
            </p>
            <div className="text-center">
            <a href="https://github.com/Jcouch5/The-Theorist" className="text-white">
              On GitHub
            </a>
            <br />
            <a href="https://desolate-peak-38823.herokuapp.com/" className="text-white">
              Deployed
            </a>
            </div>
          </div>
        </div>
        <div className="card cardsize m-3">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270"
            alt="conspiracy.img"
          ></img>
          <div className="card-body headerbg text-white">
            <h3 className="card-title border-bottom border-dark">
              <strong>Recipe Generator</strong>
            </h3>
            <p className="card-text border-bottom border-dark">
              Recipe-Generator seeks to answer the age old question of What's
              for Dinner?. At the click of a button, users will be able to
              generate a random recipe. This application was setup using API
              routing.
            </p>
            <div className="text-center">
            <a
              href="https://github.com/wmskillas/Recipe-Generator"
              className="text-white"
            >
              On GitHub
            </a>
            <br />
            <a
              href="https://wmskillas.github.io/Recipe-Generator/"
              className="text-white"
            >
              Deployed
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
