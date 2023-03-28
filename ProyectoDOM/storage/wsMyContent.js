
let wsMyContent = {

    showNotice(params) {
       return `
            <h3 class="pb-4 mb-4 fst-italic border-bottom">${params.text}</h3>
        `
    },
   /*  bloqueUno(params) {
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
    }, */

} 

self.addEventListener("message",(e)=>{
    postMessage(wsMyContent[e.data.module](e.data.data))
})