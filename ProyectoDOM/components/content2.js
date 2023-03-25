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
      }
   ],

   showInfo(){
    document.querySelector("#intro").insertAdjacentHTML("beforeend",
        `
        <h2 class="blog-post-title">${this.parteUno.title}</h2>
        <p class="blog-post-meta">${this.parteUno.date} <a target="_blank" href="${this.parteUno.author.href}">${this.parteUno.author.name}</a></p>
        <p>${this.parteUno.text}</p>
        `
    );
    const claves = Object.keys(this.tabla[0]) 
    let ths = claves.map(element=>{
        return `
            <th>${element}</th>
        `
    }) 
    document.querySelector("#tablaH").insertAdjacentHTML("beforeend",ths.join(" "));

    let data = this.tabla.map((v,k)=>{
        return `
        <tr>
            <td>${v["Sistema Linux"]}</td>
            <td>${v["Cantidad de usuarios aproximados"]}</td>
            <td>${v["% Para Desarrollo"]*100}%</td>
            <td>${v["% Para Tareas Comunes"]*100}%</td>
            <td>${v["Usuarios  desarrollo"]}</td>
            <td>${v["Usuarios Tareas comunes"]}</td>
        </tr>
        `;
    }); 
     console.log(data);
     document.querySelector("#tablaB").insertAdjacentHTML("beforeend",data.join(" "));
    
   }

}