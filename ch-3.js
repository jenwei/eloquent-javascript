// Minimum
function min(x, y) {
  if (x > y) {
    return y;
  }
  return x;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Recursion
function isEven(n) {
  n = Math.abs(n); // Taking the absolute to account for negative numbers
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEven(n-2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Bean Counting
function countBs(s) {
  var count = 0;
  for (var i = 0; i<s.length; i++) {
    if (s.charAt(i) == 'B') {
      count ++;
    }
  }
  return count;
}

function countChar(s,l) {
  var count = 0;
  for (var i = 0; i<s.length; i++) {
    if (s.charAt(i) == l) {
      count ++;
    }
  }
  return count;
}

function countBsAgain(s) {
  return countChar(s, 'B');
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countBsAgain("BBC"));
// → 2
