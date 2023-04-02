import config from "../storage/config.js";

export default{
    renderDataWorker(){
        config.dataMyTableEgresos();
        Object.assign(this, JSON.parse(localStorage.getItem("myEgresos")));
        const ws = new Worker("./storage/workerEgresos.js",{type:"module"});
        ws.postMessage(this.dataE);
        ws.addEventListener("message",(e)=>{
            document.querySelector("#Egresost").innerHTML = e.data;
            ws.terminate();
        })
    }

}