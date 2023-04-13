import funciones from "../funciones/funciones.js"

let workerIngresos = {

    showEstructur(data){
        let thead = data.StructTable.map((v,k)=>{
            return ` <th scope="col" class="text-center align-midle">${v.col}</th>`
        })
        
        let totalIng = 0; 
        data.body.forEach(el => {
            totalIng += el.valor
        });
        let registros = data.body.map((v,k)=> `
        <tr>
            <td scope="row" class="text-center align-midle">${v.descripcion}</td>
            <td class="text-info text-center align-midle">$ ${funciones.convertirMoneda(v.valor)} <span class="badge bg-secondary">${funciones.porcentajes(totalIng,v.valor)}<samp>%</samp> </span></td>
            <td class="text-center align-midle">
                <button type="button" class="btn btn-danger  borrar" data-registro="${v.id}" ><i class="fa-solid fa-trash-can borrar" data-registro="${v.id}"></i></button>
            </td>
        </tr>
        `)
         return`
         <div class="accordion accordion-flush ancho" id="accordionFlushIngresos">
         <div class="accordion-item">
             <h2 class="accordion-header " id="flush-headingOne">
                 <button class="accordion-button collapsed border text-primary " type="button"
                     data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                     aria-controls="flush-collapseOne">
                     ${data.nameTable}
                 </button>
             </h2>
             <div id="flush-collapseOne" class="accordion-collapse collapse"
                 aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushIngresos">
                 <div class="accordion-body">
                     <table class="table">
                         <thead>
                             <tr>
                                 ${thead.join(" ")}
                             </tr>
                         </thead>
                         <tbody class="hoverTable" id="registrosD">
                            ${registros.join("")}
                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
     </div>`   
    }
}

self.addEventListener("message",(e)=>{
    let data = workerIngresos.showEstructur(e.data);
    postMessage(data);
})