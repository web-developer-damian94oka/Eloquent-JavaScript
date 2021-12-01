function reverseArray (array) {
    let reverseOrder = [];
    for (let element of array) {
      reverseOrder.unshift(element);
    }
    return reverseOrder;
  }
  
  function reverseArrayInPlace (array) {
    for (let i = 0; i < (Math.floor(array.length / 2)); i++) {
      let front = array[i];
      array[i] = array[array.length - i - 1];
      array[array.length - i - 1] = front;
    }
  }

/*console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]*/
