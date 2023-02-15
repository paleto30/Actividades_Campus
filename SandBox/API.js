/* const url = "data/db.json"; */ 

// ruta del "sevidor"  json-server
const url = "http://localhost:4000"; 

export const getheader =  async()=>{
    try {

        const result = await fetch(`${url}/header`); 
        const datos = result.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}


// funcion para datos de about
export const getSeccion1 = async()=>{
    try {
        const result = await fetch(`${url}/seccion1`); 
        const datos = result.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}


// funcion para datos de servicios
export const getSeccion2 = async()=>{
    try {
        const result = await fetch(`${url}/seccion2`);
        const datos = result.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}


// funcion para datos de proyectos
export const getSeccion3 = async()=>{
    try {
        const result = await fetch(`${url}/seccion3`);
        const datos = result.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

// funcion para datos de servicios
export const getFooter = async()=>{
    try {
        const result = await fetch(`${url}/pie`);
        const datos = result.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}
