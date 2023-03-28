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
    showRenderWorker(){

        const ws = new Worker('storage/wsMyCards.js',{type:"module"})
        ws.postMessage({module:"listCards",data:this.data})

        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html").body;
            document.querySelector(".cardsSystems").append(...doc.children);
        })
    }   
}