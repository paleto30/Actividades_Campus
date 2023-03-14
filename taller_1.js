/* 
    ejercicio # 6
    
    Construir el algoritmo en Javascript para un programa
    para cualquier cantidad de estudiantes que lea el nombre,
    el sexo y la nota definitiva y halle al estudiante con la mayor
    nota y al estudiante con la menor nota y cuantos eran
    hombres y cuantos mujeres.
*/


do {
    const array = [];
    let flag = true;
    while (flag) {
        let nombre = String(prompt("Ingrese el Nombre: "))
        let sexo = String(prompt("Ingrese el Genero: (M/F) "))
        let nota = Number(prompt("Ingrese la Nota definitiva: (0.0/0.5) "))
        sexo = sexo.toUpperCase();
        const estudiantes = {
            nombre,
            sexo,
            nota,
        }
        array.unshift(estudiantes)
        flag = confirm("¿ Desea agregar otro estudiante ?")
    }

    let mayor = array.sort((e1,e2) => (e1.nota < e2.nota ) ? 1:(e1.nota > e2.nota) ? -1 : 0)
    console.log("mayor: ",mayor[0]);
    console.log("menor: ",mayor.slice(-1)[0]);
    
    let M = 0;
    let F = 0;
    array.forEach(element => {
        if (element.sexo === "F") {
            F += 1
        }else{
            M += 1
        }
    });

    console.log(`Total Hombres: ${M}\nTotal Mujer: ${F}`);
    console.log(array);

    alert(`Mayor Nota:\nNombre: ${mayor[0].nombre}\nGenero: ${mayor[0].sexo}\nNota: ${mayor[0].nota}\n\nMenor Nota:\nNombre: ${mayor.slice(-1)[0].nombre}\nGenero: ${mayor.slice(-1)[0].sexo}\nNota: ${mayor.slice(-1)[0].nota}\n\nCantidad Total de hombres: ${M}\nCantidad Total de Mujeres: ${F}`)
    
    
} while (confirm("¿ Desea Realizar un nuevo Registro ?"));
