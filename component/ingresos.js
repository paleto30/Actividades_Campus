import config from "../storage/config.js";

export default{
    renderDataWorker(){
        config.dataMyTableIngresos();
        Object.assign(this, JSON.parse(localStorage.getItem("myIngresos")));
        const ws = new Worker("./storage/workerIngresos.js",{type:"module"});
        ws.postMessage(this.data);
        ws.addEventListener("message",(e)=>{
            //console.log(e.data);
            document.querySelector("#Ingresost").innerHTML = e.data;
            ws.terminate();
        })
    }


}