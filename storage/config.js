export default{

    registros: (localStorage.getItem("Registros") ? JSON.parse(localStorage.getItem("Registros")) : []),

    dataMyResultados(){
        
        return {
            dataR:[
                {
                    text:"Disponible",
                    valor: 0
                },
                {
                    text:"INGRESOS",
                    valor:0
                },
                {   
                    text:"EGRESOS",
                    valor:0
                }
            ],
        }   
    },
    dataMyForm(){
        localStorage.setItem("myForm", JSON.stringify({
            dataF:{
                operacion:[
                    {
                        value:1,
                        text:"+"
                    },
                    {
                        value:0,
                        text:"-"
                    }
                ],
                descripcion:{
                    name:"descripcion",
                    placeholder:"Agregar Descripcion de movimineto",
                },
        
                valor:{
                    name: "valor",
                    placeholder:"$0",
                }
            },
        }))
    },

    dataMyTableIngresos(){
        localStorage.setItem("myIngresos",JSON.stringify({
            data:{
                nameTable:"INGRESOS",
                
                StructTable:[
                    {
                        col:"Descripcion"
                    },
                    {
                        col:"Valor"
                    }
                ],
        
                body: this.renderTablasI(this.registros)
            },
        }))
    },

    dataMyTableEgresos(){
        localStorage.setItem("myEgresos", JSON.stringify({
            dataE:{
                nameTable:"EGRESOS",
                structTable:[
                    {
                        col:"Descripcion"
                    },
                    {
                        col:"Valor"
                    }
                ],
                body: this.renderTablasE(this.registros)
            },
        }))
    },


    renderTablasI(data){
        let ingresoss = []
        data.forEach(element => {
            if(element.operacion){
                ingresoss.push(element);
            }
        });
        return ingresoss
    },
    renderTablasE(data){
        let egresoss = []
        data.forEach(element => {
            if(!element.operacion){
                egresoss.push(element);
            }
        });
        return egresoss
    }
}

