import config from "../storage/config.js";

export default{

    renderDataWorker(){
        config.dataMyResultados();
        let datos = JSON.parse(localStorage.getItem("myResult"));
        //console.log(datos);
        let Registros = [];
        const form = document.querySelector("#Form");
        form.addEventListener("submit",(e) => {
            e.preventDefault();
            const data =  Object.fromEntries(new FormData(e.target));  
            let registro = {
                operacion: Number(data.operacion),
                descripcion: String(data.descripcion),
                valor: Number(data.valor)
            }
            Registros.unshift(registro)
            form.reset();
        })
        const ws = new Worker("./storage/workerResult.js",{type:"module"});
        ws.postMessage({base:datos , data:Registros});
        ws.addEventListener("message",(e)=>{
            document.querySelector("#CardData").innerHTML = e.data;
            ws.terminate();
        })

        
    }

}





