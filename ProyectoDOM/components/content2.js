export default{
   parteUno:{
        title:"Sistemas Linux más utilizados en la actualidad",
        date: "Marzo 25, 2023 by",
        author:{
            name:"Andres Galvis",
            href:"https://github.com/paleto30"
        },
        text:" Linux es un sistema operativo de código abierto que ha ganado popularidad en los últimos años debido a su flexibilidad, estabilidad y seguridad. En este sentido, hemos recopilado una lista de los sistemas Linux más utilizados en la actualidad, junto con la cantidad aproximada de usuarios, así como también una clasificación según si se utilizan principalmente para % Para Desarrollo o para % Para Tareas Comunes. La siguiente tabla presenta esta información de forma clara y concisa para ayudarte a conocer mejor los sistemas Linux más populares y su uso actual en la comunidad."
   },
   tabla:[
    {
        "Sistema Linux": "Ubuntu",
        "Cantidad de usuarios aproximados": 40000000,
        "% Para Desarrollo": 0.6,
        "% Para Tareas Comunes": 0.4,
        "Usuarios  desarrollo": 24000000,
        "Usuarios Tareas comunes": 16000000
      },
      {
        "Sistema Linux": "Debian",
        "Cantidad de usuarios aproximados": 5000000,
        "% Para Desarrollo": 0.5,
        "% Para Tareas Comunes": 0.5,
        "Usuarios  desarrollo": 2500000,
        "Usuarios Tareas comunes": 2500000
      },
      {
        "Sistema Linux": "Fedora",
        "Cantidad de usuarios aproximados": 1200000,
        "% Para Desarrollo": 0.7,
        "% Para Tareas Comunes": 0.3,
        "Usuarios  desarrollo": 840000,
        "Usuarios Tareas comunes": 360000
      },
      {
        "Sistema Linux": "CentOS",
        "Cantidad de usuarios aproximados": 1000000,
        "% Para Desarrollo": 0.4,
        "% Para Tareas Comunes": 0.6,
        "Usuarios  desarrollo": 400000,
        "Usuarios Tareas comunes": 600000
      },
      {
        "Sistema Linux": "Linux Mint",
        "Cantidad de usuarios aproximados": 800000,
        "% Para Desarrollo": 0.3,
        "% Para Tareas Comunes": 0.7,
        "Usuarios  desarrollo": 240000,
        "Usuarios Tareas comunes": 560000
      },
      {
        "Sistema Linux": "Arch Linux",
        "Cantidad de usuarios aproximados": 600000,
        "% Para Desarrollo": 0.8,
        "% Para Tareas Comunes": 0.2,
        "Usuarios  desarrollo": 480000,
        "Usuarios Tareas comunes": 120000
      },
      {
        "Sistema Linux": "openSUSE",
        "Cantidad de usuarios aproximados": 400000,
        "% Para Desarrollo": 0.6,
        "% Para Tareas Comunes": 0.4,
        "Usuarios  desarrollo": 240000,
        "Usuarios Tareas comunes": 160000
      },
      
   ],
   renderWorkerData(){
      const ws = new Worker('storage/wsMyContent2.js',{type:"module"});
      let data = [this.parteUno,this.tabla];
      ws.postMessage({datos:data});
      ws.addEventListener("message",(e)=>{
        let {part1, ths, data} = e.data;
        document.querySelector("#intro").insertAdjacentHTML("beforeend",part1); 
        document.querySelector("#tablaH").insertAdjacentHTML("beforeend",ths.join(""));
        document.querySelector("#tablaB").insertAdjacentHTML("beforeend",data.join(""));      
      });
    },
}