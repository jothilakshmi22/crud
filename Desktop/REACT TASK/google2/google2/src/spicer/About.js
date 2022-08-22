import React from "react";

function About() {
  return (
    <div>
      <section id="about" className="bg-success w-100 h-auto bg-gradient ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://pure-vodka.co.uk/wp-content/uploads/2020/03/Organic-100-Logo.png"
                alt="100%"
                className="img-fluid mt-lg-5"
              />
            </div>
            <div className="col-md-6 ">
              <h1 className="display-5 text-center mt-5 pt-4 text-light fw-bolder">
                About Us
              </h1>
              <p
                className="fw-bold p-3 text-light"
                style={{ textAlign: "justify" }}
              >
                Our sales force interacted closely with foreign markets and
                gained insights into how consumer expectations were changing.
                The regular manufacturing processes were no longer enough; the
                answer was end-to-end quality control which allowed zero
                short-cuts.We adopted an integrated approach to sourcing,
                monitoring, and selling our products which ensured the quality
                that our customers expected. Today Suminter is directly working
                with 20,000 farmers across nine Indian states, in 1,10,000 acres
                of certified agriculture land to procure organic & natural
                produce. All products are processed in certified world-class
                facilities from start to finish, and monitored all the way from
                procurement to delivery. Our end-to-end supply chain guarantees
                transparency and traceability, and the highest quality products
                that our customers have come to expect.
                <hr />
                One of the main reasons to switch to organic spices is the fact
                that it does not use any synthetic chemicals and pesticides for
                the cultivation process at all, and instead substitutes it with
                organic manure and bio fertilizers. This ensures that you are
                consuming the wholesome goodness of the spices, and not a
                pesticide-laden by-product, as in the case of non-organic
                spices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
