const div = document.createElement("div"); //modal
div.id = "divtg";
document.body.appendChild(div);
// div.classList.add("active");
let img = document.querySelectorAll(".imgdes");
img.forEach((e) => {
  //   console.log(e);
  e.addEventListener("click", () => {
    div.classList.add("active");
    let imgbig = document.createElement("img");
    imgbig.src = e.src;
    imgbig.id = "imgbig";
    //avoid muliti image while clicking eg ...like 1st click 1st img will show 
    // thn 2nd click 1img + 2img will show 
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    div.append(imgbig);
  });
});

div.addEventListener("click", () => {
  div.classList.remove("active");
});
