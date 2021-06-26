import React from "react";
import "./style.css";

const contact = () => {
  return (
    <section className="container">
      <div className="content">
        <p className="secondary-heading text-center">Wanna Have A Coffee</p>
        <p className="primary-heading text-center">
          We'd love to hear from you!
        </p>
        <div className="row justify-content-center text-center">
          <div className="col col-lg-6">
            <p>
              We never compromised in our products quality because our
              customer's satisfaction is the biggest thing for us because we
              believe in good & long-lasting business relationship with any of
              our customers.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-lg-6">
            <div className="contactinfo">
              <div className="box">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h2>Address</h2>
                  <p>
                    Peetal-Nagri, Moradabad-244001
                    <br />
                    U.P, India
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="text">
                  <h2>Phone</h2>
                  <p>+91-8979660060</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text">
                  <h2>Email</h2>
                  <p>Sales.Primexindia@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-lg-6">
            <div className="contactForm">
              <form>
                <h2>Send Message</h2>
                <div className="inputbox">
                  <input type="text" name=" " required="required" />
                  <span>Full Name</span>
                </div>
                <div className="inputbox">
                  <input type="text" name=" " required="required" />
                  <span>Email</span>
                </div>
                <div className="inputbox">
                  <textarea required="required"></textarea>
                  <span>Type your Message...</span>
                </div>
                <div className="inputbox">
                  <input type="submit" name=" " value="send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
