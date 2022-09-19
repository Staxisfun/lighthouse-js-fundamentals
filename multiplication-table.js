const multiplicationTable = function(maxValue) {
 let grid = ''
 for (x = 1; x <= maxValue; x++) {
  for (y = 1; y <= maxValue; y++) {
    grid = grid + (x * y) + ' '
  }
  grid = grid + "\n"
 } return grid
};





















console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));