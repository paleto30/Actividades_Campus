let wsMyBanner = {
    listBanner(datos){
        let text = `
            <h1 class="display-4 fst-italic">${datos[1]}</h1>
            <p class="lead my-3">${datos[2]}</p>
            <p class="lead mb-0"><a href="${datos[3].href}" class="text-white fw-bold"> ${datos[3].name}</a></p>
            `;
        let img = `url(${datos[0]})`;
        let obj = {text,img}
        return obj;
    }
};
self.addEventListener("message",(e)=>{
    postMessage(wsMyBanner.listBanner(e.data))
});