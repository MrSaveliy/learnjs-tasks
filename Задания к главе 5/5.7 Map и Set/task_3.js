let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);
/* потому что map.keys() возвращает
 итерируемый объект, а не массив. */ 