import config from "../storage/config.js";
export default{
    renderWorkerData(){
        config.dataMyContent3();
        Object.assign(this,JSON.parse(localStorage.getItem("myContent3")));
        const ws =  new Worker("storage/wsMyContent3.js",{type:"module"});
        ws.postMessage({datos: this.post});
        ws.addEventListener("message",(e)=>{
            document.querySelector("#articulo2").insertAdjacentHTML("afterbegin",e.data.titles);
            document.querySelector("#features").insertAdjacentHTML("afterbegin",e.data.data);
            ws.terminate();
        })
    }
}