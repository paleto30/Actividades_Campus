/* 
    metodos Math
*/
//  Metodo .acos()   

function calcAngle(adjacent, hypotenuse) {
    return Math.acos(adjacent / hypotenuse);
  }
  
  console.log(calcAngle(8, 10));

  console.log(calcAngle(5, 90));


/* 
El método estático Math.acos() devuelve 
el coseno inverso (en radianes) de un número.
*/