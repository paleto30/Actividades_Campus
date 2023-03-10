/* 
    metodos Math
*/
//  Metodo .log()  

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));

// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));

/* 
El método estático Math.log() 
devuelve el logaritmo natural (base e) de un número.
*/