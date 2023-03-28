let wsMyAside = {
    showAside(datos){
        const data = datos.map((val,id)=>{
            return(
                (val.links)
                ? this.archive(val)
                : this.cards(val)
            )
        }) 
        return data;
    },
    cards(params){
        return `
        <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">${params.title}</h4>
            <p class="mb-0">${params.text}</p>
        </div>
        `
    },
    archive(params){
        return `
        <div class="p-4">
        <h4 class="fst-italic">${params.title}</h4>
        <ol class="list-unstyled mb-0">
            ${params.links.map((val,id) => `<li><a target="_blank" href="${val.href}">${val.name}</a></li>`).join("")} 
        </ol>
      </div>
        `
    },
}

self.addEventListener("message",(e)=>{
    postMessage(wsMyAside[e.data.module](e.data.data))
})