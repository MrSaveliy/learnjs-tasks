let calculator = {
  read() {
    this.number_1 = +prompt('Введите первое число', 0);
    this.number_2 = +prompt('ВВедите второе число', 0);
  },
  sum() { 
    return this.number_1 + this.number_2;
  },
  mul () {
    return this.number_1 * this.number_2;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );