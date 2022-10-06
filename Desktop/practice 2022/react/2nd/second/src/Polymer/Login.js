import React from "react";

const Login = () => {
  return (
    <div>
      {/* <img
        src="https://app.polymersearch.com/v2/icons/logo.svg"
        alt=""
        width="100px"
        className="mt-3 mx-5"
      /> */}
      <div className="container" style={{ height: "100vh" }}>
        <div className="row login d-flex justify-content-center align-items-center h-100">
          <div className="col-md-5 mt-md-5 mt-5 pt-md-0 pt-5">
            <h2 className="text-center">Log in</h2>
            <div className="d-grid">
              <button
                type="submit"
                class="btn btn-light my-2 text-dark fw-semibold border "
              >
                <i class="fa-brands fa-google"></i>{" "}
                <small> Sign in with Google</small>
              </button>
            </div>
            <div className="d-grid">
              <button
                type="submit"
                class="btn btn-primary mt-2 mb-4 text-white py-2"
              >
                <i class="fa-brands fa-facebook"></i> Continue with Facebook
              </button>
            </div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  style={{ fontSize: "13px", padding: "10px 10px 10px 20px" }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="password"
                  style={{ fontSize: "13px", padding: "10px 10px 10px 20px" }}
                />
              </div>
              <div id="emailHelp" class="form-text text-dark mb-2">
                Forgot password ?
                <a href="#" className="text-dark">
                  Reset it
                </a>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  class="btn btn-dark text-wite py-2 fw-semibold"
                >
                  Login
                </button>
              </div>
              <div className="text-center">
                <small className="text-muted ">
                  Don't have an account?
                  <a href="#" className="text-dark">
                    Register
                  </a>
                </small>
              </div>
            </form>
          </div>
          <div className="col-md-5 ms-md-5 ps-md-5 my-5 mt-md-5 pt-md-5">
            <h2>Start crushing your ads with Polymer!</h2>
            <small className="text-muted fst-italic mt-5">
              Polymer helped to pinpoint ad campaign optimization opportunities
              that we wouldn't have previously uncovered, and to create unique
              reporting views that impressed our clients.
              <br />
              <br />
              <div className="d-flex">
                <img
                  src="https://app.polymersearch.com/v2/onboarding/testimonial-profiles/1.png"
                  alt="profile"
                  width="50px"
                  className="rounded-circle"
                />
                <div>
                  <div className="fw-bold">Jen Laing</div>
                  <small>Convesion Optimizarion Manager @ Causal IQ</small>
                </div>
              </div>
              <div className="text-muted text-center fw-bold my-3">
                Trusted by teams at
              </div>
              <div
                className="login-icon d-flex justify-content-around text-dark p-2"
                style={{ backgroundColor: "rgb(173, 173, 173)" }}
              >
                <img
                  src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f50d364caedd3b80965_logo-fb.svg"
                  loading="lazy"
                  id="w-node-_4add404c-7e23-806a-82f5-b2bae6b6a1b7-4bfb30fd"
                  alt=""
                  class=""
                ></img>
                <img
                  src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f510908911ff0814390_ready%20set%20rocket.svg"
                  loading="lazy"
                  id="w-node-e4fea111-697f-2f69-2bc2-513bb2385d99-4bfb30fd"
                  alt=""
                  class="logo-hero-hp2"
                ></img>
                <img
                  src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f50d7b61c47e8b59ce3_terminus.svg"
                  loading="lazy"
                  id="w-node-_5b5300f5-81df-45e1-6a17-1dac10182b6b-4bfb30fd"
                  alt=""
                  class="logo-hero-hp2"
                ></img>
                <img
                  src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f5018c8cfec2aad7f32_spotify.svg"
                  loading="lazy"
                  id="w-node-fad99d35-d4f1-31f8-1dcb-be61b8dfe312-4bfb30fd"
                  alt=""
                  class="logo-hero-hp2"
                ></img>
                <img
                  src="https://uploads-ssl.webflow.com/6141c766b4919f865b6cb85b/632c1f50491cef63af736482_hp.svg"
                  loading="lazy"
                  id="w-node-dd822973-67d5-601f-a4d1-822259bf809b-4bfb30fd"
                  alt=""
                  class="logo-hero-hp2"
                ></img>
              </div>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
