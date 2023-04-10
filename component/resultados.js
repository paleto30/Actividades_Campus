import config from "../storage/config.js";

export default{

    renderDataWorker(){

        let datos = config.dataMyResultados();   // variable con la data principal
        localStorage.setItem("Registros",JSON.stringify([])); // setiamos en el local storage un array vacio
        let Registros = JSON.parse(localStorage.getItem("Registros")); // setiamos en la variable el array del localstorage

        const form = document.querySelector("#Form");  // selecion del formulario 
        form.addEventListener("submit",(e) => {  // evento de el formulario
            e.preventDefault();
            const data =  Object.fromEntries(new FormData(e.target));  
            let registro = {
                operacion: Number(data.operacion),
                descripcion: String(data.descripcion),
                valor: Number(data.valor)
            }
            Registros.unshift(registro); 
            form.reset();
            //console.log(Registros);
            localStorage.setItem("Registros", JSON.stringify(Registros));
            //console.log("registros fuera",Registros);
        })
        
        
        let regis = JSON.parse(localStorage.getItem("Registros"));
        datos = JSON.parse(localStorage.getItem("myResult"));
        //console.log(datos);
        const ws = new Worker("./storage/workerResult.js",{type:"module"});
        ws.postMessage({datos:datos, regi:regis});
        ws.addEventListener("message",(e)=>{
            e.preventDefault();
            document.querySelector("#CardData").innerHTML = e.data;
            ws.terminate();

        })

        
    }

}





