import React from "react";

function Conduct() {
  return (
    <div>
      <section id="conducts">
        <div className="container-fluid bg-dark p-5 mt-sm-5">
          <div className="container ">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://images.healthshots.com/healthshots/en/uploads/2021/12/29010059/spices-1600x900.jpg"
                  alt="1"
                  className=" mx-auto img-fluid"
                  style={{ width: "85%", height: "310px" }}
                />
              </div>
              <div className="col-md-6">
                <h2 className="text-success fw-bolder">Contact form</h2>
                <div class="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label text-light fw-normal"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control fw-bold"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label text-light fw-normal"
                  >
                    Enter your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn btn-success">Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="footer">
          <div className="text-light fw-bolder">CopyWrites@SPICES🔥.com</div>
        </section>
      </section>
    </div>
  );
}

export default Conduct;
