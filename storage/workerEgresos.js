import funciones from "../funciones/funciones.js";
let workerEgresos = {

    showEstructure(data) {
        let thead = data.structTable.map((v,k)=>{
            return ` <th scope="col" class="text-center align-midle">${v.col}</th>`
        })
        let totalEgr = 0; 
        data.body.forEach(el => {
            totalEgr += el.valor
        });
        let registros = data.body.map((v,k)=> `
        <tr>
            <td scope="row" class="text-center align-midle">${v.descripcion}</td>
            <td class="text-danger-emphasis text-center align-midle">$ ${funciones.convertirMoneda(v.valor)}  <span class="badge bg-secondary">${funciones.porcentajes(totalEgr,v.valor)}<samp>%</samp> </span></td>
            <td class="text-center align-midle">
                <button type="button" class="btn btn-danger borrar" data-registro="${v.id}" ><i class="fa-solid fa-trash-can borrar" data-registro="${v.id}"></i></button>
            </td>
        </tr>
        `)
        return `
        <div class="accordion accordion-flush ancho" id="accordionFlushEgresos">
            <div class="accordion-item">
                <h2 class="accordion-header " id="flush-headingOne">
                    <button class="accordion-button collapsed border text-danger-emphasis" type="button"
                        data-bs-toggle="collapse" data-bs-target="#Egresos" aria-expanded="false"
                        aria-controls="Egresos">
                        ${data.nameTable}
                    </button>
                </h2>
                <div id="Egresos" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushEgresos">
                    <div class="accordion-body">
                        <table class="table ">
                            <thead>
                                <tr>
                                    ${thead.join("")}    
                                </tr>
                            </thead>
                            <tbody class="hoverTable">
                               ${registros.join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        `
    }
}

self.addEventListener("message", (e) => {
    let result = workerEgresos.showEstructure(e.data);
    postMessage(result);
})