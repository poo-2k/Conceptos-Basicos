export default class Car{
    constructor(marca, modelo, color = "white", kilometraje = 0){
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

    turnOn(){
        this.status = "On";
        this.showStatus();
    }

    turnOff(){
        this.status = "Off";
        this.showStatus();
    }

    go(speed, time){
        if(this.status === "Off") {
            console.log("The car can not move along because was off");
        } else{
            let long = speed * time;
            this.kilometraje = this.kilometraje + long;
            this.showStatus();
                }
    }
}