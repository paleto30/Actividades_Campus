/* 
    metodos Math
*/
//  Metodo .random()  

function getRamdomInt(max) {
    return Math.floor(Math.random()* max)
}

console.log(getRamdomInt(3));

console.log(getRamdomInt(1));

console.log(Math.random());

/* 
El método estático Math.random() devuelve un número 
pseudoaleatorio de punto flotante que es mayor o igual 
que 0 y menor que 1, con una distribución aproximadamente 
uniforme en ese rango, que luego puede escalar a su rango deseado.
*/