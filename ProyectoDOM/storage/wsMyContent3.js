let wsMyContent3 = {

    showInfos(params){
        let titles = `
            <h2 class="blog-post-title">${params.title}</h2>
            <p class="blog-post-meta">${params.by.date} by <a target="_blank" href="${params.by.href}">${params.by.author}</a></p>
            <p>${params.intro}</p>
        `;
        let data = params.new.feature.map((v,k)=>{
            return `
            <li>${v.text}</li>
            `
        })
        data = data.join("");

        let object = {
            titles,
            data
        }
        return object;
    }
}


self.addEventListener("message",(e)=>{
    const {datos} = e.data;
    let articulo2 = wsMyContent3.showInfos(datos);
    postMessage(articulo2);
})