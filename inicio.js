import home from "./pages/home/home.js";
import sorteio from "./pages/sorteio/sorteio.js";

const main = window.document.querySelector("#root")

window.addEventListener("load", () =>{

        main.appendChild(sorteio());

})