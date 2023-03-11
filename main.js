/* 
    metodos Math
*/
//  Metodo .tan()   


function getTanFromDegrees(degrees) {
    return Math.tan(degrees * Math.PI / 180);
  }
  
  console.log(getTanFromDegrees(0));

  console.log(getTanFromDegrees(45));
  
  console.log(getTanFromDegrees(90));
  
/* 
El método estático Math.tan() devuelve la 
tangente de un número en radianes.
*/