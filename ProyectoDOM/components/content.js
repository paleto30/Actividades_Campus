export default {

    notice: {
        text: "Noticias GNU/LINUX"
    },
    article1: {
        bloque_uno: [
            {
                title: "LFS Y BLFS Version 11.3 han sido liberados",
                date: "Marzo 1, 2023 by",
                author: "DesdeLinux",
                href: "https://blog.desdelinux.net/marzo-2023-acontecer-informativo-gnu-linux/#:~:text=LFS%20y%20BLFS%20Versi%C3%B3n%2011.3%20han%20sido%20liberados,-Linux%20From%20Scratch&text=Ya%20que%2C%20entre%20las%20muchas,muchas%20otros%20software%20y%20paquetes.",
                text: "Linux From Scratch, el proyecto TI que proporciona instrucciones paso a paso para que cualquiera pueda construir su propio sistema Linux personalizado, completamente a partir del código fuente, ha anunciado este primero de marzo de 2023 el lanzamiento de sus nuevas versiones LFS versión 11.3, LFS versión 11.3 (systemd), BLFS versión 11.3 y BLFS Versión 11.3 (systemd). La cual, representa una actualización importante tanto para LFS como para BLFS. Ya que, entre las muchas novedades, se incluye la utilización de Gcc-12.2.0, Glibc-2.36 y Binutils-2.39. Además, del Kernel Linux 5.19.2, GNOME 43, KDE/Plasma 5.26.5 y Xfce 4.18, entre muchas otros software y paquetes.",
                resume: 'Desde 1984, Richard Stallman y muchos voluntarios están intentando crear un sistema operativo libre con un funcionamiento similar a UNIX, recreando todos los componentes necesarios para tener un sistema operativo funcional. A comienzos de los años 90, unos seis años desde el inicio del proyecto, GNU tenía muchas herramientas importantes listas, como editores de texto, compiladores, depuradores, intérpretes de comandos de órdenes etc., excepto por el componente central: el núcleo.',
                img: "./assets/img/scratch.jpg"
            },
            {
                title: "Amazon Linux 2023 profundiza en Fedora y mejora la seguridad y el rendimiento",
                date: "Marzo 20, 2023 by",
                author: "Eduardo Medina",
                href: "https://www.muylinux.com/author/eduardo-medina/",
                text: `Amazon Linux 2023 es la nueva versión de la distribución desarrollada por el gigante detrás del conocido bazar y de Amazon Web Services (AWS), que en esta ocasión llega con algunas novedades importantes que profundizan en la adopción de Fedora como base en lugar de Red Hat Enteprise Linux (RHEL).`,
                resume: `La corporación explica que Amazon Linux 2023 (AL2023) “está diseñado para proporcionar un entorno seguro, estable y de alto rendimiento para desarrollar y ejecutar sus aplicaciones en la nube”. Entre las novedades que ofrece en comparación con Amazon Linux 2, nos encontramos con que SELinux se encuentra activado en modo permisivo y con IMDSv2 habilitado por defecto junto a la capacidad de parchear el kernel en caliente. Otras características mencionadas son “una integración perfecta con varios servicios y herramientas de desarrollo de AWS” y “un rendimiento optimizado para las instancias basadas en Graviton de Amazon Elastic Compute Cloud (EC2) y AWS Support sin costo de licencia adicional”.`,
                img: "./assets/img/aws.jpg"
            }
        ],

        bloque_dos: {
            title: "¿ QUE ES GNU/LINUX ?",
            block: "El proyecto GNU, iniciado en 1983 por Richard Stallman,",
            p1: "tiene el objetivo de crear un «sistema de software compatible con Unix, compuesto enteramente de software libre». El trabajo comenzó en el año 1984.​ Más tarde, en 1985, Stallman fundó la Free Software Foundation para financiar el desarrollo de GNU, y redactó la Licencia Pública General de GNU en 1989. A principios de la década de 1990, muchos de los programas que se requieren en un sistema operativo (como bibliotecas, compiladores, editores de texto, un shell Unix, y un sistema de ventanas) ya se habían conseguido desarrollar y estaban operativos en el proyecto GNU. Sin embargo, otros elementos, como los controladores de dispositivos y los daemons, estaban todavía en desarrollo e incompletos.",
            p2: "En 1991, cuando Torvalds asistía a la Universidad de Helsinki y era usuario del sistema operativo MINIX, y de los programas provenientes del proyecto GNU, estaba muy interesado por el funcionamiento de los sistemas operativos.​ Frustrado por la concesión de licencias de uso que utilizaba MINIX, que en ese momento se limitaba a uso educativo, ese mismo año decidió comenzar a desarrollar su propio núcleo.",
            p3: " Hacia 1992, Torvalds había trabajado tanto en el desarrollo del núcleo Linux que llegó a superar a otros núcleos que se encontraban también en desarrollo en ese momento.​ Las aplicaciones GNU también se fueron desarrollando de modo que reemplazaron todos los componentes de MINIX, porque era más ventajoso utilizar el código libre del proyecto GNU con el nuevo sistema operativo. El código GNU con licencia bajo la GPL puede ser reutilizado en otros programas de computadora, siempre y cuando también se liberen bajo la misma licencia o una licencia compatible. Posteriormente Torvalds inició un cambio de su licencia original, que prohibía la redistribución comercial, y lo difundió bajo la licencia GPL. Los desarrolladores de ambas partes trabajaron para integrar componentes de GNU con el núcleo Linux, consiguiendo un sistema operativo completamente funcional.",
            img: "./assets/img/gnuLinux.jpg"
        },


        bloque_tres: {
            seccion:{
                title:'Algunas Ventajas y Desventajas de Usar sistemas GNU/Linux.',
                parrafo:"",
            },

            ventajas: [
                {
                    ventage: "Personalización",
                    explained: "Linux es un sistema fácilmente modificable, lo que permite configurarlo a las necesidades e intereses del desarrollador. Esto hace que sea un sistema escalable y flexible, que pueda servir para usuarios inexpertos, desarrolladores experimentados y empresas."
                }
                , {
                    ventage: "Gratuito",
                    explained: "Linux no pertenece a ninguna empresa por lo que no es necesario adquirir una licencia para usarla o disfrutar de sus funcionalidades."
                },
                {
                    ventage: "Estabilidad",
                    explained: "Linux es un sistema mucho más estable que Windows; esto en gran parte se debe a que su nivel de personalización le permite adaptarse y trabajar en cualquier equipo de forma eficiente. Gracias a su estabilidad, Linux es muy usado para manejar servidores en internet."
                },
                {
                    ventage: "Seguridad",
                    explained: "A pesar de lo que se pudiera pensar al tratarse de un sistema abierto, Linux es más seguro que otros sistemas operativos."
                }
            ],

            desventaja:[
                {
                    disadventage:"Incompatibilidad",
                    explained:"Al ser un sistema menos usado y extendido, Linux no cuenta con compatibilidad para muchos programas que sí son compatibles con sistemas como Windows o Mac."
                }
                ,{
                    disadventage:"Soporte",
                    explained:"inux tiene un punto débil en esta área ya que, por ejemplo, la mayoría de las ISP sólo ofrecen soporte para Windows. Sumado a eso, muchas veces los desarrolladores deben descubrir por sí mismos y corregir las fallas que se presenten en el sistema."
                },
                {
                    disadventage:"Conocimientos de UNIX",
                    explained:"Aunque no en todos los casos, para comenzar con Linux hay que conocer ciertos apartados de Unix. Igualmente, un usuario inexperto no podrá aprovechar las ventajas que ofrece GNU Linux al ser un sistema open source, a menos que conozca algo de programación."
                },
                {
                    disadventage:"Juegos",
                    explained:"No es un sistema ideado para gamers, ya que la mayoría de juegos presentes para otros sistemas no corren en Linux."
                }
            ]

        }

    },

    renderWorkerData(){
        const ws = new Worker('storage/wsMyContent.js',{type:"module"});
        let data =[this.notice, this.article1] 
        ws.postMessage({data:data}); 
        ws.addEventListener("message",(e) =>{
            let {noticia, bloque1, bloque2, bloque3} = e.data;
            document.querySelector("#content").insertAdjacentHTML("beforeend",noticia);
            document.querySelector("#bloqueUno").insertAdjacentHTML("beforeend",bloque1);
            document.querySelector("#bloqueDos").insertAdjacentHTML("beforeend",bloque2);
            document.querySelector("#bloqueTres").insertAdjacentHTML("beforeend",`${bloque3.title}${(bloque3.dataV).join("")}${(bloque3.title2)}${(bloque3.dataD).join("")}`);
            ws.terminate();
        })
    },
}

