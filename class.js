export class Lapiz{
    #marca
    constructor({color="#1B5BBE", dimension=12, borrador=true, material="Goma", marca="Mongol"}){
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
    getColor(){
        return this.color
    }

    getDomension(){
        return this.dimension
    }
    
    getBorrador(){
        return this.borrador
    }

    getMaterial(){
        return this.material
    }

    getMarca(){
        return this.#marca
    }
}

