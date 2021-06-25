import React from "react";

const contact = () => {
  return (
    <div>
      <form action="#" class="contain">
        <h1>Contact us</h1>

        <label for="name">
          <b>Your Name</b>
        </label>
        <input type="password" placeholder="Enter Name" name="name" required />

        <label for="email">
          <b>Your Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="name">
          <b>Your Name</b>
        </label>
        <input type="password" placeholder="Enter Name" name="name" required />

        <button type="submit" class="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
