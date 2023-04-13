import config from "./storage/config.js";
import render from "./component/render.js";


render.showAll();


const form = document.querySelector("#Form");
form.addEventListener("submit", (e) => {
    const data = Object.fromEntries(new FormData(e.target));
    let registro = {
        operacion: Number(data.operacion),
        descripcion: String(data.descripcion),
        valor: Number(data.valor)
    }
    config.registros.unshift(registro);
    form.reset();
    e.target.reset();
    e.preventDefault();
    localStorage.setItem("Registros", JSON.stringify(config.registros));
    
    render.showAll();
})



const btnDeleteAll = document.querySelector("#deleteA");
btnDeleteAll.addEventListener('click',eliminarALl);
function eliminarALl(e){
    console.log(e.target.classList.contains("drop"));
    if (e.target.classList.contains("drop")) {  
        localStorage.clear();
        config.registros = (localStorage.getItem("Registros") ? JSON.parse(localStorage.getItem("Registros")) : []);
        render.showAll()
    }
}

