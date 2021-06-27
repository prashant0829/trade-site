import React from "react";
import "./style.css";
const about = () => {
  return (
    <>
      <div className="container">
        <div className="text-center"><br/><br/>
          <p class="secondary-heading">This Is Us</p>
          <p className="primary-heading">Since 1992</p>
          <div className="row justify-content-center text-center">
            <div className="col col-lg-8">
            </div>
          </div>
        </div><br/>
        <div class="row">
          <div class="col-md-4">
            <h3 class="about-h3 text-uppercase"> Who we are</h3>
            <div class="box-padding-10">
              {/* <img src="img/28.jpg" alt="" height="500px" width="350px" /> */}
              <p class="text-muted about-p"><br/>
                We are a quality driven artisan & exporters of premium
                metal/wooden home-decor, garden, kitchen-ware items and other
                indian handicraft items based from Moradabad City. Our products
                are designed oriented and made especially for those who believe
                in having the best of everything. We are specialised for Electro
                Phoretic Lacquer (E.P.L) items. We have a complete in-house
                compliance manufacturing, polishing, plating and other finishes
                set up in our factory. We are into this handicraft industry
                since 1992.<br/> We have carved a niche for our self in the
                 global handicraft market. We have marched at the forefront 
                 of the handicraft industry as a manufacturer and exporter of 
                 superior quality handcrafted items like candle holders, planters,
                  wall decorative, garden accessories, Coasters, lanterns, Globes,
                  Kitchen Ware Items, Photo Frames, Objects & Sculptures, Table-Tops,
                  Hooks/Wall Items, Mirrors, Christmas Items, Iron Wire Baskets and more such products. 
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <h3 class="about-h3">WHAT WE DO</h3>
            <div class="box-padding-10">
              <div class="text-muted"><br/>
              <p> We worship quality. At Primex India,
                the skilled craftsmen
              create handcrafted products to the highest level.
              To give our customers utmost satisfaction, we 
              provide customization facility to all our clients. 
              In customization, we try to understand the exact 
              specifications and requirements of our clients and 
              then we design & develop it accordingly.
              <br/>
                We specialize in the manufacturing
                 of high quality Products. We are endowed 
                 with a group of experienced and talented craftsman,
                who makes various designs, colors and patterns.
                Quality is our utmost motto. Our products undergo 
                stringent quality checks at various levels of production.
              <br/>
                For many years we have been in this trade, 
                hence a wide experience. The research and 
                design section of ours are supervised by our 
                senior partners. We assure you of the best 
                quality products and at the most appropriate prices.
              </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <h3 class="about-h3">Our Collection Includes </h3>
            <div class="box-padding-10">
              <div class="box-padding-left">
                <p class="text-muted"><br/>
                  1. Candle-Holders
                  <br />
                  2. Globes
                  <br />
                  3. Kitchen Ware Items
                  <br />
                  4. Photo Frames
                  <br />
                  5. Objects & Sculptures
                  <br />
                  6. Table-Tops
                  <br />
                  7. Hooks/Wall Items
                  <br />
                  8. Mirrors
                  <br />
                  9. Christmas Items
                  <br />
                  10. Iron Wire Baskets
                </p>
              </div>
            </div>
          </div>
      
        </div>     
      </div>
    </>
  );
};

export default about;
