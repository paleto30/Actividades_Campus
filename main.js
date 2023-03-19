/* 
  Investigacion acerca de el metodo Object.fromEntries()
*/

/* 
  El método Object.fromEntries() transforma una 
  lista de pares con [clave-valor] en un objeto. 
*/

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }


/* 
    Descripción:

    El método Object.fromEntries() toma una lista de pares con clave-valor 
    y devuelve un nuevo objeto cuyas propiedades son dadas por éstas entradas. 
    El argumento iterador se espera que sea un objeto que implemente un método 
    @@iterator, que devuelve un objeto iterador, que produce un objeto tipo 
    array de dos elementos, donde el primer elemento es un valor que se usará 
    como la clave de la propiedad, y el segundo elemento es el valor a 
    asociar con esa clave de propiedad.
*/

// convirtiendo un arreglo en un objeto 

const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj1 = Object.fromEntries(arr);
console.log(obj1); // { 0: "a", 1: "b", 2: "c" }



// Transformacion de objetos

const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log("\nobjeto sin transformar:\n",object1);
console.log("\nobjeto transformado:\n",object2);
// { a: 2, b: 4, c: 6 }