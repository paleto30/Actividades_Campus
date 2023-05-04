let pathname = new URL(import.meta.url).pathname;
let name = pathname.split("/").pop().replace(".js","");


export default class mySelect  extends HTMLElement{

    static async components(){
        return await (await fetch(pathname.replace(".js",".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    handleEvent(e){
        (e.type == 'click') ? this.enviarWorker(e) : undefined;
    }

    enviarWorker(e){
        console.log("Me ha tocado el ombligo el",e.pointerType);
        e.preventDefault();
    }

    connectedCallback(){
        Promise.resolve(mySelect.components()).then( html =>{
            this.shadowRoot.innerHTML = html;
            this.shadowRoot.querySelector(".btn").addEventListener("click",this.handleEvent.bind(this))
        })
    }


}


customElements.define(name, mySelect);