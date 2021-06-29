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
        <h1 class=" primary-heading text-center">OUR PRODUCTS</h1>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12 p-2">
            <div
              className="rounded"
              style={{
                backgroundImage: `url("/img/wood.jpg")`,
                minHeight: "300px",
                backgroundSize: "cover",
              }}>
              <div className="product-text-w text-center">
                <div>
                  <h3>
                    <b>WOODEN ITEMS</b>
                  </h3>
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
              className="rounded"
              style={{
                backgroundImage: `url("/img/copper.jpg")`,
                minHeight: "300px",
                backgroundSize: "cover",
              }}>
              <div className="product-text-c text-center">
                <div>
                  <h3>
                    <b>COPPER ITEMS</b>
                  </h3>

                  <p>Candle - Holders</p>
                  <p>Wire Baskets</p>
                  <p>Mirrors</p>
                  <p>Globes</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12 p-2">
            <div
              className="rounded"
              style={{
                backgroundImage: `url("/img/brass.jpg")`,
                minHeight: "300px",
                backgroundSize: "cover",
              }}>
              <div className="product-text-cp">
                <div>
                  <h3>
                    <b>BRASS ITEMS</b>
                  </h3>
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
