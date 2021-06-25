import React from "react";

const about = () => {
  return (
    <>
      <div className="container">
        <div class="row">
          <div class="col-md-4">
            <h3 class="about-h3 text-uppercase">Who We Are</h3>
            <div class="box-padding-10">
              <img
                src="img/10.jpg"
                alt=""
                class="img-responsive img-circle about-img"
              />
              <p class="text-muted about-p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Minima, quae dicta earum et nisi aliquid totam velit? Amet
                asperiores quis obcaecati sed reprehenderit consectetur alias
                dolores id quisquam eos totam vitae ipsam delectus, maxime,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                quibusdam voluptatibus dolor, rerum nesciunt nisi illum sapiente
                vero iure reprehenderit? sapiente incidunt quia odit omnis.
                Debitis!
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <h3 class="about-h3">OUR HISTORY</h3>
            <div class="box-padding-10">
              <p class="p-bold p-blue">1999 -</p>
              <p class="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia corrupti, laudantium consectetur hic iste molestiae
                modi possimus optio incidunt quas. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Eaque, vitae odio alias rerum nam
                quasi laudantium possimus facere soluta voluptatum?
              </p>

              <p class="p-bold p-blue">2002 -</p>
              <p class="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia corrupti, laudantium consectetur hic iste molestiae
                modi possimus optio incidunt quas. Lorem ipsum dolor sit amet
                soluta voluptatum?
              </p>

              <p class="p-bold p-blue">2006 -</p>
              <p class="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia corrupti, laudantium consectetur hic iste molestiae
                modi possimus optio incidunt quas. Lorem ipsum dolor sit amet
                soluta voluptatum?
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <h3 class="about-h3">OPPURTUNITIES</h3>
            <div class="box-padding-10">
              <p class="p-bold">Availabe Roles</p>
              <div class="box-padding-left">
                <p class="text-muted">
                  1. Jr./Sr. Web Developer
                  <br />
                  2. Graphic Designer
                  <br />
                  3. Web Designer
                  <br />
                  4. Front End Developer
                  <br />
                  5. Back End Developer
                  <br />
                  6. Database Admin
                  <br />
                  7 .System Admin
                  <br />
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
