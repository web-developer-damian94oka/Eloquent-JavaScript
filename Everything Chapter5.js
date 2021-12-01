/*function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return test(element);
    }
  }
  return true;
}*/

function every(array, test) {
    if (array.some(x => !test(x))) return false;
    else return true;
   }

/*console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true*/