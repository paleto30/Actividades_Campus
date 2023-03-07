const data = {
    uno:{note:4.0,text:'Exceeds proficiency'},
    dos:{note:3.0,text:'Demonstrates proficiency'},
    tres:{note:2.0,text:'Approaches proficiency'},
    cuatro:{note:1.0,text:"Falls well bellow proficiency"},
    cinco:{note:0.0,text:'Lacks all proficiency'},
    seis:{note:0.0,text:"No attempt made"},
    error:{ msg:"La nota que ingreso es incorrecta, revise !"}
}

function  enviarDatos() {
    const seleccion = document.querySelector("#seleccion").value;
    const nota  = document.querySelector("#nota").value;
    let selec = parseInt(seleccion);
    let calificacion ;  
    switch (selec) {
        case 1:
            if ( nota>= 90 && nota<=100) {
                calificacion = data.uno;
            }else if (nota>= 80 && nota<=89) {
                calificacion = data.dos;
            }else if (nota>= 70 && nota<=79) {
                calificacion = data.tres;
            }else if (nota>= 60 && nota<=69) {
                calificacion = data.cuatro;
            }else if (nota < 60) {
                calificacion = data.cinco;
            }else if(nota == 0 ){
                calificacion = data.seis;
            }else{
                calificacion = data.error
            };
            break;
        case 2: 
            if ( nota>= 12 && nota<=14) {
                calificacion = data.uno;
            }else if (nota>= 9 && nota<=11) {
                calificacion = data.dos;
            }else if (nota>= 6 && nota<=8) {
                calificacion = data.tres;
            }else if (nota>= 3 && nota<=5) {
                calificacion = data.cuatro;
            }else if (nota>= 1 && nota <=2) {
                calificacion = data.cinco;
            }else if (nota == 0 ) {
                calificacion = data.seis;
            }else{
                calificacion = data.error;
            };
            break;
        case 3: 
            let notaU = nota.toUpperCase();
            if ( notaU === "A" ) {
                calificacion = data.uno;
            }else if (notaU === "B"){
                calificacion = data.dos;
            }else if (notaU === "C") {
                calificacion = data.tres;
            }else if (notaU === "D") {
                calificacion = data.cuatro;
            }else if (notaU === "E") {
                calificacion = data.cinco;
            }else if(notaU === "F"){
                calificacion = data.seis;
            }else{
                calificacion = data.error;
            };
            break;
        default:
            break;
        }
        console.log(calificacion);
        const alert = document.querySelector("#alerta");
        if (!calificacion.msg) {
            alert.innerHTML = `
            <div class="alert alert-info" role="alert" >
                <h3>SBG Rating:<spam style="color: black">${calificacion.note}</spam> <br>Proficiency Level with Standard: <spam style="color: black">${calificacion.text}</spam>  </h3>;
            </div>
            `;
        }else{
            alert.innerHTML = `
            <div class="alert alert-warning" role="alert" >
                <h3>¡Advertencia!<br>${calificacion.msg}</h3>;
            </div>
            `;
        }
}