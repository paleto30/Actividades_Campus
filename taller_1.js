/* 
    ejercicio # 4
    
    Construir el algoritmo que solicite el nombre y edad de 3
    personas y determine el nombre de la persona con mayor edad.
*/

do {
  
    const personas = [];
    for (let i = 0; i < 3; i++) {
        let nombre = String(prompt("Ingrese el nombre: "))
        let edad = String(prompt("Ingrese la edad: "))
        personas.push({nombre,edad})
    }  

    let result = personas.sort((a,b) => b.edad -a.edad);
    alert(`La persona de mayor edad es:\nNombre: ${result[0].nombre}\nedad: ${result[0].edad}`)
   

} while (confirm("¿ Desea verificar otras personas ?"));