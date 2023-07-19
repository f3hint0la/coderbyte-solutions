function simpleMode(arr) {
  var numbers = {};
  var mode = 0;
  var count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (numbers[item]) {
      numbers[item]++;
    } else {
      numbers[item] = 1;
    }

    for (let x = 0; x < arr.length; x++) {
      if (numbers[item] > count) {
        count = numbers[item];
        mode = item;
      }
    }
  }

  if (count > 1) return mode;
  else return -1;
}

const input = [10, 4, 5, 2, 4];
console.log(simpleMode(input));
