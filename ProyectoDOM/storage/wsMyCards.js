
let wsMyCards = {

    listCards(data){
        let html = "";
        data.forEach(e => {
            html += `
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${e.use}</strong>
                <h3 class="mb-0">${e.featured}</h3>
                <div class="mb-1 text-muted">${e.date}</div>
                <p class="card-text mb-auto">${e.text}</p>
                <a href="${e.more}" class="stretched-link" target="_blank" >Leer mas</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src="${e.image}" class="postImg" >
              </div>
            </div>
          </div>
          `
        });
        return html;
    }
}

self.addEventListener("message",(e)=>{
    postMessage(wsMyCards[e.data.module](e.data.data))
})