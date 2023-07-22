const x = document.querySelector(".side-bar");
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    console.log("down");
    x.classList.add('side-bar--hidden')
  } else {
    console.log("up");
    x.classList.remove('side-bar--hidden')

  }
});

// window.onscroll = function () {
//   var scrollCurrentY = window.scrollY;
//   if (scrollPrevY > scrollCurrentY) {
//     x.style.transform = "translateX(200px)";
//   } else {
//     x.style.transform = "translateX(-200px)";
//   }
// };
// scrollPrevY = scrollCurrentY;

