var curser = document.querySelector(".curser");
document.addEventListener("mousemove", (e) => {
  var x = e.clientX;
  var y = e.clientY;
  curser.style.left = x + "px";
  curser.style.top = y + "px";
});
