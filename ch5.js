// Flattening
var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr, rest) {
  return arr.concat(rest);
}
console.log(arrays.reduce(flatten));

// Mother-Child Age Difference (requires 'ancestry' data from the text)
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var hasKnownMother = ancestry.filter(function(person) {
  return byName[person.mother] != null;
});

var ageDifference = hasKnownMother.map(function(person) {
	return person.born - byName[person.mother].born;
});

console.log(average(ageDifference));
// → 31.2

// Historical Life Expectancy
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupByCentury(ancestry) {
  var byCentury = {};
  ancestry.forEach(function(person) {
    var century = Math.ceil(person.died / 100);
    if (century in byCentury) {
      byCentury[century].push(person);
    } else {
      byCentury[century] = [person];
    }
  });
  return byCentury;
}

var byCentury = groupByCentury(ancestry);
for (var century in byCentury) {
  var agesInCentury = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log('Average Age in the ' + century + 'th Century: ' + average(agesInCentury));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

// Every And Then Some
function every(array, predicateFunction) {
  for (var i = 0; i < array.length; i++) {
    if (!predicateFunction(array[i])) {
      return false;
    }
  }
  return true;
}

function some (array, predicateFunction) {
  for (var i = 0; i < array.length; i++) {
    if (predicateFunction(array[i])) {
      return true;
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
