import  header from "./components/header.js";
import banner from "./components/banner.js";
import cards from "./components/cards.js";
import aside from "./components/aside.js";
import content from "./components/content.js";

// todo lo del encabezado, navbar, banner, y cards de distros
header.listTile();
header.listDistro();
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