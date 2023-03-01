function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name );
/* будет ошиюка, так как ref не определен как метод,
и значение this внутри makeUser = undefined */