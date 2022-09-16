"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        console.log(`Criou a TV ${brand}`);
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    ;
    turnOn() {
        console.log(this.brand);
        console.log(this.size);
        console.log(this.resolution);
        console.log(this.connections);
    }
}
const TV1 = new Tv('Samsumg', 30, 10, 'HDMI');
TV1.turnOn();
