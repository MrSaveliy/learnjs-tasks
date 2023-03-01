let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let readText = new WeakSet();
readText.add(messages[0]);
readText.add(messages[1]);
readText.add(messages[0]);
console.log("Read message 0: " + readText.has(messages[0]));
messages.shift();