import config from "./storage/config.js";
import render from "./component/render.js";



render.showAll();


// envio del rergistro desde el formulario
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


// boton de borrar todos los datos registrados
const btnDeleteAll = document.querySelector("#deleteA");
btnDeleteAll.addEventListener('click',eliminarALl);
function eliminarALl(e){
    if (e.target.classList.contains("drop")) {  
        localStorage.clear();
        config.registros = (localStorage.getItem("Registros") ? JSON.parse(localStorage.getItem("Registros")) : []);
        render.showAll()
    }
}


// boton de borrar un dato especifico
const row = document.querySelector("#tablass");
row.addEventListener('click',(e)=>{
    if (e.target.classList.contains("borrar")) {
        const id = e.target.dataset;
        config.registros.splice(id.registro,1)
        localStorage.setItem("Registros", JSON.stringify(config.registros))
        config.registros = (localStorage.getItem("Registros") ? JSON.parse(localStorage.getItem("Registros")) : []);
        render.showAll()
    }
})