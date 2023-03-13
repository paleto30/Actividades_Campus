/* 
    ejercicio # 3
    
    Construir el algoritmo para determinar el voltaje de un
    circuito a partir de la resistencia y la intensidad de corriente.
*/

do {
  
    let recistencia = Number(prompt("Ingrese el valor de la resistencia: "))
    let intensidad = Number(prompt("Ingrese la intencidad de la corriente: "))

    alert(`el Voltaje calculado es de: ${recistencia*intensidad} V`)

} while (confirm("¿ Desea verificar voltaje ?"));