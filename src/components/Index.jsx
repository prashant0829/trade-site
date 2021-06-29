import React from "react";

const index = () => {
  return (
    <div>
      <div
        class="index"
        style={{ backgroundImage: `url("/.jpg")`, marginTop: "65px" }}>
        <div className="index-bar">
          {/* <h2 class="texts">
            We Focus on Building Relationships & Providing Best Quality to Our
            Buyers.
          </h2> */}
        </div>
      </div>
      <div
        class="parallax"
        style={{ backgroundImage: `url("/img/parallax.jpg")` }}>
        <div className="parallax-text">Welcome to Primex India Inc.</div>
      </div>
      <br />
      <div className="container product mt-5">
        <p class="secondary-heading text-center mb-3">What We Make</p>
        <h1 class="primary-heading text-center">OUR PRODUCTS</h1>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12 p-2">
            <div
              className="rounded product-container"
              style={{
                backgroundImage: `url("/img/wood.jpg")`,
              }}>
              <div className="product-text-w text-center">
                <div>
                  <h3>WOODEN ITEMS</h3>
                  <p>Kitchen-Ware Items</p>
                  <p>Accent Furniture</p>
                  <p>Photo Frames</p>
                  <p>Wall Arts</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12 p-2">
            <div
              className="rounded product-container"
              style={{
                backgroundImage: `url("/img/copper.jpg")`,
              }}>
<<<<<<< HEAD
              <div className="product-text-c"><h4><b>COPPER ITEMS</b></h4>
              <ul >
                <li>Candle-Holders</li>
                <li>Wire Baskets</li>
                <li>Mirrors</li>
                 <li>Globes</li>
              </ul></div>
=======
              <div className="product-text-c text-center">
                <div>
                  <h3>COPPER ITEMS</h3>

                  <p>Candle - Holders</p>
                  <p>Wire Baskets</p>
                  <p>Mirrors</p>
                  <p>Globes</p>
                </div>
              </div>
>>>>>>> 5f1a0d7718d2b320ea519c7a9f8b9b15b993c0e5
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12 p-2">
            <div
              className="rounded product-container"
              style={{
                backgroundImage: `url("/img/brass.jpg")`,
              }}>
              <div className="product-text-cp">
                <div className="text-center">
                  <h3>BRASS ITEMS</h3>
                  <div>
                    <p>Objects & Sculptures</p>
                    <p>Christmas Items</p>
                    <p>Planters</p>
                    <p>Vases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
