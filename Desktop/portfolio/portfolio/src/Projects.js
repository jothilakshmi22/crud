import React from "react";
import "./projects.css";

const Projects = () => {
  let projectCardDeatils = [
    {
      image: "polymer-1.png",
      title: "Responsive Polymer Search Clone",
      techStack: {
        img1: "https://img.icons8.com/ultraviolet/30/000000/react--v1.png",
        img2: "https://img.icons8.com/color/35/000000/bootstrap.png",
      },
      btn1: "https://gleaming-crumble-697e1b.netlify.app/",
      btn2: "https://github.com/jothilakshmi22/polymer-search-clone",
    },

    {
      image: "groco-1.png",
      title: "Responsive Grocory website",
      techStack: {
        img1: "https://img.icons8.com/color/35/000000/html-5--v1.png",
        img2: "https://img.icons8.com/color/35/000000/css3.png",
        img3: "https://img.icons8.com/color/35/000000/javascript--v1.png",
      },
      btn1: "https://stirring-tulumba-8bcf66.netlify.app/",
      btn2: "https://github.com/jothilakshmi22/groco-website",
    },
    {
      image: "aws.png",
      title: "AWS polymer search UI clone",
      techStack: {
        img1: "https://img.icons8.com/ultraviolet/30/000000/react--v1.png",
        img2: "https://img.icons8.com/color/35/000000/bootstrap.png",
      },
      btn1: "https://celadon-florentine-2323d2.netlify.app/",
      btn2: "https://github.com/jothilakshmi22/aws-polymer-search",
    },
    {
      image: "coffee2.png",
      title: "Responsive Coffee website",
      techStack: {
        img1: "https://img.icons8.com/color/35/000000/html-5--v1.png",
        img2: "https://img.icons8.com/color/35/000000/css3.png",
        img3: "https://img.icons8.com/color/35/000000/javascript--v1.png",
      },
      btn1: "https://animated-madeleine-e0ebf7.netlify.app/",
      btn2: "https://github.com/jothilakshmi22/coffee-website",
    },

    {
      image: "spices.png",
      title: "Responsive spices website",
      techStack: {
        img1: "https://img.icons8.com/ultraviolet/30/000000/react--v1.png",
        img2: "https://img.icons8.com/color/35/000000/bootstrap.png",
      },
      btn1: "https://strong-kangaroo-7286c6.netlify.app/",
      btn2: "https://github.com/jothilakshmi22/spices",
    },
    {
      image: "polymer-1.png",
      title: "Responsive Grocory website",
      techStack: {
        img1: "https://img.icons8.com/ultraviolet/30/000000/react--v1.png",
        img2: "https://img.icons8.com/color/35/000000/bootstrap.png",
      },
      btn1: "https://stirring-tulumba-8bcf66.netlify.app/",
      btn2: "https://github.com/jothilakshmi22/groco-website",
    },
  ];
  return (
    <div id="projects">
      <div className="container-fluid centeralized">
        <center>
          <h1 class="myprojects">My Projects</h1>
        </center>
        <div className="container project d-flex justify-content-center flex-wrap px-5 ">
          {projectCardDeatils.map((e) => {
            return (
              <div className="card mt-2 mb-4 ms-4" style={{ width: "19rem" }}>
                <img src={e.image} class="card-img-top" alt="img" />
                <div class="card-body">
                  <div className="body">
                    <h5 class="card-title">{e.title}</h5>
                    <p class="card-text">
                      <h5>Tech Stack</h5>
                      <img src={e.techStack.img1} />
                      <img src={e.techStack.img2} />
                      <img src={e.techStack.img3} />
                    </p>
                  </div>
                  <a
                    href={e.btn1}
                    class="btn btn-primary mx-auto me-4 ms-2"
                    target="_blank"
                  >
                    View Demo
                  </a>
                  <a
                    href={e.btn2}
                    class="btn btn-primary mx-auto"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
