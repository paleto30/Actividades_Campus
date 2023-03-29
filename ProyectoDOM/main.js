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
content.renderWorkerData(); // -> renderizacion del content con el worker
content2.renderWorkerData(); // -> renderizacion del content2 con el worker
content3.renderWorkerData(); //-> renderizacion del content3 con el worker
footer.renderWorkerData(); //-> renderizacion del footer con trabajo del worker


