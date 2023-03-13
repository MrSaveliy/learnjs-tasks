Function.prototype.defer = function(ms) {
  setTimeout(() => this.apply(arguments), ms);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); 