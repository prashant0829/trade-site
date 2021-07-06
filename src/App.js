import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className=""
      id="index"
      style={{ scrollBehavior: "smooth", backgroundColor: "whitesmoke" }}>
      <Navbar className="" />
      <div id="index">
        <Index />
      </div>
      <div id="about" style={{ backgroundColor: "#ebeff1", color: "black" }}>
        <About />
      </div>
      <div id="collection" style={{ backgroundColor: "whitesmoke" }}>
        <Collection />
      </div>
      <div id="contact" style={{ backgroundColor: "#f2fbfa" }}>
        <Contact />
      </div>
      <footer className="footer">
        <div className="container">
          <center>
            <p>
              Copyright &copy; All Rights Reserved | Contact Us: +91 9000000000
            </p>
          </center>
        </div>
      </footer>
    </div>
  );
}

export default App;
