import config from "../storage/config.js";

export default {
    renderWorkerData(){  
        config.dataMyAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")));
        const ws = new Worker('storage/wsMyAside.js',{type:"module"});
        ws.postMessage({module:"showAside", data:this.nav});
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html").body;
            document.querySelector("#nav").append(...doc.children);
            ws.terminate();
        })
    }

}
