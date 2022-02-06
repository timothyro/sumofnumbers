const intArr = [1, 3, 5, 7];

function sumFor(ints) {
  let sum = 0;
  for (let i = 0; i < ints.length; i++) {
    sum += ints[i];
  }
  return sum;
}
console.log(sumFor(intArr));

function sumWhile(ints) {
  let sum = 0;
  let i = 0;
  while (i < ints.length) {
    sum += ints[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(intArr));

function sumRecursion(ints, i) {
  if (i <= 0) {
    return 0;
  }
  return sumRecursion(ints, i - 1) + ints[i - 1];
}
console.log(sumRecursion(intArr, intArr.length));

function sumTheSimpleWay(ints) {
  return _.reduce(ints, function (memo, num) {
    return memo + num;
  });
}
console.log(sumTheSimpleWay(intArr));
