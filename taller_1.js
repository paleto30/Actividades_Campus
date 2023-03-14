/* 
    ejercicio # 7
    
    Programa que pida el ingreso del nombre y precio de un artículo y la
    cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
    en su factura.
*/


do {
    let datos = [];
    try {
        let flag = true;
        while(flag){
            let articulo = String(prompt("Ingrese el nombre del articulo: "));
            let precio = Number(prompt("Ingrese el precio del articulo: "));
            let cantidad= Number(prompt("Ingrese la cantidad de articulos: "));
            let obj = {
                articulo,
                precio,
                cantidad,
                total : precio*cantidad,
            }

            datos.unshift(obj)
            flag = confirm("¿ Desea registrar otro producto ?");
        }
        
        console.log(datos);
            

    } catch (error) {
        

    }
    
} while (confirm("¿ Desea Realizar un nuevo Registro ?"));
