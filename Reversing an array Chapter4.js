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