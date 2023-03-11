/* 
    metodos Math
*/
//  Metodo .atan2()   


function calcAngleDegrees(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
  }
  
  console.log(calcAngleDegrees(5, 5));

  console.log(calcAngleDegrees(10, 10));

  console.log(calcAngleDegrees(0, 10));
  
  
/* 
El método estático Math.atan2() devuelve el ángulo en 
el plano (en radianes) entre el eje x positivo y el rayo 
desde (0, 0) hasta el punto (x, y), para Math.atan2(y, x ).
*/