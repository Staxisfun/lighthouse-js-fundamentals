const sumLargestNumbers = function(data) {
var highest = 0
var secondHighest = 0

for (var i = 0; i < data.length; i++) {
  if (data[i] >= highest) {
    secondHighest = highest;
    highest = data[i];
  }else if (data[i] > secondHighest && data[i] < highest) {
    secondHighest = data[i];
  }
}
  return secondHighest + highest
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));