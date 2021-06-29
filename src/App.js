import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="" style={{ scrollBehavior: "smooth" }}>
      <Navbar className="" />
      <div id="index">
        <Index />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="collection">
        <Collection />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="#">Our services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <div></div>
              <ul>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="#">Order status</a>
                </li>
                <li>
                  <a href="#">Payment options</a>
                </li>
              </ul>
            </div>
            {/* <div className="footer-col">
              <h4>Home</h4>
              <ul>
                <li>
                  <a href="home.html">Home</a>
                </li>
              </ul>
            </div> */}

            <div className="footer-col">
              <h4>Follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                 <i className="fab fa-skype"></i>
                </a>
                <a href="https://www.instagram.com/shubhamdhall5/ ">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                 <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="footer-col map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13983.33943686168!2d78.78505073205307!3d28.813994717542982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afa54dada7fb3%3A0x6bc8aa29bfc6c2af!2sPital%20Nagri%2C%20Moradabad%2C%20Uttar%20Pradesh%20244001!5e0!3m2!1sen!2sin!4v1624903691118!5m2!1sen!2sin"></iframe> </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
