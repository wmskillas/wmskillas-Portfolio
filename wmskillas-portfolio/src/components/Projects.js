import React from "react";
import Film from "../assets/images/scann_20160414_0001.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="textColor" id="projects">
      <div className="container-fluid p-5">
        <h1 className="text-center textColor titleSize">My Projects</h1>
        <div className="container col-8-md projectWrap mt-4">
          <div className="card cardSize m-3">
            <img src={Film} alt="filmphoto.img"></img>
            <div className="card-body headerBg textColor">
              <h2 className="textColor border-bottom border-dark">
                <strong>Photography and Film</strong>
              </h2>
              <p className="textColor card-text border-bottom border-dark">
                Developed an environment where professional's could go to post
                and share their work. This is a Front End App using HTML, CSS,
                Bootstrap, JavaScript, and React. Created an easy-to-use and
                aesthetically nice website that allows visitors to efficiently
                navigate the website on any device.
              </p>
              <div className="text-center">
                <a
                  href="https://github.com/wmskillas/Joseph-Skillas-Portfolio"
                  className="textColor"
                >
                  On GitHub
                </a>
                <br />
                <a
                  href="https://wmskillas.github.io/Joseph-Skillas-Portfolio/"
                  className="textColor"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>
          <div className="card cardSize m-3">
            <img
              src="https://images.unsplash.com/photo-1642844744022-d76a9af3711a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="dentistry.png"
            ></img>
            <div className="card-body headerBg textColor">
              <h3 className="textColor border-bottom border-dark">
                <strong>Atlanta Center For Restorative Dentistry</strong>
              </h3>
              <p className="card-text border-bottom border-dark">
                I was contracted to update the website for Atlanta Center For
                Restorative Dentistry. I worked closely with the client in order
                to create the perfect site for them and was primarily focused
                Front End Development using HTML, CSS, and JavaScript to add and
                update features on the site such as drop down menus, information
                pages, and the landing page.
              </p>
              <div className="text-center">
                <a href="https://www.acfrd.com/" className="textColor">
                  Deployed
                </a>
              </div>
            </div>
          </div>
          <div className="card cardSize m-3">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="travelnanny.png"
            ></img>
            <div className="card-body headerBg textColor">
              <h3 className="textColor border-bottom border-dark">
                <strong>Travel Nanny</strong>
              </h3>
              <p className="card-text border-bottom border-dark">
                I was contracted to build a website for Travel Nanny, a product
                that helps people with any sort of nausea or motion sickness
                while traveling by having all the products needed in one
                convenient package. While the website has not been released to
                the public yet I have attached photos of the design and layout
                that I created for them. The site is based in Squarespace but I
                also incorporated custom CSS, HTML, and JavaScript to make the
                site more attractive and user friendly.
              </p>
              <div className="text-center">
                <Link
                  to="/wmskillas-Portfolio/TravelNanny"
                  className="textColor"
                >
                  Images
                </Link>
              </div>
            </div>
          </div>
          {/* Temporarily removed project because the heroku link is not functioning and I need to repost it. */}
          {/* <div className="card cardSize m-3">
            <img
              src="https://images.unsplash.com/photo-1607357221935-9133bb4b44ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270"
              alt="conspiracy.img"
            ></img>
            <div className="card-body headerBg textColor">
              <h2 className=" textColor border-bottom border-dark">
                <strong>The Theorist</strong>
              </h2>
              <p className="textColor border-bottom border-dark">
                Developed a place where users could go to see current Conspiracy
                Theories and Make Your Own! Users can view them and/or create
                them. They can also make comments on them as well.
                Authentication was set up where users need to create a username
                and password as well as submit an email address.
              </p>
              <div className="text-center">
                <a
                  href="https://github.com/Jcouch5/The-Theorist"
                  className="textColor"
                >
                  On GitHub
                </a>
                <br />
                <a
                  href="https://desolate-peak-38823.herokuapp.com/"
                  className="textColor"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div> */}
          <div className="card cardSize m-3">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270"
              alt="conspiracy.img"
            ></img>
            <div className="card-body headerBg textColor">
              <h3
                className="
            textColor border-bottom border-dark"
              >
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
      </div>
    </section>
  );
};

export default Projects;
