import  header from "./components/header.js";
import banner from "./components/banner.js";
import cards from "./components/cards.js";
import aside from "./components/aside.js";
import content from "./components/content.js";
import content2 from "./components/content2.js";
import content3 from "./components/content3.js";
import footer from "./components/footer.js";


header.fragmenShow() //-> renderizacion de el header con worker

banner.listBanner(); // -> renderizacion de  el banner

cards.showRenderWorker(); // -> renderizacion de las cards con worker

aside.renderWorkerData(); // -> renderizaciond del aside con el worker



content.renderWorkerData();

// contenido del body desde seccion de noticias
//content.showNotice();
// Primer bloque 
//content.bloqueUno();
//segundo bloque
//content.bloqueDos();
// tercer bloque
//content.bloqueTres()



/* // contenido del articulo 1
content2.showInfo();

// contenido del articulo 2
content3.showInfos();

//footer
footer.showData(); */