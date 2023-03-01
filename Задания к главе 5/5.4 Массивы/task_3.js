let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // [ 'a', 'b', [Function (anonymous)] ]
/* создается метод вывод массива,вызов функции arr[2]
 как метода объекта он получает в качестве this 
 объект arr и выводит массив. */ы