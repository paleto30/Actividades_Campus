export default{
    dataMyHeader(){
        localStorage.setItem("myHeader",JSON.stringify({
            title: {
                name: "GNU / LINUIX",
                href: "https://www.gnu.org/gnu/linux-and-gnu.es.html"
            },
            distros: [
                {
                    name: "Debian",
                    href: "https://www.debian.org/index.es.html"
                },
                {
                    name: "Slackware",
                    href: "https://slackware-es.com/#google_vignette"
                },
                {
                    name: "Mandrake",
                    href: "https://www.redhat.com/es"
                },
                {
                    name: "CentOS",
                    href: "https://www.centos.org/"
                },
                {
                    name: "Ubuntu",
                    href: "https://ubuntu.com/download"
                },
                {
                    name: "ArchLinux",
                    href: "https://archlinux.org/"
                },
                {
                    name: "Fedora",
                    href: "https://getfedora.org/es/"
                },
                {
                    name: "KaliLinux",
                    href: "https://www.kali.org/"
                }
            ]
        }))
    },

    dataMyBanner(){
        localStorage.setItem("myBanner",JSON.stringify({
            image: "./assets/img/banner.jpg",
            h1: "Linux® es un sistema operativo (SO) open source.",
            p: " El sistema operativo es el software que gestiona directamente el hardware de un sistema y sus recursos, como la CPU, la memoria y el almacenamiento. Se encuentra entre las aplicaciones y el hardware, y establece las conexiones entre todos los sistemas de software y los recursos físicos que ejecutan las tareas.",
            more:{
                name:"Continue reading...",
                href: "https://www.redhat.com/es/topics/linux/what-is-linux"
            },
        }))
    },

    dataMyCards(){
        localStorage.setItem("myCards",JSON.stringify({
            data:[
                {
                    use: "Sistema Operativo",
                    featured:"Debian GNU/Linux",
                    date: "23 mar",
                    text: "Un sistema operativo libre, desarrollado por miles de voluntarios de todo el mundo, que colaboran a través de Internet.",
                    more: "https://es.wikipedia.org/wiki/Debian_GNU/Linux",
                    image: "./assets/img/debian2.jpg",
                },
                {
                    use: "Sistema Operativo",
                    featured:"Arch Linux",
                    date: "23 mar",
                    text: "una distribución de Linux® liviana y flexible que intenta mantenerlo simple.",
                    more: "https://archlinux.org/",
                    image: "./assets/img/archs.jpg",
                },
                {
                    use: "Sistema Operativo",
                    featured:"Fedora",
                    date: "22 mar",
                    text: "Fedora siempre es libre para que cualquiera lo use, modique, y distribuya.",
                    more: "https://getfedora.org/es/",
                    image: "./assets/img/fedora.jpg",
                },
                {
                    use: "Sistema Operativo",
                    featured:"Ubuntu",
                    date: "21 mar",
                    text: "Ubuntu es una distribución Linux basada en Debian GNU/Linux, que incluye principalmente software libre y de código abierto.",
                    more: "https://ubuntu.com/download",
                    image: "./assets/img/ubuntu-logo6.png",
                },
                {
                    use: "Sistema Operativo",
                    featured:"Kali Linux",
                    date: "21 mar",
                    text: "Distribución de Linux orientada a diversas tareas de seguridad de la información, como pruebas de penetración, investigación de seguridad, informática forense e ingeniería inversa.",
                    more: "https://www.kali.org",
                    image: "./assets/img/kalitools.jpg",
                },
            ]
        }))
    },

    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
            nav:[
                {
                    title: "About",
                    text: "Los sistemas operativos GNU/Linux se encuentran normalmente en forma de compendios conocidos como distribuciones o distros.​ Entre las más populares se encuentran Debian, Ubuntu, Red Hat y SUSE. El propósito de estas distribuciones es ofrecer GNU/Linux como un producto final para instalar o probar en un ordenador, cubriendo una gama de necesidades que van desde el uso cotidiano personal hasta aplicaciones muy específicas en ambientes especializados."
                },
                {
                    title:"Distros mas usadas",
                    links:[
                        {
                            name:"Debian",
                            href:"https://www.debian.org/download"
                        },
                        {
                            name:"Red Hat",
                            href:"https://access.redhat.com/downloads"
                        },
                        {
                            name:"Ubuntu",
                            href:"https://ubuntu.com/download/desktop"
                        },
                        {
                            name:"Arch Linux",
                            href:"https://archlinux.org/download/"
                        },
                        {
                            name:"Fedora",
                            href:"https://getfedora.org/es/workstation/download/"
                        },
                        {
                            name:"Linux Mint",
                            href:"https://linuxmint.com/download.php"
                        },
                        {
                            name:"Pop! OS",
                            href:"https://pop.system76.com/"
                        },
                        {
                            name:"CentOS",
                            href:"https://www.centos.org/download/"
                        },
                        {
                            name:"Linux Lite",
                            href:"https://www.linuxliteos.com/download.php#requirements"
                        },
                        {
                            name:"SUSE",
                            href:"https://www.suse.com/es-es/products/"
                        },
                        {
                            name:"Zorin OS",
                            href:"https://zorin.com/os/download/"
                        },
                        {
                            name:"Manjaro",
                            href:"https://manjaro.org/download/"
                        },
                        {
                            name:"Archcraft",
                            href:"https://archcraft.io/download.html"
                        },
                        {
                            name:"Kubuntu",
                            href:"https://kubuntu.org/getkubuntu/"
                        },
                        {
                            name:"Elementary OS",
                            href:"https://elementary.io/es/"
                        },
                        {
                            name:"Parrot OS",
                            href:"https://www.parrotsec.org/download/"
                        },
                        {
                            name:"Kali Linux",
                            href:"https://www.kali.org/get-kali/"
                        },
        
                    ]
                },
                {
                    title: "Repositorio del Kernel Linux",
                    links: [
                        {
                            name: "Git hub: Kernel Linux",
                            href: "https://github.com/torvalds/linux"
                        }
                    ]
                },
            ]
        }))
    },
    dataMyContent(){
        localStorage.setItem("myContent",JSON.stringify({
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
        
            }
        }));
    },

    dataMyContent2(){
        localStorage.setItem("myContent2", JSON.stringify({
            parteUno:{
                title:"Sistemas Linux más utilizados en la actualidad",
                date: "Marzo 25, 2023 by",
                author:{
                    name:"Andres Galvis",
                    href:"https://github.com/paleto30"
                },
                text:" Linux es un sistema operativo de código abierto que ha ganado popularidad en los últimos años debido a su flexibilidad, estabilidad y seguridad. En este sentido, hemos recopilado una lista de los sistemas Linux más utilizados en la actualidad, junto con la cantidad aproximada de usuarios, así como también una clasificación según si se utilizan principalmente para % Para Desarrollo o para % Para Tareas Comunes. La siguiente tabla presenta esta información de forma clara y concisa para ayudarte a conocer mejor los sistemas Linux más populares y su uso actual en la comunidad."
           },
           tabla:[
            {
                "Sistema Linux": "Ubuntu",
                "Cantidad de usuarios aproximados": 40000000,
                "% Para Desarrollo": 0.6,
                "% Para Tareas Comunes": 0.4,
                "Usuarios  desarrollo": 24000000,
                "Usuarios Tareas comunes": 16000000
              },
              {
                "Sistema Linux": "Debian",
                "Cantidad de usuarios aproximados": 5000000,
                "% Para Desarrollo": 0.5,
                "% Para Tareas Comunes": 0.5,
                "Usuarios  desarrollo": 2500000,
                "Usuarios Tareas comunes": 2500000
              },
              {
                "Sistema Linux": "Fedora",
                "Cantidad de usuarios aproximados": 1200000,
                "% Para Desarrollo": 0.7,
                "% Para Tareas Comunes": 0.3,
                "Usuarios  desarrollo": 840000,
                "Usuarios Tareas comunes": 360000
              },
              {
                "Sistema Linux": "CentOS",
                "Cantidad de usuarios aproximados": 1000000,
                "% Para Desarrollo": 0.4,
                "% Para Tareas Comunes": 0.6,
                "Usuarios  desarrollo": 400000,
                "Usuarios Tareas comunes": 600000
              },
              {
                "Sistema Linux": "Linux Mint",
                "Cantidad de usuarios aproximados": 800000,
                "% Para Desarrollo": 0.3,
                "% Para Tareas Comunes": 0.7,
                "Usuarios  desarrollo": 240000,
                "Usuarios Tareas comunes": 560000
              },
              {
                "Sistema Linux": "Arch Linux",
                "Cantidad de usuarios aproximados": 600000,
                "% Para Desarrollo": 0.8,
                "% Para Tareas Comunes": 0.2,
                "Usuarios  desarrollo": 480000,
                "Usuarios Tareas comunes": 120000
              },
              {
                "Sistema Linux": "openSUSE",
                "Cantidad de usuarios aproximados": 400000,
                "% Para Desarrollo": 0.6,
                "% Para Tareas Comunes": 0.4,
                "Usuarios  desarrollo": 240000,
                "Usuarios Tareas comunes": 160000
              },
              
           ],
        }));
    },

    dataMyContent3(){
        localStorage.setItem("myContent3", JSON.stringify({
            post:{
                title:"Linux 6.0 algunas mejoras y características nuevas",
                intro:"El 2 de octubre de 2022, Linus Torvalds anunció Linux 6.0 como una actualización con muchos cambios, especialmente en lo que respecta al número de commits. Aunque especificó que un cambio de número de versión principal no implica necesariamente grandes cambios fundamentales. El kernel Linux 6.0 trae diversas mejoras de rendimiento, soporte para nuevo hardware y parches de seguridad, entre otras cosas. Esta nueva versión principal es la sucesora de la serie Linux 5.x.y, cuya última versión es Linux 5.19.",
                by:{
                    date:"06/10/2022",
                    author:"stackscale",
                    href:"https://www.stackscale.com/es/blog/kernel-linux-6-0/"
                },
                new:{
                    into: "Algunas Caracteristicas son:",
                    text:"Estas son algunas de las novedades y mejoras en el kernel de Linux 6.0:",
                    feature:[
                        {
                            text:"Soporte para los procesadores Intel de 4ª generación Xeon Sapphire Rapids y los chips core de 13ª generación Raptor Lake."
                        },
                        {
                            text:"Soporte PCI para las arquitecturas OpenRISC y LoongArch."
                        },
                        {
                            text:"Soporte para Intel SGX2."
                        },
                        {
                            text:"Soporte para Qualcomm Snapdragon 8xc Gen3."
                        },
                        {
                            text:"Monitorización de temperatura de AMD para próximas CPUs de AMD."
                        },
                        {
                            text:"Cambios en el programador, que incluye la mejora del equilibrio NUMA para AMD Zen."
                        },
                        {
                            text:"Soporte para autenticación en banda NVMe."
                        },
                        {
                            text:"La arquitectura RISC-V incluye una nueva configuración por defecto capaz de ejecutar Docker desde el inicio."
                        },
                        {
                            text:"Runtime verification."
                        },
                        {
                            text:"El sistema de archivos ext4 soporta nuevas operaciones ioctl(): EXT4_IOC_GETFSUUID y EXT4_IC_SETFSUUID."
                        },
                        {
                            text:"Soporte para el driver V3D para las Raspberry Pi para Raspberry Pi 4."
                        },
                        {
                            text:"Mejora del uso de la energía gracias a la eliminación de la heurística de margen de energía que limitaba la migración de procesos entre CPUs."
                        },
        
                    ]
                }
            }
        }))
    },

    dataMyFooter(){
        localStorage.setItem("myFooter", JSON.stringify({
            data:{
                creator:{
                    text:"Blog Creado por ",
                    author:{
                        name:"Andres F Galvis",
                        href:"https://github.com/paleto30"
                    }
                },
                copy:"Copyright © todos los derechos reservados",
                topPage:"Regresar Arriba"
            },
        }));
    }
}