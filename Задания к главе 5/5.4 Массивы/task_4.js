function sumInput() {
  let list = [];
  while (true) {
    let n = prompt("Введите число")
    if (n === "" || n === null || !isFinite(n)) break;
    list.push(+n);
  }
  let sum = 0;
  for (let item of list){
    sum += item
  }  
  return alert(sum);
}
sumInput()