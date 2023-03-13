function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = {}; 

let rabbit = new Rabbit('Bunny');
let rabbit1 = new rabbit.constructor('Roger');

console.log( rabbit1.name ); // undefined