function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

console.log(rabbit.eats ); // true, rabbit наследует eats из Rabbit