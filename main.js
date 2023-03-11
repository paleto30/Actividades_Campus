/* 
    metodos Math
*/
//  Metodo .atan()   

// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, adjacent) {
    return Math.atan(opposite / adjacent);
  }
  

  console.log(calcAngle(8, 10));
  
  console.log(calcAngle(5, 3));
  
 

/* 
El método estático Math.atan() devuelve 
la tangente inversa (en radianes) de un número
*/