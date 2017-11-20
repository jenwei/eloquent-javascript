// A Vector Type
function Vector (x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
};

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(this.x * this.x, this.y * this.y) }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

// Another Cell
function StretchCell (inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.inner.minHeight(), this.height);
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

// Sequence interface
function logFive(seq) {
  for(var i = 0; i < 5; i++) {
    if (seq.more()) {
      console.log(seq.current());
    } else {
      return;
    }
  }
}

function ArraySeq(arr) {
  this.position = 0;
  this.arr = arr;
}

ArraySeq.prototype.more = function() {
  if (this.position >= this.arr.length) {
    return false;
  }
  this.position ++;
  return true;
}

ArraySeq.prototype.current = function() {
  return this.arr[this.position - 1];
}

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
  this.position = this.from - 1;
}

RangeSeq.prototype.more = function() {
  if (this.position >= this.to) {
    return false;
  }
  this.position ++;
  return true;
}

RangeSeq.prototype.current = function() {
  return this.position;
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
