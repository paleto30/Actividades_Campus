import config from "../storage/config.js";

export default{
    renderDataWorker(){
        config.dataMyResultados();
        Object.assign(this, JSON.parse(localStorage.getItem("myResult")));
        const ws = new Worker("./storage/workerResult.js",{type:"module"});
        ws.postMessage(this.dataR);
        ws.addEventListener("message",(e)=>{
            document.querySelector("#CardData").innerHTML = e.data;
            ws.terminate();
        })
    }

}





