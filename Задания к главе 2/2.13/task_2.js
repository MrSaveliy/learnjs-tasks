let i = 0;
while (++i < 5) console.log( i ); // (1)
let i = 0;
while (i++ < 5) console.log( i ); // (2)
/* В 1 случае префикная форма, 
возвращает новое значение итерации, то есть выведены
будут числа 1,2,3,4,5.
Во 2 случае постфиксная форма, 
возвращает старое значение до итерации, 
следственно выводу будет 1,2,3,4 */