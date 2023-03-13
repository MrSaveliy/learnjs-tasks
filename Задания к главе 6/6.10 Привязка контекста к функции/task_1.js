function f() {
  console.log( this ); // null, Object [global]
}

let user = {
  g: f.bind(null)
};

user.g();