import {CadastroControle} from "./cadastroControle.js"
import{Quadro} from "./Quadro.js"


const registerbutton = document.querySelector("body")
registerbutton.addEventListener("submit", Quadro.capturarDados.bind(Quadro));

const btnPesquisar = document.getElementById("btn");
btnPesquisar.addEventListener("click",Quadro.filtrarPessoas.bind(Quadro));