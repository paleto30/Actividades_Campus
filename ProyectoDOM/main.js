import  header from "./components/header.js";
import banner from "./components/banner.js";
import cards from "./components/cards.js";
import aside from "./components/aside.js";
import content from "./components/content.js";
import content2 from "./components/content2.js";
import content3 from "./components/content3.js";
import footer from "./components/footer.js";

// todo lo del encabezado, navbar, banner, y cards de distros
header.fragmenShow()
//header.listTile();
//header.listDistro();
banner.listBanner();
cards.listCards();

// menu de la barra lateral derecha
aside.showAside();


// contenido del body desde seccion de noticias
content.showNotice();
// Primer bloque 
content.bloqueUno();
//segundo bloque
content.bloqueDos();
// tercer bloque
content.bloqueTres()

// contenido del articulo 1
content2.showInfo();

// contenido del articulo 2
content3.showInfos();

//footer
footer.showData();