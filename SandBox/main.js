const ws = new Worker("ws.js");
import{
    getheader,
    getSeccion1,
    getSeccion2,
    getSeccion3,
    getFooter
} from "./API.js";


document.addEventListener('DOMContentLoaded',()=> {
    getDataHeader();
    getDataAbout();
    getDataService();
    getDataProyect();
    getDataFooter();
});


/* 
   seccion  para obtener e insertar todos los datos necesarios en navbar y banner(contacto)
*/
async function getDataHeader() {
    // datos del endpoint 
    const datos = await getheader();
    // apartado del html donde va el namepage
    const namePage = document.querySelector("#names")
    let name = datos[0].namepage;
    namePage.innerHTML = name;


    // apartado html donde va el menu de la pantalla completa de la web
    ws.postMessage(datos);
    ws.addEventListener("message", (e)=>{

        let frag = new DocumentFragment();
        frag.append(e.data);
        document.querySelector("#itemsT").insertAdjacentHTML("beforeend", frag.textContent);
        ws.terminate();
    });
   
    
    
    /* ws.addEventListener("message", (e)=>{
        console.log(e.data);
    }) */

    
    // apartado html donde va el menu para movil
    // datos menu desplegable para movil
    const itemsCampact = document.querySelector("#navbarNav");
    let menuCompact = '';
    for (const menu in datos[1].items) {
        const { href, item }= datos[1].items[menu];
        menuCompact+=`
            <div class="col-12 col-md-12 xx">
                <a href="${href}" class="links">
                    <li class="nav-item lis">${item}</li>
                </a>
            </div>
        `;
        itemsCampact.innerHTML = menuCompact;
    }

    // gestion de datos  del  banner 
    const contacto = document.querySelector("#contacto")
    let html2 = '';
    html2 = `
            <p class="welcome">${datos[2].textimage.p}</p>
                <h2 class="welcome_">${datos[2].textimage.h2}</h2>
            <input type="button" class="btn btn-lg boton1" value="${datos[2].textimage.btn}">
        `;
        contacto.innerHTML = html2;    
}; 


/* 
                    funcion para obtener e inyectar los datos de  QUIENES SOMOS
 */
async function getDataAbout() {
    // datos del endpoint
    const datos = await getSeccion1();
    // about data
    const about = document.querySelector("#about")

    let html = ``;
        html = `
            <div class="container">
                <div class="logo">
                    <img class="imgLog" src="${datos[0].about.image}" alt="">
                </div>
                <div class="description ">
                    <h2 class="title2">${datos[0].about.h2}</h2>
                    <P class="parrafo2">${datos[0].about.p}</P>
                    <a  href="#">
                        <button class="boton btn btn-lg masInfo">${datos[0].about.btn}</button>
                    </a>
                </div>
            </div>
        `;
    about.innerHTML = html;
};



/* 
                funcion para obtener e inyectar los datos de los servicios
*/
async function getDataService() {
    
    // datos del endpoint
    const datos = await getSeccion2();

    // services data 
    const serviceTitle = document.querySelector("#servicetitle");
    serviceTitle.innerHTML = datos[0].h2;
    const servicesCards = document.querySelector("#cardsServices");
    let datoss = '';
    
    for (const content in datos[1].cards) {
        const { icon, title, p } = datos[1].cards[content];

        datoss+=`
            <div class=" serviC ">
                <div class="card " style="width: 19rem;">
                    <label for="">
                    ${icon}
                    </label>
                    <div class="card-body">
                        <h5 class="card-title carT">${title}</h5>
                        <p class="card-text cardp">${p}</p>
                    </div>
                </div>
            </div>
        `;
        servicesCards.innerHTML = datoss; 
    };
};

/* 
                funcion para obtener e inyectar los datos de los proyectos
*/
async function getDataProyect() {
    
    //datos del endpoint
    const datos = await getSeccion3();

    // apartado de proyectos
    const proyect = document.querySelector("#tproyect");
    proyect.innerHTML = datos[0].h2p;


    // row 1
    const row1 = document.querySelector("#row1");
    let images = '';
    for (const key in datos[1].content.row1) {
       images+=`
            <div class="col col-md-4 proyect">
                <img class="imgRound" src="${datos[1].content.row1[key]}" alt="" srcset="">
            </div>
        `;
        row1.innerHTML = images; 
    }
    
    // row 2
    const row2 = document.querySelector("#row2");
    let imagess = '';
    for (const key in datos[1].content.row2) {
       imagess+=`
            <div class="col col-md-4 proyect">
                <img class="imgRound" src="${datos[1].content.row2[key]}" alt="" srcset="">
            </div>
        `;
        row2.innerHTML = imagess; 
    }
};



async function getDataFooter() {
    
    const datos = await getFooter(); 
    const pie = document.querySelector("#piee");
    pie.innerHTML = datos[0];
}