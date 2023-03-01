while (true) {
  let number = prompt('Введите число больше 100!');
  if (number >= 100) { 
  alert(`Число ${number} соответствует условию!`) 
  break;
} else { alert(`Число ${number} меньше 100, еще раз!`);
}
}