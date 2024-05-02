const h1 = document.querySelector("h1");

const btn = document.querySelector("#change");

const body = document.querySelector("body");
btn.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  h1.innerHTML = `rgb(${r}, ${g}, ${b})`;
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
