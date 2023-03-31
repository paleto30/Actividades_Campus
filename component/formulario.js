export default{

    dataF:{
        operacion:[
            {
                value:true,
                text:"+"
            },
            {
                value:false,
                text:"-"
            }
        ],
        descripcion:{
            name:"descripcion",
            placeholder:"Agregar Descripcion de movimineto",
        },

        valor:{
            name: "valor",
            placeholder:"$0",
            value: 0
        }
    },

    renderDataWorker(){
        const ws = new Worker("./storage/workerForm.js", {type:"module"});
        ws.postMessage(this.dataF);
        ws.addEventListener("message",(e)=>{
            console.log(e.data);
        });
    }
}