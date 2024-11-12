function sumExcludingMinMax(arr) {
  if (arr.length <= 2) return 0;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const filteredArr = arr.filter((num) => num !== min && num !== max);
  return filteredArr.reduce((acc, num) => acc + num, 0);
}

console.log(sumExcludingMinMax([100, 2, 32, 4, 25]));
