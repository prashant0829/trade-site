import React from "react";
import "./style.css";

const contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam
          consectetur quam corrupti impedit non, ullam quidem velit suscipit
          ratione maiores iure nam possimus, error hic facere cumque. Dolorum,
          maxime!
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-6">
            <div className="contactinfo">
              <div className="box">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h2>Address</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora eum aspernatur quisquam natus nisi animi,
                    dignissimos quo consequatur atque iusto error reprehenderit
                    omnis debitis deserunt mollitia hic, eligendi quaerat
                    repellat!
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="text">
                  <h2>Phone</h2>
                  <p>756-678-2349</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text">
                  <h2>Email</h2>
                  <p>xyz@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-6">
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
