import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Collection from "./components/Collection";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Router>
        <div className="menu">
          <div className="leftmenu">
            <h4>COMPANY NAME </h4>
          </div>

          <div className="rightmenu">
            <ul>
              <li id="firstlist">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/collection">Collection</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
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
        <div className="container-footer">
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
