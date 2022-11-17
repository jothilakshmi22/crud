import React from "react";

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="col-12 d-flex justify-content-center w-100 ">
          <h1 className="mt-5 mb-5 pt-5 pb-3 pb-sm-0">ABOUT ME </h1>
        </div>

        <div className="circle mx-auto">
          <img
            src="https://secure.gravatar.com/avatar/d24146b99f3968cc8e3bb699b0aee427?s=500&d=mm&r=g"
            alt=""
            className="img-fluid ps-5 pt-4 pb-1"
            width="300px"
          />
          <div className="content pe-md-4 ">
            <p>
              I'm Johilakshmi,born and brought up in chennai.I have serious
              passion in building web ui designs
            </p>
            <p>
              I'm a fast and self learner and also very much keen in good design
              and innovations. I love to developing a new things!
            </p>

            <p>
              I prefer to keep learning, continue challenging myself, and do
              interesting things that matters
            </p>
            <p>
              I'm curiosity in how the websites and apps are developing so that
              am learning web development.Once i learn that i love developing an
              websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
