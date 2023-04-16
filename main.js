import {Lapiz} from "./class.js";

//  carga inicial del DOM
document.addEventListener("DOMContentLoaded",(e)=>{
    cargarDataInicial();
})

// number de la dimension dentro del spam
let inpRang = document.querySelector("#dimension");
inpRang.addEventListener("input",()=>{
    document.querySelector("#numero").innerHTML = inpRang.value;
})

// funcion que carga los valores preestablecidos
function cargarDataInicial() {
    let obj = new Lapiz({material:"Madera"});
    document.querySelector("#color").value = obj.getColor();
    document.querySelector("#dimension").value = obj.getDomension();
    document.querySelector("#numero").innerHTML = obj.getDomension(); 
    document.querySelector("#marca").value  = obj.getMarca();
    setRadio("borrador",Number(obj.getBorrador()));
    setRadio("material",obj.getMaterial());

    document.querySelector("#bodyT").insertAdjacentHTML("beforeend",`
    <tr>
        <th class="text-center" scope="row" style="background-color:${obj.getColor()}">${obj.getColor()}</th>
        <td class="text-center">${obj.getDomension()}</td>
        <td class="text-center">${obj.getMarca()}</td>
        <td class="text-center">${obj.getBorrador() ? "Tiene": "No tiene"}</td>
        <td class="text-center">${obj.getMaterial()}</td>
    </tr>
    `)
}

function setRadio(name,valor) {
    document.querySelectorAll(`input[name=${name}]`).forEach( element => {
        if (element.value == valor) {
            element.checked = true
        }
    });
}

const formu  = document.querySelector("#forms");
formu.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let lapiz = new Lapiz({
        color: data.color,
        dimension: data.dimension,
        marca: data.marca,
        borrador: Number(data.borrador),
        material:data.material
    });
    
    document.querySelector("#bodyT").insertAdjacentHTML("beforeend",`
    <tr>
        <th class="text-center" scope="row" style="background-color:${lapiz.getColor()}">${lapiz.getColor()}</th>
        <td class="text-center">${lapiz.getDomension()}</td>
        <td class="text-center">${lapiz.getMarca()}</td>
        <td class="text-center">${lapiz.getBorrador() ? "Tiene" : "No tiene"}</td>
        <td class="text-center">${lapiz.getMaterial()}</td>
    </tr>
    `)
})