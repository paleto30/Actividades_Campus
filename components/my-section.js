let pathname = new URL(import.meta.url).pathname;
let name = pathname.split("/").pop().replace(".js", "");

export default class mySeccion extends HTMLElement{
    static async components(){
        return await ( await fetch(pathname.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(mySeccion.components()).then(html =>{
            this.shadowRoot.innerHTML = html;
        })
    }

    handleEvemt(e){
        (e.type == 'click') ? this.enviarWorker(e) : undefined;
    }

    enviarWorker(e){
        console.log("Me ha tocado la teta el",e.pointerType);
        e.preventDefault();
    }

    connectedCallback(){
        Promise.resolve(mySeccion.components()).then(html =>{
            this.shadowRoot.innerHTML = html;
            this.Myform = this.shadowRoot.querySelector(".btn");
            this.Myform.addEventListener('click',this.handleEvemt.bind(this))
        })
    }
}

customElements.define(name, mySeccion);