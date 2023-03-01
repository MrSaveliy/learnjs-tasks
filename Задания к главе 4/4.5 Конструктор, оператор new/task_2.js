function Calculator() {
  this.read = function() {
    this.number_1 = +prompt('Введите первое число', 0);
    this.number_2 = +prompt('ВВедите второе число', 0);
  };
  this.sum = function() { 
    return this.number_1 + this.number_2;
  };
  this.mul = function() {
    return this.number_1 * this.number_2;
  };
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );