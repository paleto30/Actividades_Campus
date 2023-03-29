import config from "../storage/config.js";
export default{
    renderWorkerData(){
        config.dataMyFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("myFooter")));
        const ws = new Worker("storage/wsMyFooter.js", {type:"module"});
        ws.postMessage(this.data);
        ws.addEventListener("message",(e)=>{
            document.querySelector("#pies").insertAdjacentHTML("beforeend",e.data);
            ws.terminate();
        })
    }
}