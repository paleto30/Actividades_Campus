import config from "../storage/config.js";

export default{

    renderDataWorker(){
        const datos = config.dataMyResultados();
        const ws = new Worker("./storage/workerResult.js",{type:"module"});
        ws.postMessage({page:datos,registro:config.registros});
        ws.addEventListener("message",(e)=>{
            document.querySelector("#CardData").innerHTML = e.data;
            ws.terminate();
        })
        
        
        
    }

}





