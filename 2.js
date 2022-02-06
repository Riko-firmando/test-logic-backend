function findNumber(num) {
  num = num.sort((a, b) => a - b); //[ 1, 2, 3, 5, 7 ]
  for (let i = 0; i < num.length; i++) {
    if (num[i] == num[i + 1]) {
      num.splice(i, 1);
    }
  }
  let comp = num[0];
  let lastIndex = num[num.length - 1];
  let res = [];
  let y = 0;

  for (let i = 0; i < lastIndex - 1; i++) {
    if (num[y] == comp) {
      y++;
    } else {
      res.push(comp);
    }
    comp++;
  }

  return res;
}

console.log(findNumber([5, 7, 2, 1, 9, 23, 25]));
console.log(findNumber([2, 3, 8, 2, 3, 1, 1, 9, 20]));
