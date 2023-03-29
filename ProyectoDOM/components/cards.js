import config from "../storage/config.js"
export default {   
    showRenderWorker(){
        config.dataMyCards();
        Object.assign(this, JSON.parse(localStorage.getItem("myCards")));
        const ws = new Worker('storage/wsMyCards.js',{type:"module"})
        ws.postMessage({module:"listCards",data:this.data})

        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html").body;
            document.querySelector(".cardsSystems").append(...doc.children);
            ws.terminate();
        })
    }   
}