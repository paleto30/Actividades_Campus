import main2 from './main2.js';



do {
    let opc = Number(prompt("Seleccionde el modo de calificacion:\n\t1.Tradicional\n\t2.Point\n\t3.SBG"));
    let nota = Number(prompt(`Ingrese su nota en un rango de:  ${main2.listado(opc)}`));
    alert(main2.validar(opc,nota));
} while (confirm("Desea realizar nueva comprovación ?"));
 


