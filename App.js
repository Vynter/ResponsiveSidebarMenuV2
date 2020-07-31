let btn = document.querySelector(".toggle");
let body = document.querySelector(".body");
btn.addEventListener("click", () => {
  let nav = document.querySelector(".navigation");
  nav.classList.toggle("active");
  btn.classList.toggle("active");
  body.classList.toggle("active");
  console.log(nav);
});
