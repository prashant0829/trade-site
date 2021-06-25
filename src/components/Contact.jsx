import React from "react";

const contact = () => {
  return (
    <section class="contact">
      <div class="content">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam consectetur quam corrupti impedit non, ullam quidem velit suscipit ratione maiores iure nam possimus, error hic facere cumque. Dolorum, maxime!
        </p>
      </div>
      <div class="container">
        <div class="contactinfo">
          <div class="box">
            <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
            <div class="text">
                <h2>Address</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora eum aspernatur quisquam natus nisi animi, dignissimos quo consequatur atque iusto error reprehenderit omnis debitis deserunt mollitia hic, eligendi quaerat repellat!</p>
            </div>
          </div> 
          <div class="box">
            <div class="icon"><i class="fas fa-phone"></i></div>
              <div class="text">
                <h2>Phone</h2>
                <p>756-678-2349</p>
              </div>
          </div>
          <div class="box">
              <div class="icon"><i class="fas fa-envelope"></i></div>
                <div class="text">
                  <h2>Email</h2>
                  <p>xyz@gmail.com</p>
                </div>
          </div>
         </div>
         <div class="contactForm">
           <form>
             <h2>Send Message</h2>
             <div class="inputbox">
               <input type="text" name=" " required="required"/>
               <span>Full Name</span>
             </div>
            <div class="inputbox">
              <input type="text" name=" " required="required"/>
              <span>Email</span>
            </div>
            <div class="inputbox">
              <textarea required="required"></textarea>
              <span>Type your Message...</span>
            </div>
            <div class="inputbox">
              <input type="submit" name=" " value="send"/>
            </div>

           </form>
         </div>
      </div>
    </section>
  );
};

export default contact;
