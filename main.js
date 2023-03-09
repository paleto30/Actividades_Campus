/* 
    metodo .localeCompare()
*/

const a = 'réversa'; // Con acentos, minúsculas
const b = 'REVERSA'; // sin acentos, mayusculas

console.log("Ejemplo 1:",a.localeCompare(b));

console.log("ejemplo 2:",a.localeCompare(b, 'es', { sensitivity: 'base' }));



/*  
   El método localeCompare() retorna un número 
   indicando si una cadena de carateres de 
   referencia va antes, después o si es la 
   misma que la cadena dada en orden alfabético. 

   localeCompare(compareString, locales, options);

   Los nuevos argumentos locales y options permiten a las 
   aplicaciones especificar el idioma cuyo orden alfabético 
   se debe usar y configurar el comportamiento de la función. 
   En implementaciones antiguas, que ignoran los argumentos 
   locales y options, la localización y el orden alfabético 
   usados son completamente dependientes de la implementación. 
*/
