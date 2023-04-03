export default{
    dataMyResultados(){

        localStorage.setItem("myResult",JSON.stringify({
            dataR:[
                {
                    text:"Presupuesto",
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
        }))
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
        
                body:[
                    {
                        description:"sueldo de capus",
                        valor:200000
                    },
                    {
                        description:"sueldo de capus2",
                        valor:400000
                    },
                    {
                        description:"Barbacha de capus2",
                        valor:150000
                    }
                ]
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
                body:[
                    {
                        description:"Pago Recibo Luz",
                        valor:120000
                    },
                    {
                        description:"Pago Internet",
                        valor:80000
                    },
                ]
            },
        }))
    },
}

