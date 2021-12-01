function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    
    return scripts.reduce((a, b) => {
      return b.count < a.count ? a.name : b.name;
    },0);
  }
  
  /*console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl*/
