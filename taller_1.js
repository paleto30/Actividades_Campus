/* 
    ejercicio # 2

    Dado un número indicar si es par o impar y si es mayor de 10.
*/

do {
  
    let numero = Number(prompt("Ingrese un numero Entero: "))
    let resultado = numero % 2 == 0 ? `el numero ${numero} es par`: `el numero ${numero} es impar.`
    alert(resultado)

} while (confirm("¿ Desea verificar otro numero ?"));