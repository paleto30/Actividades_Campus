/* 
    propiedades y metodos NUMBER
*/
//  Metodo Number.parseInt()

function roughScale(x, base) {
    const parsed = Number.parseInt(x, base);
    if (Number.isNaN(parsed)) {
      return 0;
    }
    return parsed * 100;
  }
  
  console.log(roughScale(' 0xF', 16));
  
  console.log(roughScale('321', 2));

  let num = '15';
  console.log(typeof(num));
  let n1 = Number.parseInt(num);
  console.log(typeof(n1));
/* 
El método estático Number.parseInt() 
analiza un argumento de cadena y devuelve 
un número entero de la raíz o base especificada.
*/