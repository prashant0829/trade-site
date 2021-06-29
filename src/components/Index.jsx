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
      </div>
      <div className="container product">
        <h1>OU</h1>
        <div class="row">
          {/* <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12" >
            <img src="/img/5a.jpg" class="img-fluid"></img>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12" >
             <img src="/img/5a.jpg" className="img-fluid"></img>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12" >
            <img src="/img/5a.jpg"className="img-fluid"></img>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default index;
