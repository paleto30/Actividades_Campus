import config from "./storage/config.js";

import ingresos from "./component/ingresos.js"
import formulario from "./component/formulario.js";
import resultados from "./component/resultados.js";
import egresos from "./component/egresos.js";


resultados.renderDataWorker();
formulario.renderDataWorker();
ingresos.renderDataWorker();
egresos.renderDataWorker();


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
    //location.reload();
    resultados.renderDataWorker();
    formulario.renderDataWorker();
    ingresos.renderDataWorker();
    egresos.renderDataWorker();
})




const btnDelete = document.querySelector("#");