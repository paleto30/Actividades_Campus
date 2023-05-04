import config from "../config/config.js";

export default class myFooter extends HTMLElement{

    static url = import.meta.url
    static async components(){
        return await ( await fetch(config.uri(myFooter.url))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    handleEvent(e){
        (e.type == 'click') ? this.enviarWorker(e) : undefined;
    }

    enviarWorker(e){
        console.log("Me ha tocado el pie el",e.pointerType);
        e.preventDefault();
    }

    connectedCallback(){
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.Myform = this.shadowRoot.querySelector(".btn");
            this.Myform.addEventListener("click",this.handleEvent.bind(this))
        })  
    }
}

customElements.define(config.name(myFooter.url), myFooter);