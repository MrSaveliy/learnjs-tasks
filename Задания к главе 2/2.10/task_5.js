
let login = 'Сотрудник' /* в зависиимости от значения login меняется massage*/
/*let login = 'Директор'
let login = ''
let login = '2'*/

let message = (login == 'Сотрудник') ? 'Привет':
  (login == 'Директор') ?  'Здравствуйте':
  (login == '') ?  'Нет логина':
  '';

console.log(message)