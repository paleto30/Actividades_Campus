/* 
    ejercicio # 8
    
    Programa que Ingrese por teclado:
    a. el valor del lado de un cuadrado para mostrar por pantalla el
    perímetro del mismo
    b. la base y la altura de un rectángulo para mostrar el área del
    mismo
*/


do {
    
    let lado = Number(prompt("Este programa calcula el valor del perimetro de un cuadrado\nIngrese el valor de el lado de un cuadrado: (cm)"))
    alert(`EL PERIMETO DEL CUADRADO ES: ${lado*4}`)

    let base = Number(prompt("Vamos a calcular el area de un Triangulo\nIngrese la base: (cm)"))
    let altura = Number(prompt("Ingrese la altura: (cm)"))

    alert(`EL AREA DEL TRIANGULO ES: ${(base*altura)/2} (cm)`)


} while (confirm("¿ Desea Ingresar otros valores ?"));
