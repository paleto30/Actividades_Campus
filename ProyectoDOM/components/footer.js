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
    renderWorkerData(){
        const ws = new Worker("storage/wsMyFooter.js", {type:"module"});
        ws.postMessage(this.data);
        ws.addEventListener("message",(e)=>{
            document.querySelector("#pies").insertAdjacentHTML("beforeend",e.data);
            ws.terminate();
        })
    }
}