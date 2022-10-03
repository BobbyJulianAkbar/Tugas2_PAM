var str = "Test";

function first() {
  var a = 3;
  second();
  console.log(`${str} ${a}`);
}
function second() {
  var b = 2;
  third();
  console.log(`${str} ${b}`);
}
function third() {
  var c = 1;
  console.log(`${str} ${c}`);
}

first();