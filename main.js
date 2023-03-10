/* 
    propiedades y metodos NUMBER
*/
//  Metodo .isNaN()

function typeOfNaN(x) {
    if (Number.isNaN(x)) {
      return 'Number NaN';
    }
    if (isNaN(x)) {
      return 'NaN';
    }
  }
  
  console.log(typeOfNaN('100F'));
  console.log(typeOfNaN(NaN));

/* 


El método estático Number.isNaN() determina 
si el valor pasado es el valor numérico NaN y 
devuelve falso si la entrada no es del tipo Número.
*/