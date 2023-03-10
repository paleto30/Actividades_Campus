const data = {
    1:[
        [90 , 100],
        [80 , 89],
        [70 , 79],
        [60 , 69],
        [1  , 59],
        [0  , 0 ],
    ],
    2:[
        [12 , 14],
        [9 , 11],
        [6 , 8],
        [3 , 5],
        [1 , 2],
        [0 , 0],
    ],
    3:[
        [5],
        [4],
        [3],
        [2],
        [1],
        [0],
    ],
    letter:[
        ['A'],
        ['B'],
        ['C'],
        ['D'],
        ['E'],
        ['F'],
    ],
    Proficiency:[
        ["Exceeds proficiency"],
        ["Demostrates proficiency"],
        ["Approaches proficiency"],
        ["Falls well below proficiency"],
        ["Lacks all proficiency"],
        ["No attempt made"]
    ],
    text:[
        ["Felicitaciones Ganaste una beca"],
        ["Ganaste el descuento de la mitad de tu semestre"],
        ["Esfuerzate un poco mas , recibiras buenos beneficios"],
        ["Debes mejorar tu desempeño"],
        ["tienes que esforzarte o perderas"],
        ["estas fuera del programa"]
    ]
}


function listado(formato) {
    let union = [];
    data[formato].forEach((element) => {
        union = union.concat(element)
    });
    return `${Math.min(...union)} - ${Math.max(...union)}`
}

function  validar(formato, nota) {
    
    let mensaje = '';
    if (formato != 3) {
        for (let [id, val] of Object.entries(data[formato]) ){
            if(val[1] >= nota && val[0]<=nota){ 
                mensaje = `calificacion: ${data.letter[id]}\nProficiency: ${data.Proficiency[id]} \nmensaje: ${data.text[id]}`;
                break;
            }  
        }
    }else{
        for (const [id, val] of Object.entries(data[formato])) {
            if (val == nota) {
                mensaje = `Calificacion ${data.letter[id]}\nProficiency: ${data.Proficiency[id]} \nmensaje: ${data.text[id]}`
            }
        }
    }
   
    return mensaje
}

 
export default{
    listado,
    validar
}
