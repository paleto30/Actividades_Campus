/* 
    ejercicio # 10
    
    Desarrolle un programa cíclico que capture un dato
    numérico cada vez, y los vaya acumulando. El programa se
    detiene cuando el usuario digita un cero. El programa debe
    mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
    PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
    VALOR Y MENOR VALOR.
*/

let datos = [];
let flag = true;
do {    
    
    let numero = Number(prompt("Ingrese un numero: "));
    datos.unshift(numero);
    
    flag = numero == 0 ? false : true;

} while (flag);

let sumatoria = datos.reduce((anterior, actual)=>{
    return anterior+actual;
}, 0);

let promedio = sumatoria/(datos.length - 1);
let mayor = Math.max(...datos);
datos.shift(0);
let menor = Math.min(...datos);

console.log(datos);
alert(`     ¡¡ Resultados !!\nSumatoria =  ${sumatoria}\nPromedio =  ${promedio}\nCantidad de valores: ${datos.length}
\nValor Mayor = ${mayor}\nValor Menor = ${menor}`);
