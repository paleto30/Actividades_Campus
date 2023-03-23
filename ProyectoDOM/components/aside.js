export default {

    nav:[
        {
            title: "About",
            text: "Los sistemas operativos GNU/Linux se encuentran normalmente en forma de compendios conocidos como distribuciones o distros.​ Entre las más populares se encuentran Debian, Ubuntu, Red Hat y SUSE. El propósito de estas distribuciones es ofrecer GNU/Linux como un producto final para instalar o probar en un ordenador, cubriendo una gama de necesidades que van desde el uso cotidiano personal hasta aplicaciones muy específicas en ambientes especializados."
        },
        {
            title:"Distros mas usadas",
            links:[
                {
                    name:"Debian",
                    href:"https://www.debian.org/download"
                },
                {
                    name:"Red Hat",
                    href:"https://access.redhat.com/downloads"
                },
                {
                    name:"Ubuntu",
                    href:"https://ubuntu.com/download/desktop"
                },
                {
                    name:"Arch Linux",
                    href:"https://archlinux.org/download/"
                },
                {
                    name:"Fedora",
                    href:"https://getfedora.org/es/workstation/download/"
                },
                {
                    name:"Linux Mint",
                    href:"https://linuxmint.com/download.php"
                },
                {
                    name:"Pop! OS",
                    href:"https://pop.system76.com/"
                },
                {
                    name:"CentOS",
                    href:"https://www.centos.org/download/"
                },
                {
                    name:"Linux Lite",
                    href:"https://www.linuxliteos.com/download.php#requirements"
                },
                {
                    name:"SUSE",
                    href:"https://www.suse.com/es-es/products/"
                },
                {
                    name:"Zorin OS",
                    href:"https://zorin.com/os/download/"
                },
                {
                    name:"Manjaro",
                    href:"https://manjaro.org/download/"
                },
                {
                    name:"Archcraft",
                    href:"https://archcraft.io/download.html"
                },
                {
                    name:"Kubuntu",
                    href:"https://kubuntu.org/getkubuntu/"
                },
                {
                    name:"Elementary OS",
                    href:"https://elementary.io/es/"
                },
                {
                    name:"Parrot OS",
                    href:"https://www.parrotsec.org/download/"
                },
                {
                    name:"Kali Linux",
                    href:"https://www.kali.org/get-kali/"
                },

            ]
        },
        {
            title: "Contacto Admin",
            links: [
                {
                    name: "Git hub",
                    href: "https://github.com/paleto30"
                }
            ]
        },
    ],

    showAside(){
        const data = this.nav.map((val,id)=>{
            return (
                (val.links)
                ? this.archive(val)
                : this.cards(val)
            )
        });
        document.querySelector("#nav").insertAdjacentHTML("beforeend",data.join(""));

    },

    cards(element){
        return `
        <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">${element.title}</h4>
            <p class="mb-0">${element.text}</p>
        </div>
        `
    },

    archive (element){
        return `
        <div class="p-4">
        <h4 class="fst-italic">${element.title}</h4>
        <ol class="list-unstyled mb-0">
            ${element.links.map((val,id) => `<li><a target="_blank" href="${val.href}">${val.name}</a></li>`).join("")} 
        </ol>
      </div>
        `
    }

}