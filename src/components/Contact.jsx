import React from "react";


const contact = () => {
  return (
    <section className="container"><br/><br/><br/>
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
      <div className="">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="contactinfo">
              <div className="box">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h2>Address</h2>
                  <p>Samardham Street, Nand Colony, 
                    <br/>Peetal-Nagri, Moradabad-244001, U.P, India</p>
                    <br/><p>Trinity's Trading Company B.V,
                    <br/>The Netherlands</p>
               </div>   
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="text">
                  <h2>Phone</h2>
                  <p>+91-8979660060
                  / +91-8881180311</p>
                   +31(0) 621894807(Netherlands)
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text">
                  <h2>Email</h2>
                  <p><a href="Sales.Primexindia@outlook.com">Sales.Primexindia@outlook.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
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
