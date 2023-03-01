let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // 4 
/* push дабавляет элемент в конец списка,
так как shoppingCart ссылается на объект fruits,
изменения каснуться и объекта fruits */