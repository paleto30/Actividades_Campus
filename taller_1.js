/* 
    ejercicio # 5
    
    Construir el algoritmo que lea por teclado dos números,
    si el primero es mayor al segundo informar su suma y
    diferencia, en caso contrario, informar el producto y la
    división del primero respecto al segundo.
*/

do {
    
    let n1 = Number(prompt("Ingrese el numero 1: "))
    let n2 = Number(prompt("Ingrese la numero 2: "))
    
    const result = n1 > n2 ? `la suma de los numeros es: ${n1+n2}
                            \nla diferencia de los numeros es: ${n1-n2}`
                            : `el producto de los numero es: ${n1*n2}
                            \nla division de los numeros es: ${n1/n2}`

    alert(result)
} while (confirm("¿ Desea verificar otras personas ?"));