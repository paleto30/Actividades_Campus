export default{
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
    },
    renderWorkerData(){
        const ws =  new Worker("storage/wsMyContent3.js",{type:"module"});
        ws.postMessage({datos: this.post});
        ws.addEventListener("message",(e)=>{
            document.querySelector("#articulo2").insertAdjacentHTML("afterbegin",e.data.titles);
            document.querySelector("#features").insertAdjacentHTML("afterbegin",e.data.data);
            ws.terminate();
        })
    }
}