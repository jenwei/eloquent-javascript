// Looping a Triangle
var printStr = ""
while (printStr.length < 7) {
    printStr += "#";
  console.log(printStr);
}

// FizzBuzz (V1)
var num = 1;
while (num <= 100) {
  if ((num % 3 === 0) && (num % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log (num);
  }
  num ++;
}

// FizzBuzz (V2)
var word = "";
for (var num = 1; num <=100; num ++) {
  if (num % 3 === 0) {
    word += "Fizz"
  }
  if (num % 5 === 0) {
    word += "Buzz"
  }
  console.log(word || num);
  word = "";
}

// Chess Board
var size = 8;
var line = 0;
