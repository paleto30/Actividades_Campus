/* 
    datos de tipo primitivos
*/

// 1)  booleano :  true y flase 
const flag1 =  true;
const flag2 = false;
console.log(`Esto es verdad: ${flag1}\nEsto es falso: ${flag2}`);


// 2) null, para del lenguaje que denota un valor nulo.
const nulo = null;
console.log(`esto es un dato nulo: ${nulo}`);


// 3) tipo de dato indefinido  (el valor no esta definido)
const indefinido = undefined;
console.log(`tipo de dato indefinido: ${indefinido}`);


// 4) tipo de dato numerico (el valor puede ser de tipo entero(12) o  flotante(12.2123123))
const numero = Number(12.564);
console.log(`tipo de dato numero:  ${typeof(numero)}    Number: ${numero}`);


// 5) BigInt.  Un numero entero con precision arbitraria. ej: 95999123125491293199123n

const number =  BigInt( 2n ** 53n);
console.log(`tipo de dato BigInt: ${number.constructor.name}    BigInt: ${number} `);

// 6) String. Una secuencia de caracteres que representan un valor de texto
const cadena =  String('Esto es una cadena');
console.log(`tip de dato String: ${cadena.constructor.name}     String: ${cadena}`);


// 7) Symbol : Nuevo tipo de dato , de tipo primitivo , sirve para crear identificadores que son unicos
let id = Symbol();
let id2 = Symbol();
console.log(`verificacion de la igualdad dato Symbol: ${id === id2}`);
console.log(id);