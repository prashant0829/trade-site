import React from "react";

const index = () => {
  return (
    <div>
      <div
        class="parallax"
        style={{ backgroundImage: `url("/img/parallax.jpg")` }}>
        <div className="parallax-text">Welcome to Primex India Inc.</div>
      </div>
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
                  <p className="points">
                    Kitchen-Ware Items
                    <br />
                    Accent Furniture
                    <br />
                    Photo Frames
                    <br />
                    Wall Arts
                  </p>
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
              <div className="product-text-c text-center">
                <div>
                  <h3>COPPER ITEMS</h3>
                  <p className="points">
                    Candle - Holders
                    <br />
                    Wire Baskets
                    <br />
                    Mirrors
                    <br />
                    Globes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-sx-12 p-2 mb-5">
            <div
              className="rounded product-container"
              style={{
                backgroundImage: `url("/img/brass.jpg")`,
              }}>
              <div className="product-text-cp">
                <div className="text-center">
                  <h3>BRASS ITEMS</h3>
                  <div>
                    <p className="points">
                      Objects & Sculptures
                      <br />
                      Christmas Items
                      <br />
                      Planters
                      <br />
                      Vases
                    </p>
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
