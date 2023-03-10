/* 
    propiedades y metodos NUMBER
*/
//  Metodo Number.parseFloat()

function circumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
      return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI ;
  }
  
  console.log(circumference('4.567abcdefgh'));
  console.log(circumference('abcdefgh'));

  
/* 
El método estático Number.parseFloat() 
analiza un argumento y devuelve un número 
de coma flotante. Si no se puede analizar 
un número del argumento, devuelve NaN.
*/