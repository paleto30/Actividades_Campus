import config from "../storage/config.js";

export default{
    renderDataWorker(){
        config.dataMyForm();
        Object.assign(this, JSON.parse(localStorage.getItem("myForm")));
        const ws = new Worker("./storage/workerForm.js", {type:"module"});
        ws.postMessage(this.dataF);
        ws.addEventListener("message",(e)=>{
            document.querySelector("#Form").innerHTML = e.data;
            ws.terminate();
        });
    }
}