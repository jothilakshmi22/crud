import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="conDetails text-break ">
          <pre>
            <img src="https://img.icons8.com/fluency/28/000000/new-post.png" />
            <span className="pt-3">
              {" "}
              Email : jothilakhmi2288@gmail.com
            </span>{" "}
            <br />
            <img src="https://img.icons8.com/color/30/000000/apple-phone.png" />
            <span> Mobile: 6374122641 </span> <br />
            <img src="https://img.icons8.com/color/30/null/marker--v1.png" />
            {/* <img src="https://img.icons8.com/arcade/30/000000/experimental-marker-arcade.png" /> */}
            <span style={{ textIndent: "6px" }}>
              Location: No.20/13 Ayyavoo street, <br /> shenoy nagar,
              Chennai-30.
            </span>
          </pre>
        </div>
        <div className="footer ">
          <a href="https://github.com/jothilakshmi22" target="_blank">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
              className="pe-3"
            />
          </a>
          <a href="mailto:jothilakshmi2288@gmail.com">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/new-post.png" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
