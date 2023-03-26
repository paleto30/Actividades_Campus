export default{
    data:{
        creator:{
            text:"Blog Creado por ",
            author:{
                name:"Andres F Galvis",
                href:"https://github.com/paleto30"
            }
        },
        copy:"Copyright © todos los derechos reservados",
        topPage:"Regresar Arriba"
    },
    showData(){
        let data = `
        <p><a href="#">${this.data.topPage}</a></p>
        <p>${this.data.creator.text}<a target="_blank" href="${this.data.creator.author.href}">${this.data.creator.author.name}</a></p>
        <p>${this.data.copy}</p>
        `;
        document.querySelector("#pies").insertAdjacentHTML("beforeend",data)
    }
}