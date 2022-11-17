import React from "react";

function Interest() {
  return (
    <div id="interest" className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-around align-items-center flex-column">
            <div class="card mt-sm-5 mt-5 mt-md-0  ">
              <div className="img-int">
                <img
                  src="https://img.freepik.com/premium-vector/cartoon-illustration-success-woman-character-standing-podium_126608-1128.jpg?w=2000"
                  class="card-img-top"
                  alt="achievement"
                  width="300px"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title text-center mb-lg-0 mb-md-5 mb-0">
                  Achievement
                </h5>
                <p class="card-text fs-6 text-wrap">
                  <img
                    src="https://img.icons8.com/external-others-ghozy-muhtarom/32/000000/external-medal-business-filled-line-others-ghozy-muhtarom.png"
                    className="img-fluid"
                  />

                  <span>
                    Awarded "School Topper in 12th std" for the year of
                    2018-2019.
                  </span>
                  <br />
                  <img src="https://img.icons8.com/external-others-ghozy-muhtarom/32/000000/external-medal-business-filled-line-others-ghozy-muhtarom.png" />
                  <span>
                    participated many competitions relating drawing and sports
                    and got many prizes and certificates.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
            <div class="card mt-sm-5 mt-5 mt-md-0 mb-5 mb-sm-5 mb-md-0 ">
              <div className="img-int">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/006/644/409/small_2x/female-art-painter-free-vector.jpg"
                  class="card-img-top "
                  alt="..."
                  width="500px"
                />
              </div>
              <div class="card-body fs-6 text-wrap">
                <h5 class="card-title text-center ">Interest</h5>
                <p class="card-text">
                  <img src="https://img.icons8.com/fluency/28/000000/paint-palette.png" />
                  <span>Art(Drawing),Designing & painting</span>
                  <br />
                  <img src="https://img.icons8.com/fluency/28/000000/paint-palette.png" />
                  <span>Creative work and Craft works</span>
                  <br />
                  <img src="https://img.icons8.com/fluency/28/000000/paint-palette.png" />
                  <span>Photography Editing</span>
                  <br />
                  <img src="https://img.icons8.com/fluency/28/000000/paint-palette.png" />{" "}
                  <span>Love to play with colors</span>
                  <br />
                  <img src="https://img.icons8.com/fluency/28/000000/paint-palette.png" />
                  <span>Build ui design</span>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest;
