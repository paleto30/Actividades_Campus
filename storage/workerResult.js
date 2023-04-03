
let resultados = {

    showInfos(datos){
        let config = new Intl.NumberFormat("de-De",{minimumFractionDigits:2});
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

self.addEventListener("message",(e)=>{
    console.log(e.data.base.dataR);
    let datosResult = resultados.showInfos(e.data.base.dataR);
    postMessage(datosResult);
    //console.log(e.data);
});
