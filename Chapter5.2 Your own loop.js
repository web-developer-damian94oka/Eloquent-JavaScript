/*function loop (value, test, update, body) {
  if (!test(value)) return;
  body(value);
  loop(update(value), test, update, body);
}*/

/*function loop (value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}*/

function loop (value, test, update, body) {
    for (let number = value; test(number); number = update(number)){
      body(number);
    }
  }
  
//loop(3, n => n > 0, n => n - 1, console.log);
