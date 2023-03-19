/* 
  Investigacion acerca de los tipos de funciones 
  que se manejan en javascript    
*/

/* 
  Funciones por expresión

Sin embargo, en Javascript es muy habitual encontrarse 
códigos donde los programadores «guardan funciones» dentro de 
variables, para posteriormente «ejecutar dichas variables». 
se trata de un enfoque diferente, creación de funciones por 
expresión, que fundamentalmente, hacen lo mismo con algunas diferencias:
*/

const saludo = function saludar() {
  return "Hola";
};

console.log(saludo());


/*  
  Con este nuevo enfoque, estamos creando una función en el interior de una variable, 
  lo que nos permitirá posteriormente ejecutar la variable (como si fuera una función). 
  Observa que el nombre de la función (en este ejemplo: saludar) pasa a ser inútil, 
  ya que si intentamos ejecutar saludar() nos dirá que no existe y si intentamos 
  ejecutar saludo() funciona correctamente.

  ¿Qué ha pasado? Ahora el nombre de la función pasa a ser el nombre de la variable, 
  mientras que el nombre de la función desaparece y se omite, dando paso a lo que se 
  llaman las funciones anónimas (o funciones lambda).
  ejemplo:
*/

const funcionAnonima = function (){
    console.log("soy una funcion anonima");
};

console.log(funcionAnonima);  // como vemos , si imprimimos la variable , nos retorna su contenido
funcionAnonima(); // y si imprimimos la variable como funcion , nos retorna la operacion de la  funcion que contiene;
 