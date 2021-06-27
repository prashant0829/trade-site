import React from "react";

const index = () => {
  return (
    <div>
      <div className="circle"></div>
      <div className="landing">
        <div class="lefty"></div>
        <div class="righty">
          <img
            src="img/42a.jpg"
            style={{ width: " 450px", height: "650px" }}></img>
        </div>
      </div>

      <div
        class="parallax"
        style={{ backgroundImage: `url("/img/parallax.jpg")` }}>
        <div className="parallax-text">Hello There I am</div>
      </div>
    </div>
  );
};

export default index;
