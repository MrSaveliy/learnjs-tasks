let who = prompt("Кто там?", '');
if (who === 'Админ') {
  let pass = prompt('Пароль?', '');
  if (pass === 'Я главный') {
    alert('Здравствуйте!');
  } else if (pass === '' || pass === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (who === '' || who === null) {
  alert('Отменено');
} else {
  alert("Я вас не знаю");
}