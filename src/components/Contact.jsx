// import emailjs from "emailjs-com";
import React from "react";

const contact = () => {
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_miwa01u",
  //       "template_ly2waxa",
  //       e.target,
  //       "user_Ad70JDE0ywSrz3d1hfGys"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <section className="container">
      <br />
      <br />
      <br />
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
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="contactinfo">
              <div className="box">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h2>Address</h2>
                  <p>
                    Samardham Street, Nand Colony,
                    <br />
                    Peetal-Nagri, Moradabad-244001, U.P, India
                  </p>
                </div>
              </div>

              <div className="box">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <p>
                    <h2>Other branch's</h2>
                    Trinity's Trading Company B.V,
                    <br />
                    The Netherlands
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="text">
                  <h2>Phone</h2>
                  <p>+91-8979660060 / +91-8881180311</p>
                  +31(0) 621894807(Netherlands)
                </div>
              </div>
              <div className="text">
                <h2 className="follow-us">Follow us here</h2>
              </div>
              <div className="box">
                <div className="icon">
                  <a href="https://instagram.com/primexindiainc?utm_medium=copy_link"><i class="fab fa-instagram" style={{ color : "black"}}></i></a>
                </div>
                {/* <div className="icon">
                  <i class="fab fa-skype"></i>
                </div> */}
                {/* <div className="icon">
                  <i class="fab fa-facebook-square"></i>
                </div> */}
                <div className="icon">
                 
                    <a href="mailto:shubhamdhall5@gmail.com"><i className="fas fa-envelope" style={{ color : "black"}} ></i></a>
              
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="contactForm">
              <form>
                <h2>Send Message</h2>
                <div className="inputbox">
                  <input type="text" name="name " required="required" />
                  <span>Full Name</span>
                </div>
                <div className="inputbox">
                  <input type="text" name=" email" required="required" />
                  <span>Email</span>
                </div>
                <div className="inputbox">
                  <textarea required="required" name="message "></textarea>
                  <span>Type your Message...</span>
                </div>
                <div className="inputbox">
                  <input type="submit" value="Send" />
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
