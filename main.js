const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  btn.appendChild(ripple);
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.addEventListener("animationend", () => {
    btn.removeChild(ripple);
  });
});
