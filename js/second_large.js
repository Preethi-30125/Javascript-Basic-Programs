const c=[1,45,32,76,23];
function second_largest(c) {
  const sortedArr = c.sort((a, b) => b - a);
  return sortedArr[1];
}
console.log(second_largest(c));