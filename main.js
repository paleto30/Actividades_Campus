
/* Metodos de los  Strings */

/* es  posible crear cadenas usando comillas simples o dobles */
let cadena1 = "comillas dobles "
let cadena2 = 'comillas simples' 
let cadena3 = `backtick`;
console.log(`${cadena1}\n${cadena2}\n${cadena3}`);



/* 
    metodo includes() , startsWith(), endsWith();
*/

//includes()  con este metodo podemos buscar una  sub especifica cadena dentro de una cadena 
const cadena = "Esto es una cadena  de comillas dobles"
console.log(cadena.includes('les'));  // este metodo puede recibir dos parametros , 
                                      // el primero es la sub cadena, el segundo si se reuiere , 
                                      // la poscicion de dicha subcadena
console.log(cadena.includes('z',8));



/* 
    startsWith() con ese metodo podemos verificar si una cadena comienza con una determinada subcadena
*/

const frase = 'Hola soy Andres';
console.log(frase.startsWith('h')); // esto retorna falso por el case sensitive


/* 
    endsWith()  
*/

const frase1 = 'Hola soy Andres';
console.log(frase.endsWith('des')); // esto debe retornar verdadero por que termina en s