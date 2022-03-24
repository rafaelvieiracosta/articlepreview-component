const btn = document.querySelector(".button");
const div = document.querySelector(".share");

btn.addEventListener("click", () => {
  if (div.style.display === "flex") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
  
  setTimeout(() => {
    div.classList.toggle("ativo");
    btn.classList.toggle("ativo");
  }, 1);
});
