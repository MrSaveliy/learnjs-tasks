function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
inputAge = prompt('Сколко вам лет?');
checkAge(inputAge);

function checkAge2(age) {
  if (age >= 18) {
    return true;
  } // ...
    return confirm('Родители разрешили?');
}
inputAge = prompt('Сколко вам лет?');
checkAge2(inputAge);
/* Нет различий */