import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <footer className="pb-5 textColor" id="contact">
      <h4 className="text-center">Contact me</h4>
      <div className="container d-flex flex-wrap text-center justify-content-center">
        <div>
          <input type="checkbox" id="toggle" className="visually-hidden" />
          <label htmlFor="toggle">
            <h4 className="myEmail emailMargin hoverEffect">Email:</h4>
          </label>
          <div className=" emailMargin controlEmail"></div>
        </div>
        <div>
          <h4>
            <a href="https://www.linkedin.com/in/william-michele-skillas/">
              <Icon icon="logos:linkedin" />
            </a>
          </h4>
        </div>
        {/* Was being used to show my phone number on the contact page but I decided it was more secure to not have that on their but instead saving it for potential other contact methods */}
        {/* <div>
          <input type="checkbox" id="toggled" className="visually-hidden" />
          <label htmlFor="toggled">
            <h4 className="myEmail phoneMargin hoverEffect">Phone:</h4>
          </label>
          <div className="phoneMargin controlPhone"></div>
        </div> */}
      </div>
    </footer>
  );
};

export default Contact;
