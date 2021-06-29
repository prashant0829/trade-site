import React from "react";

const index = () => {
  return (
    <div>
      <div class="index"
        style={{ backgroundImage: `url("/.jpg")` }}>
        <div className="index-bar"><h2
         class="texts">We Focus on Building Relationships & Providing Best Quality to Our Buyers.</h2></div>
      </div>
      <div
        class="parallax"
        style={{ backgroundImage: `url("/img/parallax.jpg")` }}>
        <div className="parallax-text">Welcome to Primex India Inc.</div>
      </div><br/>
      <div className="container product">
        <h1 className="text-center primary-heading">OUR PRODUCTS</h1>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12" style={{ backgroundImage: `url("/img/wood.jpg")` }}>
             {/* <img src="/img/5a.jpg" class="img-fluid"></img>
             <ul>
              <li>chair</li><li>table</li>
            </ul>  */}
              <h2 class="texting">hh</h2>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12" style={{ backgroundImage: `url("/img/copper1.jpg")` }} >
             {/* <img src="/img/copper1.jpg" className="img-fluid"></img> */}
             <h2 class="texting">hh</h2>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12" style={{ backgroundImage: `url("/img/brass.jpg")` }} >
            {/* <img src="/img/5a.jpg"> </img>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
