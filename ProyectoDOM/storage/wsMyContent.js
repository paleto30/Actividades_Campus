
let wsMyContent = {

    showNotice(params) {
       return `
            <h3 class="pb-4 mb-4 fst-italic border-bottom">${params.text}</h3>
        `
    },
     bloqueUno(params) {
        let data = params.bloque_uno.map((val, id) => {
            return `
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.date} <a target="_blank" href="${val.href}">${val.author}</a></p>
            <p>${val.text}</p>
            <p>${val.resume}</p>
            <img src="${val.img}" class="img-fluid">
            <hr>
            `
        })
        return data.join("");
    }, 
    bloqueDos(params) {
        let data = `
            <h2>${params.bloque_dos.title}</h2>
            <div style="display: flex; justify-content: center;">
              <img src="${params.bloque_dos.img}" class="img-fluid" width="400px">
            </div><br>
            <blockquote class="blockquote">
              <p>${params.bloque_dos.block}</p>
            </blockquote>
            <p style="text-align: justify;">${params.bloque_dos.p1} <br><br>
                ${params.bloque_dos.p2} <br><br> ${params.bloque_dos.p3}
            </p>
            `;
        return data;
    },

    bloqueTres(params){
        let title = `
            <h2>${params.bloque_tres.seccion.title}</h2>
            <p><strong>Ventajas:</strong></p>
        `;
        let dataV = params.bloque_tres.ventajas.map(elemen =>{
                return `
                <ul>
                    <li><strong> ${elemen.ventage}:</strong> ${elemen.explained}</li>
                </ul>
                `        
        })
        let dataD = params.bloque_tres.desventaja.map(elemen =>{
            return `
            <ul>
                <li><strong> ${elemen.disadventage}:</strong> ${elemen.explained}</li>
            </ul>
            `
        })
        let title2 = `<p><strong>Desventajas:</strong></p>`;

        let datosListos ={
            title,
            dataV,
            dataD,
            title2
        }
        return datosListos;
    } 

} 

self.addEventListener("message",(e)=>{
    let { data } = e.data;
    let noticia = wsMyContent.showNotice(data[0]);
    let bloque1 = wsMyContent.bloqueUno(data[1]);
    let bloque2 = wsMyContent.bloqueDos(data[1]);
    let bloque3 = wsMyContent.bloqueTres(data[1]);
    let obj = {
        noticia,bloque1,bloque2,bloque3
    }
    postMessage(obj);
})