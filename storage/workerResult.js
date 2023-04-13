import funciones from "../funciones/funciones.js";

let resultados = {
    
    showInfos(datos) {
        return `
        <h3 class="card-title mt-3 mt-sm-4">${datos[0].text}</h3>
        <h1 class="card-title " id="PresupuestoVal"><span>$</span>${funciones.convertirMoneda(datos[0].valor)} <span class="badge bg-info">${funciones.convertirMoneda(datos.porciento2)}<samp>%</samp></samp></h6>
            <div class="card-body text-center ">
                <div class="d-flex justify-content-between align-items-center  my-2 text-info">
                    <h4 class="textos">${datos[1].text}</h4>
                    <h4 class="textos">
                        <span>$</span>
                        <label id="valIngreso">${funciones.convertirMoneda(datos[1].valor)}</label>
                        <span class="badge bg-info">100<samp>%</samp></samp>
                    </h4>
                </div>
                <div class="d-flex justify-content-between align-items-center text-danger-emphasis">
                    <h4 class="textos">${datos[2].text}</h4>
                    <h4 class="textos">
                        <span>$</span> 
                        <span id="valEgreso"> ${funciones.convertirMoneda(datos[2].valor)}</span>
                        <span class="badge bg-danger">${funciones.convertirMoneda(datos.porciento1)}<samp>%</samp> </span>
                    </h4>
                </div>
                <div></div>
            </div>
        `
    },
}

self.addEventListener("message", (e) => {
    let objeto = e.data.page.dataR;
    let registro = e.data.registro;
    const registroIngreso = []; 
    const registroEgreso = []; 
    registro.forEach(element => {
        (element.operacion) ? registroIngreso.unshift(element) : registroEgreso.unshift(element);
    });

    let presupuesto = objeto[0].valor;
    let ingresos = objeto[1].valor;
    let egresos = objeto[2].valor;

    registroIngreso.forEach((v , k)=>{
        ingresos += v.valor 
    })    
    registroEgreso.forEach((v , k)=>{
        egresos += v.valor 
    })  
    presupuesto = ingresos-egresos;

    objeto[0].valor = presupuesto;
    objeto[1].valor = ingresos;
    objeto[2].valor = egresos; 
    
    objeto["porciento1"] = funciones.porcentajes(ingresos,egresos);
    objeto["porciento2"] = funciones.porcentajes(ingresos,presupuesto); 
    let datosResult = resultados.showInfos(objeto);
    postMessage(datosResult);
});
