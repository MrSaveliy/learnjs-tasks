let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

function printReverseList1(list) {
  let arr = [];
  let value = list;

  while (value) {
    arr.push(value.value);
    value = value.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log( arr[i] );
  }
}

printReverseList(list);
printReverseList1(list);

