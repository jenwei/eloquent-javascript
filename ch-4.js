// The Sum of a Range

function range(start, end, step) {
  var res = [];
  if (start < end) {
    if (step == undefined) {
      step = 1;
    }
    for (var i = start; i <= end; i+= step) {
    res.push(i);
    }
  } else {
      if (step == undefined) {
       step = -1;
      }
      for (var i = start; i >= end; i+= step) {
       res.push(i);
      }
  }
  
  return res;
}

function sum(numArr) {
  var res = 0;
  for (var n = 0; n < numArr.length; n++) {
    res += numArr[n];
  }
  return res;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// Reverse an Array

function reverseArray(arr) {
  var newArr = [];
  for (var x = (arr.length-1); x >= 0; x--) {
    newArr.push(arr[x]);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    console.log('temp', temp);
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// A List
function arrayToList(arr) {
  
}

function prepend(el, lst) {
  
}
