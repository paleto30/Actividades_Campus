/* 
    metodo .split()
*/

let cadena  = "esto es una cadena y se le va a aplicar el metodo split"

let newCadena = cadena.split(" ", cadena.length)

console.log("cadena inicial: ", cadena);

console.log("resultado: ",newCadena);

let cadenaInvertida = "anita lava la tina".split('').reverse().join('')

console.log(cadenaInvertida);
/*  
    El método split() 
    divide un objeto de tipo String en un array (vector) 
    de cadenas mediante la separación de la cadena en subcadenas.

    cadena.split([separador][,limite])
*/
