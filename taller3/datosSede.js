


// selector 

let campus = {};
const formSede =  document.querySelector("#sede");



/* formulario de las sedes */
formSede.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombre}`]= {
        direccion:data.direccion,
        contacto:data.contacto,
        team:[],
        campers:[],
        trainers:[]
    }
    formSede.reset();
    //console.log(campus);
    const sedeTeam = document.querySelector("#tsedes");
    const trsedes = document.querySelector("#trSedes");
    const cpsedes = document.querySelector("#cpSedes");
    listarSedes(sedeTeam);
    listarSedes(trsedes);
    listarSedes(cpsedes);
})


/* funcion que lista las sedes */
const listarSedes = (etiqueta) =>{
    etiqueta.innerHTML = null;
    for (let [k,v] of Object.entries(campus)) {
        etiqueta.insertAdjacentHTML("beforeend",
        `
            <option value="${k}">${k}</option>   
        `)
    }
}


/* formulario de los teams */
const formTeam = document.querySelector("#team");
formTeam.addEventListener("submit",(e)=>{
    e.preventDefault();
    const dato = Object.fromEntries(new FormData(e.target));
    campus[dato.sede]["team"].push(dato);  
    formTeam.reset();
    console.log(campus);
    
}) 


// para cuando dan click en la sede de Trainers
const sedeTrainerSelect = document.querySelector("#trSedes");
sedeTrainerSelect.addEventListener("click",(e)=>{
    e.preventDefault();
    listarTeams(sedeTrainerSelect.value)
})


// funcion que lista el team segun el tipo de dato que se le pase 
function listarTeams(sede) {
    const etiquetaTrainers = document.querySelector("#teamsT");
    etiquetaTrainers.innerHTML = null;
    for (let [k,v] of Object.entries(campus[sede]["team"])) {
        //console.log(v.nombre);
        etiquetaTrainers.insertAdjacentHTML("beforeend",`
        <option value="${k}">${v.nombre} - ${v.jornada} - ${v.horario} </option> 
        `)
    }
     
}

/* 
|   Registrar un trainer 
*/
const formTrainers = document.querySelector("#trainer");
formTrainers.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    campus[`${data.sedeT}`]["trainers"].push(data);
    formTrainers.reset();
    console.log(campus);
});






// teams para campers
const selectSedeCamper = document.querySelector("#cpSedes");
console.log(selectSedeCamper);
selectSedeCamper.addEventListener('click',(e)=>{
    e.preventDefault();
    listarTeamsC(selectSedeCamper.value);
})

function listarTeamsC(sede) {
    const etiqueta = document.querySelector("#teamsC");
    etiqueta.innerHTML = null;
    for (let [k,v] of Object.entries(campus[sede]["team"])) {
        etiqueta.insertAdjacentHTML("beforeend",`
            <option value="${k}">${v.nombre} - ${v.jornada} - ${v.horario} </option> 
        `)
    }
}


/* 
    Regitrar un camper 
*/
const formCampers = document.querySelector("#camper");
formCampers.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    campus[`${data.sedeC}`]['campers'] = data;
    formCampers.reset();
    console.log(campus);
})