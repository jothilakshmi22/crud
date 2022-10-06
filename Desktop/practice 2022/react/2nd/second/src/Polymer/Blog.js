import React from "react";
import Banner from "./Banner";
import BlogData from "./BlogData";
import Footer from "./Footer";
const Blog = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-md-6  my-5 py-md-5">
            <img
              src="https://uploads-ssl.webflow.com/61488f4f65be16b5ebbd450b/632c9cc771d8be887e7be85b_Wrap%20Capture%20(3).png"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6 my-md-5 py-md-5 ">
            <p className="text-primary">Featured</p>
            <p className="text-muted">
              <i class="fa-regular fa-calendar"></i> september 22,2022{" "}
              <i class="fa-regular fa-clock"></i> 7 minutes
            </p>
            <h3>Views & sharing reimagined: September 2022</h3>
            <p className="text-muted">
              This update is the last in a set of major changes to the flow &
              structure of the product. Check out our new Views tab, a
              reimagined sharing process, & some additions to our data
              connectors.
            </p>
          </div>
        </div>

        <BlogData />

        <Banner />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
