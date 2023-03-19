// selector 

let campus = {};
const formSede = document.querySelector("#sede");


/* formulario de las sedes */
formSede.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombre}`] = {
        direccion: data.direccion,
        contacto: data.contacto,
        team: [],
        campers: [],
        trainers: [],
        roadmap: [],
        asignaturas: []
    }
    formSede.reset();
    //console.log(campus);
    const sedeTeam = document.querySelector("#tsedes");
    const trsedes = document.querySelector("#trSedes");
    const cpsedes = document.querySelector("#cpSedes");
    const asedes = document.querySelector("#asedes");
    const conSedes = document.querySelector("#conSedes");
    listarSedes(asedes);
    listarSedes(sedeTeam);
    listarSedes(trsedes);
    listarSedes(cpsedes);
    listarSedes(conSedes);
})


/* funcion que lista las sedes */
const listarSedes = (etiqueta) => {
    etiqueta.innerHTML = null;
    for (let [k, v] of Object.entries(campus)) {
        etiqueta.insertAdjacentHTML("beforeend",
            `
            <option value="${k}">${k}</option>   
        `)
    }
}

/* formulario de los teams */
const formTeam = document.querySelector("#team");
formTeam.addEventListener("submit", (e) => {
    e.preventDefault();
    const dato = Object.fromEntries(new FormData(e.target));
    campus[dato.sede]["team"].push(dato);
    formTeam.reset();
    console.log(campus);

})

//formulario para asignaturas
const formAsignatura = document.querySelector("#asignaturaf");
formAsignatura.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    campus[data.sede]['asignaturas'].push(data);
    formAsignatura.reset();
    console.log(campus);
});


// para cuando dan click en la sede de Trainers
const sedeTrainerSelect = document.querySelector("#trSedes");
sedeTrainerSelect.addEventListener("click", (e) => {
    e.preventDefault();
    listarTeams(sedeTrainerSelect.value);
    listarAsignaturas(sedeTrainerSelect.value);
})

// funcion que lista el team segun el tipo de dato que se le pase 
function listarTeams(sede) {
    const etiquetaTrainers = document.querySelector("#teamsT");
    etiquetaTrainers.innerHTML = null;
    for (let [k, v] of Object.entries(campus[sede]["team"])) {
        //console.log(v.nombre);
        etiquetaTrainers.insertAdjacentHTML("beforeend", `
        <option value="${v.nombre}">${v.nombre} | ${v.jornada} | horario ${v.horario} </option> 
        `)
    }
}

// funcion que lista  las asignaturas segun la sede
function listarAsignaturas(sede) {
    const asignaturaTrainer = document.querySelector("#materiaT");
    asignaturaTrainer.innerHTML = null;
    for (let [k, v] of Object.entries(campus[sede]["asignaturas"])) {
        asignaturaTrainer.insertAdjacentHTML("beforeend", `
        <option value="${[v.nombre, v.modalidad]}">${v.nombre} - ${v.modalidad}</option> 
        `)
    }
}


/* 
|   Registrar un trainer 
*/
const formTrainers = document.querySelector("#trainer");
formTrainers.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    campus[`${data.sedeT}`]["trainers"].push(data);
    formTrainers.reset();
    console.log(campus);
});

// teams para campers
const selectSedeCamper = document.querySelector("#cpSedes");
//console.log(selectSedeCamper);
selectSedeCamper.addEventListener('click', (e) => {
    e.preventDefault();
    listarTeamsC(selectSedeCamper.value);
})

// funcion para listar los equipos disponibles  en el formulario 
function listarTeamsC(sede) {
    const etiqueta = document.querySelector("#teamsC");
    etiqueta.innerHTML = null;
    for (let [k, v] of Object.entries(campus[sede]["team"])) {
        etiqueta.insertAdjacentHTML("beforeend", `
        <option value="${v.nombre}">${v.nombre} | ${v.jornada} | horario ${v.horario} </option> 
        `)
    }
}

// Regitrar un camper 
const formCampers = document.querySelector("#camper");
formCampers.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))
    campus[`${data.sedeC}`]['campers'].push(data);
    formCampers.reset();
    console.log(data);
    console.log(campus);

});

//===========================================================================================================
//consultas

const consulta1 = document.querySelector("#consulta1");
//console.log(consulta1);
consulta1.addEventListener("click", (e) => {
    e.preventDefault();
    const sedeConsulta = document.querySelector("#conSedes").value;
    consultaUno(sedeConsulta);
})

function consultaUno(sede) {
    console.log("       --TRAINERS--\n");
    campus[sede]['trainers'].forEach(element => {
        const { nombre, asignatura } = element;
        console.log(`Trainer: ${nombre} | Asignatura: ${asignatura}`);
    });

    console.log("       --CAMPERS--\n");
    campus[sede]['campers'].forEach(element => {
        const { nombre, salon } = element;
        console.log(`Camper: ${nombre} | Salon: ${salon}`);
    });
}

const consulta2 = document.querySelector("#consulta2");
consulta2.addEventListener("click", (e) => {
    e.preventDefault();
    try {
        console.log("Telefono de Sede Medellin: ", campus.Medellin.contacto);
        console.log("\nDireccion de Sede Bucaramanga: ", campus.Bucaramanga.direccion);
    } catch (error) {
        console.log("La sede no esta registrada");
    }
})

const consulta3 = document.querySelector("#consulta3");
consulta3.addEventListener("click", (e) => {
    e.preventDefault();
    const sedeConsulta = document.querySelector("#conSedes").value;
    consultaTres(sedeConsulta);
})

function consultaTres(sede) {
    campus[sede]['asignaturas'].forEach(element => {
        console.table(element);
    })
}