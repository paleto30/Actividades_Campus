export default{
    image: "./assets/img/banner.jpg",
    h1: "Linux® es un sistema operativo (SO) open source.",
    p: " El sistema operativo es el software que gestiona directamente el hardware de un sistema y sus recursos, como la CPU, la memoria y el almacenamiento. Se encuentra entre las aplicaciones y el hardware, y establece las conexiones entre todos los sistemas de software y los recursos físicos que ejecutan las tareas.",
    more:{
        name:"Continue reading...",
        href: "https://www.redhat.com/es/topics/linux/what-is-linux"
    },
    listBanner(){
        document.querySelector(".banner").style.backgroundImage = `url(${this.image})`;
        document.querySelector(".bannerContent").insertAdjacentHTML("beforeend",
            `
            <h1 class="display-4 fst-italic">${this.h1}</h1>
            <p class="lead my-3">${this.p}</p>
            <p class="lead mb-0"><a href="${this.more.href}" class="text-white fw-bold"> ${this.more.name}</a></p>
            
            `
        )
    }
}
