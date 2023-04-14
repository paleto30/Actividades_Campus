import resultados from "./resultados.js";
import formulario from "./formulario.js";
import ingresos from "./ingresos.js";
import egresos from "./egresos.js";
import grafica from "./grafica.js";


export default{
    showAll(){
        resultados.renderDataWorker();
        formulario.renderDataWorker();
        ingresos.renderDataWorker();
        egresos.renderDataWorker();
        grafica.initCharts();
    }

}