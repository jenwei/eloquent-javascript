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
  var list = null;
  
  for (var i = arr.length - 1; i >= 0; i-- ) {
     list = {
       value: arr[i],
       rest: list
     };
  }
  return list;
}

function listToArray(list) {
  var arr = [];
  for (var item = list; item != null; item = item.rest) {
    arr.push(item.value);
  }
  return arr;
}

function prepend(element, list) {
  return {value: element, rest: list}
}

function nth(list, num) {
  if (list == null) {
    return undefined;
  } else if (num == 0) {
    return list.value;
  } else {
    return nth(list.rest, num - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// Deep Comparison
function deepEqual (value1, value2) {
  if (value1 === value2) {
    return true;
  }
  if ((typeof value1 == 'object' && value1 != null) && (typeof value2 == 'object' && value2 != null)) {
    if (Object.keys(value1).length !== Object.keys(value2).length) {
      return false;
    }
   for (var v in value1) {
     if (!(v in value2) || !(deepEqual(value1[v], value2[v]))) {
       return false;
     }
   }
   return true;
  }
  return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
