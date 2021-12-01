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