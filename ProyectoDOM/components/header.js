import config from "../storage/config.js";
export default {
    fragmenShow(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader"))); 
        
        const ws = new Worker("storage/wsMyHeader.js",{type:"module"});
        //enviamos un mensaje al worker
        // le estamos enviando el nombre del modulo y los datos de distros   
        let count = 0;
        ws.postMessage({module:"listTile", data:this.title});
        ws.postMessage({module:"listDistro", data:this.distros});
        let select = ["#title","#menu"];
        // devuelve el worker
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html").body;
            document.querySelector(`${select[count]}`).append(...doc.children);
            (select.length-1==count) ? ws.terminate() : count++;
        });
    }
}
