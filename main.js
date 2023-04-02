import ingresos from "./component/ingresos.js"
import formulario from "./component/formulario.js";
import resultados from "./component/resultados.js";
import egresos from "./component/egresos.js";


resultados.renderDataWorker();
formulario.renderDataWorker();
ingresos.renderDataWorker();
egresos.renderDataWorker();

/* const form = document.querySelector("#Form");
form.addEventListener("submit",(e) => {
    e.preventDefault();

    const data =  Object.fromEntries(new FormData(e.target));
    let bol = Number(data.operacion)
    if (bol) {
        console.log("true");
    }
    console.log(Boolean(bol));
}) */