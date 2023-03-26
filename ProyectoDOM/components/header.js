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
    listTile(){
        document.querySelector("#title").insertAdjacentHTML("beforeend",
        `<a class="blog-header-logo text-dark" target="_blank" href="${this.title.href}">${this.title.name}</a>`
        )
    },
    listDistro(){
        let plantilla = "";
        this.distros.forEach(element => {
            plantilla += `<a class="p-2 link-secondary itemss" target="_blank" href="${element.href}">${element.name}</a>`
        });
        document.querySelector("#menu").insertAdjacentHTML("beforeend",plantilla);
    }, 
}
