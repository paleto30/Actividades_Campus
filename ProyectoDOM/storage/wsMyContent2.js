let wsMyContent2 = {

    showInfo(params){
        let part1 =  `
            <h2 class="blog-post-title">${params[0].title}</h2>
            <p class="blog-post-meta">${params[0].date} <a target="_blank" href="${params[0].author.href}">${params[0].author.name}</a></p>
            <p>${params[0].text}</p>
        `;
        const claves = Object.keys(params[1][0]) 
        let ths = claves.map(element=>{
            return `
                <th>${element}</th>
            `
        }) 
        let data = params[1].map((v,k)=>{
            return `
            <tr>
                <td>${v["Sistema Linux"]}</td>
                <td>${v["Cantidad de usuarios aproximados"]}</td>
                <td>${v["% Para Desarrollo"]*100}%</td>
                <td>${v["% Para Tareas Comunes"]*100}%</td>
                <td>${v["Usuarios  desarrollo"]}</td>
                <td>${v["Usuarios Tareas comunes"]}</td>
            </tr>
            `;
        }); 
        let proccess = {
            part1,ths,data
        }
        return proccess;
       }
}

self.addEventListener("message",(e)=>{
    let { datos } = e.data; 
    let intro = wsMyContent2.showInfo(datos);
    postMessage(intro);
})