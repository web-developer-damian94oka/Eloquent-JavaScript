class Group {
    constructor(array){
      for (let element of array){
        this[element] = undefined;
      }
    }
    add(x){
      this[x] = undefined;
    }
    delete(x){
      delete this[x];
    }
    has(x){
     if (x in this) return true;
     else return false;
    }
    [Symbol.iterator] = function() {
      return new GroupIterator(this);
    };
    
    static from(obj){
      let array = [];
      if (typeof(obj) === "string" || Array.isArray(obj)){
        for (let element of obj) {
        array.push(element);
      }
      return new Group(array);
    }
      
    else
      for (let {value} of obj) {
        array.push(value);
      }
      return new Group(array);
    }
  }
  
  class GroupIterator {
    constructor(group) {
      this.group = group;
      this.i = 0;
    }
    next() {
      if (this.i == Object.keys(this.group).length) return {done: true};
      let value = Object.keys(this.group)[this.i];
      this.i++;
      return {value: value, done: false};
  
      
    }
  }
  
  /*for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c*/