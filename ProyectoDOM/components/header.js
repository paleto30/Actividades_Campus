export default {
    title: {
        name: "GNU / LINUIX",
        href: "https://www.gnu.org/gnu/linux-and-gnu.es.html"
    },
    distros: [
        {
            name: "Debian",
            href: "https://www.debian.org/index.es.html"
        },
        {
            name: "Slackware",
            href: "https://slackware-es.com/#google_vignette"
        },
        {
            name: "Mandrake",
            href: "https://www.redhat.com/es"
        },
        {
            name: "CentOS",
            href: "https://www.centos.org/"
        },
        {
            name: "Ubuntu",
            href: "https://ubuntu.com/download"
        },
        {
            name: "ArchLinux",
            href: "https://archlinux.org/"
        },
        {
            name: "Fedora",
            href: "https://getfedora.org/es/"
        },
        {
            name: "KaliLinux",
            href: "https://www.kali.org/"
        }
    ],
    /* listTile(){
        document.querySelector("#title").insertAdjacentHTML("beforeend",
        `<a class="blog-header-logo text-dark" target="_blank" href="${this.title.href}">${this.title.name}</a>`
        )
    }, */
    fragmenShow(){
        const ws = new Worker("./storage/wsMyHeader.js",{type:"module"});
        //enviamos un mensaje al worker
        // le estamos enviando el nombre del modulo y los datos de distros
        
        let select = ["#title","#menu"]; 
        let count = 0;
        ws.postMessage({module:"listTile", data:this.title});
        ws.postMessage({module:"listDistro", data:this.distros});
        
        // recibimos el retorno del worker
        ws.addEventListener("message",(e)=>{

            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(select[count]).append(...doc.body.children)
            (select.length-1 == count) ? ws.terminate() : count++

        })
    }
}
