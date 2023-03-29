import config from "../storage/config.js";
export default {
    renderWorkerData(){
        config.dataMyContent();
        Object.assign(this, JSON.parse(localStorage.getItem("myContent")));
        const ws = new Worker('storage/wsMyContent.js',{type:"module"});
        let data =[this.notice, this.article1] 
        ws.postMessage({data:data}); 
        ws.addEventListener("message",(e) => {
            let {noticia, bloque1, bloque2, bloque3} = e.data;
            document.querySelector("#content").insertAdjacentHTML("beforeend",noticia);
            document.querySelector("#bloqueUno").insertAdjacentHTML("beforeend",bloque1);
            document.querySelector("#bloqueDos").insertAdjacentHTML("beforeend",bloque2);
            document.querySelector("#bloqueTres").insertAdjacentHTML("beforeend",`${bloque3.title}${(bloque3.dataV).join("")}${(bloque3.title2)}${(bloque3.dataD).join("")}`);
            ws.terminate();
        })
    },
}

