class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    plus(obj) {
      let result = `Vec{x: ${this.x += obj.x}, y: ${this.y += obj.y}}`;
      return result;
    }
    alternativePlus(obj){ //return object as result not string like in previous case but don't include "Vec"
      obj.x += this.x;
      obj.y += this.y;
      return obj;
    }
    minus(obj) {
      let result = `Vec{x: ${this.x -= obj.x}, y: ${this.y -= obj.y}}`;
      return result;
    }
    alternativeMinus(obj){ // equivalent to alternativePlus
      obj.x = this.x - obj.x;
      obj.y = this.y - obj.y;
      return obj;
    }
    get length() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
  }
    
  /*console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5
  console.log(new Vec(1, 2).alternativePlus(new Vec(2, 3)));
  console.log(new Vec(1, 2).alternativeMinus(new Vec(2, 3)));*/