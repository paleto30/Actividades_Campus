
let resultados = {

    showInfos(datos) {
        let config = new Intl.NumberFormat("de-De", { minimumFractionDigits: 2 });
        return `
        <h5 class="card-title mt-3 mt-sm-4">${datos[0].text}</h5>
        <h2 class="card-title " id="PresupuestoVal"><span>$</span>${config.format(datos[0].valor)}</h6>
            <div class="card-body text-center ">
                <div class="d-flex justify-content-between align-items-center  my-2">
                    <h5>${datos[1].text}</h5>
                    <h5>
                        <span>$</span>
                        <label id="valIngreso">${config.format(datos[1].valor)}</label>
                        <span class="badge bg-info"><samp>%</samp></samp>
                    </h5>
                </div>
                <div class="d-flex justify-content-between align-items-center ">
                    <h5>${datos[2].text}</h5>
                    <h5>
                        <span>$</span> 
                        <span id="valEgreso"> ${config.format(datos[2].valor)}</span>
                        <span class="badge bg-info"><samp>%</samp> </span>
                    </h5>
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
        console.log(element);
    });
    

    //console.log(objeto[0].valor =12);
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
    
    let datosResult = resultados.showInfos(objeto);
    postMessage(datosResult);
});
