import LandingPage from "../assets/images/LandingPageScreenshot.png";
import ProductPage from "../assets/images/ProductPageScreenshot.png";
import FAQPage from "../assets/images/FAQScreenshot.png";
import Club from "../assets/images/JoinTheClub.png";

const TravelNanny = () => {
  return (
    <section className="textColor">
      <div className="container-fluid p-5">
        <h1 className="text-center textColor titleSize">Travel Nanny</h1>
        <div className="container col-8-md projectWrap mt-4">
          <div className="card cardSize m-3">
            <img
              className="travelNannyImage"
              src={LandingPage}
              alt="landingpage.png"
            ></img>
          </div>
          <div className="card cardSize m-3">
            <img
              className="travelNannyImage"
              src={ProductPage}
              alt="productpage.png"
            ></img>
          </div>
          <div className="card cardSize m-3">
            <img className="travelNannyImage" src={FAQPage} alt="FAQ.png"></img>
          </div>
          <div className="card cardSize m-3">
            <img
              className="travelNannyImage"
              src={Club}
              alt="jointheclub.png"
            ></img>
          </div>
          <div className="card cardSize m-3">
            <img
              className="travelNannyImage"
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="travelnanny.png"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelNanny;
