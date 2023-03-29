import config from "../storage/config.js";

export default{
    renderWorkerData(){
        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));

        const ws = new Worker("storage/wsMyBanner.js",{type:"module"});
        let datos = [this.image,this.h1,this.p,this.more];
        ws.postMessage(datos);
        ws.addEventListener("message",(e)=>{
            let {text,img} = e.data;
            document.querySelector(".banner").style.backgroundImage = img;
            document.querySelector(".bannerContent").insertAdjacentHTML("beforeend",text);
            ws.terminate();
        });   
    }
}
