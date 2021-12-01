let list = {};
function arrayToList (array, i = 1, restValue = null) {
  list = {value: array[array.length - i], rest: restValue};
  if (i < array.length) {
    i++;
    return arrayToList(array, i, list);
  }
  else if (i == array.length) {
    return list;
  }
}

function listToArray (list) {
  let arrayValues = [];
  for (let node = list; node; node = node.rest) {
    arrayValues.push(node.value);
  }     
  return arrayValues;
}

let result = {};
function prepend (element, list) {
  result = {value: element, rest: list};
  return result;
}

/*function nth (list, number) {
  let i = 0;
  for (let node = list; node; node = node.rest) {
    if(i == number) {
      return node.value;
    }
    i++;
  }
}*/

function nth (list, number, i = 0) {
  if (i == number) {
    return list.value;
  } 
  else if (list.rest == null) {
    return undefined;
  }
  else {	
    i++;
    return nth(list.rest, number, i);
  }
}

/*console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20*/
