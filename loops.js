function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      return "I am 1 strange loop."
    } else if (i !== 1){
      return `I am ${array[i]} strange loops.`
    }
  }
}

function whileLoop (n) {
  while (n > 0) {
    console.log(--n)
  }
      return 'done'
}


function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
console.log('I run once regardless.');
} while (incrementVariable() < num)
