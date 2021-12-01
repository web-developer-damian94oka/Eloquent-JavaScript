function deepEqual (x, y) {
    if ((typeof(x) == "object" && x != null) && (typeof(y) == "object" && x != null)) {
      if (Object.keys(x).length == Object.keys(y).length) {
        for (let i = 0; i < Object.keys(x).length ; i++) {
          if (Object.keys(x)[i] === Object.keys(y)[i]) {
            if (typeof(x[(Object.keys(x)[i])]) == "object") {
            if ((deepEqual(x[Object.keys(x)[i]], y[Object.keys(y)[i]])) == false) {
              return false;
            }
           
            }
            else if (x[Object.keys(x)[i]] != y[Object.keys(y)[i]]) {
              return false;
            }
          }
          else {
            return false;
          }
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
    return true;
  }

/*let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true*/
