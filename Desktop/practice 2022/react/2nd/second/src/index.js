import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import BlogData from "./Polymer/BlogData";
// import About from "./Polymer/About";
// import Blog from "./Polymer/Blog";
// import Polymer from "./Polymer/Polymer";
// import Pricing from "./Polymer/Pricing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <BlogData /> */}
    {/* <Blog /> */}
  </React.StrictMode>
);
