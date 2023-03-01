let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];
let date = new WeakMap();
date.set(messages[0], new Date(2011, 11, 1));
console.log(date);
