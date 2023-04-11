import config from "../storage/config.js";

export default{

    renderDataWorker(){
        const datos = config.dataMyResultados();
        let Registros = config.registros; 
        const form = document.querySelector("#Form");  
        form.addEventListener("submit",(e) => {  
            const data =  Object.fromEntries(new FormData(e.target));  
            let registro = {
                operacion: Number(data.operacion),
                descripcion: String(data.descripcion),
                valor: Number(data.valor)
            }
            Registros.unshift(registro); 
            form.reset();
            e.target.reset();
            e.preventDefault();
            localStorage.setItem("Registros", JSON.stringify(Registros));
            location.reload();
        })
        
        const ws = new Worker("./storage/workerResult.js",{type:"module"});
        ws.postMessage({page:datos,registro:Registros});
        ws.addEventListener("message",(e)=>{
            e.preventDefault();
            document.querySelector("#CardData").innerHTML = e.data;
            ws.terminate();
        })

        
    }

}





