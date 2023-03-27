
let wsMyHeader = {

    listTile(title){
        return `<a class="blog-header-logo text-dark" target="_blank" href="${title.href}">${title.name}</a>`
    },

    listDistro(distros){
        let plantilla = "";
        distros.forEach(element => {
            plantilla += `<a class="p-2 link-secondary itemss" target="_blank" href="${element.href}">${element.name}</a>`
        });
        return plantilla;
    },

    


}


self.addEventListener("message",(e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data))
})