import React from "react";
import { Icon } from '@iconify/react';
import Film from '../assets/images/scann_20160414_0001.jpg'

const Projects = () => {
  return (
    <section className="textColor" id="projects">
      <h1 className="text-center textColor my-5 titleSize">My Projects</h1>
      <div className=" container col-8-md projectWrap">
      <div className="card cardSize m-3">
          <img
            src={Film}
            alt="filmphoto.img"
          ></img>
          <div className="card-body headerBg textColor">
            <h2 className="card-title border-bottom border-dark">
              <strong>Photography and Film</strong>
            </h2>
            <p className="card-text border-bottom border-dark">
              I developed a place where a professional could go to post and share their work. This is a Front End App using HTML, CSS, Bootstrap, JavaScript, and React.
              Created an easy-to-use and aesthetically nice website that allows visitors to efficiently navigate the website on any device.
            </p>
            <div className="text-center">
            <a href="https://github.com/wmskillas/Joseph-Skillas-Portfolio" className="textColor">
              On GitHub
            </a>
            <br />
            <a href="https://wmskillas.github.io/Joseph-Skillas-Portfolio/" className="textColor">
              Deployed
            </a>
            </div>
          </div>
        </div>
        <div className="card cardSize m-3">
          <img
            src="https://images.unsplash.com/photo-1607357221935-9133bb4b44ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270"
            alt="conspiracy.img"
          ></img>
          <div className="card-body headerBg textColor">
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
            <a href="https://github.com/Jcouch5/The-Theorist" className="textColor">
              On GitHub
            </a>
            <br />
            <a href="https://desolate-peak-38823.herokuapp.com/" className="textColor">
              Deployed
            </a>
            </div>
          </div>
        </div>
        <div className="card cardSize m-3">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270"
            alt="conspiracy.img"
          ></img>
          <div className="card-body headerBg textColor">
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
              className="textColor"
            >
              On GitHub
            </a>
            <br />
            <a
              href="https://wmskillas.github.io/Recipe-Generator/"
              className="textColor"
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
