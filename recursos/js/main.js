const toggleMenuElement = document.getElementById("menuDesplegable");
const mainMenuElement = document.getElementById("menuUl");

toggleMenuElement.addEventListener("click", () =>{
    mainMenuElement.classList.toggle("menuUl--show");
});