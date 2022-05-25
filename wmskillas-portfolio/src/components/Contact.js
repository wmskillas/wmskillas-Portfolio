import React from "react";
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <footer id="contact">
        <h4 className="text-center">Contact me</h4>
      <div className="container d-flex flex-wrap text-center justify-content-center">
        <div>
          <h4>Email:</h4>
          <p>wmskillas@gmail.com</p>
        </div>
        <div>
          <h4>
            <a href="https://www.linkedin.com/in/william-michele-skillas-2620bb161/">
              <Icon icon="logos:linkedin"/>
            </a>
          </h4>
        </div>
        <div>
          <h4>Phone:</h4>
          <p>770-401-2902</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
