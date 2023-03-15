/* 
    ejercicio # 9
    
    N atletas han pasado a finales en salto triple en los juegos
    olímpicos femenino de 2022. Diseñe un programa que pida por
    teclado los nombres de cada atleta finalista y a su vez, sus
    marcas del salto en metros. Informar el nombre de la atleta
    campeona que se quede con la medalla de oro y si rompió
    récord, reportar el pago que será de 500 millones. El récord
    esta en 15,50 metros.
*/

let atletas = [];
const record = 15.50;

do {    
    let nombre = String(prompt("Ingrese el nombre del Atleta: "));
    let marca = Number(prompt("Ingrese el Registro de la marca: "));
    const atleta = {
        nombre,
        marca
    }
    atletas.unshift(atleta);

} while (confirm("¿ Desea Agregar otro Atleta ?"));

let mejor = atletas.sort((a,b) => (a.marca < b.marca ) ? 1:(a.marca > b.marca) ? -1 : 0)
let res = mejor[0].marca > record ? `\n¡¡ NUEVO RECORD REGISTRADO !!\n-- GANO 500 MILLONES --\nel Campeon fue:  ${mejor[0].nombre}\nSu marca fue:  ${mejor[0].marca} metros`:`el Campeon fue:  ${mejor[0].nombre}\nSu marca fue:  ${mejor[0].marca} metros.`;

alert(res);