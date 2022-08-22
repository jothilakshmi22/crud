import React from "react";

function Home() {
  return (
    <div>
      <section id="home">
        <h1 className="text-center">Organic Spicers </h1>

        <p className="text-center">
          Once you get a spice in your home, you have it forever. ...
        </p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your Email@...."
            className="form-control"
          />
          <button className="btn button2 fw-bolder ">Get start</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
