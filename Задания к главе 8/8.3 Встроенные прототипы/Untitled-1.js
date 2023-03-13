function Rabbit(name) {
  this.name = name;
}

let rabbit = new Rabbit('Bunny');
let rabbit1 = new rabbit.constructor('Roger');

console.log( rabbit1.name ); 