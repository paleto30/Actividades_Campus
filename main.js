/* 
    propiedades y metodos NUMBER
*/
//  Metodo .isInteger()

function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return 'Fits!';
    }
    return 'Does NOT fit!';
  }
  
  console.log(fits(5, 10));

  console.log(fits(5, 11));

/* 
El método estático Number.isInteger() 
determina si el valor pasado es un número entero.
*/