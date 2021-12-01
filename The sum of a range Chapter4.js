function range (start, end, step = 1) {
    let array = [];
    if (start < end) {
        for (let number = start; number <= end; number += step ) {
          array.push(number);
        }
    }
    else {
    for (let number = start; number >= end; number += step ) {
          array.push(number);
    }
    }
    return array;
  }
  
  function sum (numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }  

/*console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55*/
