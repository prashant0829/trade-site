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
<<<<<<< HEAD
              Copyright &copy; <a href="https://silihat.com/" style={{ color : "white"}} >silihat.com</a>All Rights Reserved
=======
              Copyright &copy;{" "}
              <a href="https://silihat.com/" style={{ color: "white" }}>
                SiliHat
              </a>{" "}
              All Rights Reserved | Contact Us: +91 9000000000
>>>>>>> a5d959bd060170c0262e386105f2dce285f2ad01
            </p>
          </center>
        </div>
      </footer>
    </div>
  );
}

export default App;
