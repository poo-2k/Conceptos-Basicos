export default class Car{
    constructor(marca, modelo, color, kilometraje){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.kilometraje = kilometraje;
        this.status = "Off";
    }

    showStatus(){
       // forma antigua: console.log("The car" + this.marca + "" + this.color);
        console.log(`The ${this.color} car ${this.marca} of the year ${this.modelo} has a mileage of ${this.kilometraje} kms and is ${this.status}`);
    }
}