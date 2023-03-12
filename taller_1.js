/* 
    ejercicio # 1

    Construir el algoritmo para un programa que ingrese tres
    notas de un alumno, si el promedio es menor o igual a 3.9
    mostrar un mensaje "Estudie“, de lo contrario un mensaje que
    diga "becado"
*/

do {
    let notas = 0;
    let count = 0;
    for(let i = 1; i<=3 ; i++){
        let nota = Number(prompt(`Ingrese la nota numero ${i}`))
        notas += nota;
        count ++;
    }
    console.log(count);
    let result = notas/count
    alert(`su nota es: ${result.toFixed(1)}\n${(result.toFixed(1) < 4 ? "Debes Estudiar Mas": "Te has ganado una Beca." )}`);

} while (confirm("¿ Desea verificar otras notas ?"));