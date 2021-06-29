import React from "react";

const index = () => {
  return (
    <div>
      <div class="index" style={{ backgroundImage: `url("/.jpg")` }}>
        <div className="index-bar">
          <h2 class="texts">
            We Focus on Building Relationships & Providing Best Quality to Our
            Buyers.
          </h2>
        </div>
      </div>
      <div
        class="parallax"
        style={{ backgroundImage: `url("/img/parallax.jpg")` }}>
        <div className="parallax-text">Welcome to Primex India Inc.</div>
      </div>
      <br />
      <div className="container product">
        <h1 className="text-center primary-heading">OUR PRODUCTS</h1>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12  p-2">
            <div
              className="rounded"
              style={{
                backgroundImage: `url("/img/wood.jpg")`,
                minHeight: "500px",
                backgroundSize: "cover",
              }}></div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12 p-2">
            <div
              className="rounded"
              style={{
                backgroundImage: `url("/img/copper.jpg")`,
                minHeight: "500px",
                backgroundSize: "cover",
              }}></div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12 p-2">
            <div
              className="rounded"
              style={{
                backgroundImage: `url("/img/brass.jpg")`,
                minHeight: "500px",
                backgroundSize: "cover",
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
