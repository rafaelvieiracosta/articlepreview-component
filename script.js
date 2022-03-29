const btn = document.querySelector(".button");
const div = document.querySelector(".share");

btn.addEventListener("click", () => {
    div.classList.toggle("ativo");
    btn.classList.toggle("ativo");
});
