export default{
    dataR:[
        {
            text:"Presupuesto",
            valor:2312313
        },
        {
            text:"INGRESOS",
            valor:2000000
        },
        {   
            text:"EGRESOS",
            valor:0
        }
    ],

    renderDataWorker(){
        const ws = new Worker("./storage/worker.js",{type:"module"});
        ws.postMessage(this.dataR);
        ws.addEventListener("message",(e)=>{

            document.querySelector("#CardData").innerHTML = e.data;
            ws.terminate();
        })
    }

}





