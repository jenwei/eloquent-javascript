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

// Chess Board (create a size x size "chess board") (V1)
var size = 10;
var board = "";
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j ++) {
    if ((i % 2 != 0) && (j % 2 != 0)) {
      board += " ";
    } else if ((i % 2 != 0) && (j % 2 == 0)) {
      board += "#";
    } else if ((i % 2 == 0) && (j % 2 != 0)) {
      board += "#";
    } else if ((i % 2 == 0) && (j % 2 == 0)) {
      board += " ";
    }
  }
  board += "\n"
}
console.log(board);

// Chess Board (V2)
var size = 10;
var board = "";
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j ++) {
    if ((i + j) % 2 != 0) 
      board += "#";
    else
      board += " ";
  }
  board += "\n"
}
console.log(board);
