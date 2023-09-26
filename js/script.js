// toggle class active
const navbarNav = document.querySelector(".navbar-menu");

//ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  //   console.log("sudah masuk");
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan nav
const hamburger = document.getElementById("hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.targert)) {
    navbarNav.classList.remove("active");
  }
});
