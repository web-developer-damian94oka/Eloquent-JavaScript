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
  /*let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false/*