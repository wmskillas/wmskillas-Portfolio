import { Icon } from "@iconify/react";
import Me from "../assets/images/IMG_2501.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container my-5">
        <div className="display-flex aboutWrap">
          <div>
            <img
              className="myImage aboutMargin"
              src={Me}
              alt="unavailable"
            ></img>
            <div className="m-3 textColor aboutText">
              <h3 className="aboutText">Hello, my name is William Skillas,</h3>
              <p className="">
                I am a recent graduate of Georgia Institute of Technology/2U's
                Full Stack Web Development Bootcamp with a passion for Front End
                Development. I have a strong foundation in HTML, CSS,
                JavaScript, and React, and I am eager to learn more about these
                and other technologies. I am a team player and I am always
                willing to go the extra mile. I am excited to find a position
                where I can use my skills and knowledge to contribute to a team
                and create innovative web applications.
              </p>
              <div>
                <a href="https://github.com/wmskillas" className="textColor">
                  GitHub
                  <Icon
                    icon="carbon:logo-github"
                    color=""
                    width="30"
                    height="30"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
