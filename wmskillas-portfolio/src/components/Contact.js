import React from "react";
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <footer className="pb-5" id="contact">
        <h4 className="text-center textColor">Contact me</h4>
        <h5 className="text-center textColo hoverText">Hover to View</h5>
      <div className="container d-flex flex-wrap text-center justify-content-center">
        <div className="textColor">
          <h4 className="myEmail emailMargin">Email:</h4>
          <p className="hide">wmskillas@gmail.com</p>
        </div>
        <div>
          <h4>
            <a href="https://www.linkedin.com/in/william-michele-skillas-2620bb161/">
              <Icon icon="logos:linkedin"/>
            </a>
          </h4>
        </div>
        <div className="textColor">
          <h4 className="myEmail phoneMargin">Phone:</h4>
          <p className="hide">770-401-2902</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
