import config from "../storage/config.js";

export default{

    renderDataWorker(){
        const datos = config.dataMyResultados();
        let Registros = config.registros; 
        const form = document.querySelector("#Form");  
        form.addEventListener("submit",(e) => {  
            e.preventDefault();
            const data =  Object.fromEntries(new FormData(e.target));  
            let registro = {
                operacion: Number(data.operacion),
                descripcion: String(data.descripcion),
                valor: Number(data.valor)
            }
            
            Registros.unshift(registro); 
            form.reset();
            localStorage.setItem("Registros", JSON.stringify(Registros));
        })
        


        const ws = new Worker("./storage/workerResult.js",{type:"module"});
        ws.postMessage({page:datos,registro:Registros});
        ws.addEventListener("message",(e)=>{
            e.preventDefault();
            let send = document.querySelector("send");
            send.addEventListener("click",()=>{
                
            })
            document.querySelector("#CardData").innerHTML = e.data;
            ws.terminate();

        })

        
    }

}





