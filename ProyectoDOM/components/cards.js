export default {
    data:[
        {
            use: "Sistema Operativo",
            featured:"Debian GNU/Linux",
            date: "23 mar",
            text: "Un sistema operativo libre, desarrollado por miles de voluntarios de todo el mundo, que colaboran a través de Internet.",
            more: "https://es.wikipedia.org/wiki/Debian_GNU/Linux",
            image: "./assets/img/debian2.jpg",
        },
        {
            use: "Sistema Operativo",
            featured:"Arch Linux",
            date: "23 mar",
            text: "una distribución de Linux® liviana y flexible que intenta mantenerlo simple.",
            more: "https://archlinux.org/",
            image: "./assets/img/archs.jpg",
        },
        {
            use: "Sistema Operativo",
            featured:"Fedora",
            date: "22 mar",
            text: "Fedora siempre es libre para que cualquiera lo use, modique, y distribuya.",
            more: "https://getfedora.org/es/",
            image: "./assets/img/fedora.jpg",
        },
        {
            use: "Sistema Operativo",
            featured:"Ubuntu",
            date: "21 mar",
            text: "Ubuntu es una distribución Linux basada en Debian GNU/Linux, que incluye principalmente software libre y de código abierto.",
            more: "https://ubuntu.com/download",
            image: "./assets/img/ubuntu-logo6.png",
        },
        {
            use: "Sistema Operativo",
            featured:"Kali Linux",
            date: "21 mar",
            text: "Kali Linux es una distribución de Linux orientada a diversas tareas de seguridad de la información, como pruebas de penetración, investigación de seguridad, informática forense e ingeniería inversa.",
            more: "https://www.kali.org",
            image: "./assets/img/kalitools.jpg",
        },
    ],   
    listCards(){
        let html = "";
        this.data.forEach(e => {
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
        document.querySelector(".cardsSystems").insertAdjacentHTML("beforeend",html);
    }
}