function sumTo(n) {
  let result = 0;
  for (let i = n; i !== 0; i--) {
    result += n;
    n = n - 1
  }
  return result;
}
console.log(sumTo(5));

/* 1. Самый быстрый по формуле, потом цикл.
2. Будет ошибка: максимальный размер стека превышен, */