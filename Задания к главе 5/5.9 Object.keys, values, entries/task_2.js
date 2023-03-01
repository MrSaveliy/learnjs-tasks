let user = {
  name: 'John',
  age: 30,
};
function count(user) {
  let sum = 0;
  for (let value of Object.values(user)) {
    sum += 1
  }
  return sum;
};

console.log(count(user)); 