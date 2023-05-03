let pathname  = new URL(import.meta.url).pathname;
let name = pathname.split("/").pop().replace(".js","");

export default class myFooter extends HTMLElement{

    static async components(){
        return await ( await fetch(pathname.replace(".js",".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
        })  
    }
}

customElements.define(name, myFooter);