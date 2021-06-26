import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <div
          className=" mt-5 mb-5"
          style={{
            backgroundImage:
              "url(" + "/img/olia-nayda-FrxSlhpIjbw-unsplash.png" + ")",
          }}></div>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/collection">
            <Collection />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">404</Route>
        </Switch>
      </Router>
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
            <div className="footer-col">
              <h4>Home</h4>
              <ul>
                <li>
                  <a href="home.html">Home</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
