/* 
    metodo .match()
*/

const paragraph = 'Este texto Tiene Palabras en Mayuscula ';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);


/*  
   El método match() devuelve todas las 
   ocurrencias de una expresión regular dentro de una cadena.
   devuelve un array con el filtrado por medio de la expresion regular 
*/
