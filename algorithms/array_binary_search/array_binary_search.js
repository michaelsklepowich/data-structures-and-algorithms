'use strict';

module.exports = exports = {};

exports.binarySearch = function(arr, val) {
  var half = Math.floor(arr.length / 2);

  if (arr.length === 1) {
    if (arr[0] === val) {
      return val;
    } else {
      return -1;
    }

  } else if (arr[half] === val) {
    return val;

  } else if (val > arr[half]) {
    return exports.binarySearch(arr.createNewArray(half, arr.length), val);

  } else {
    return exports.binarySearch(arr.createNewArray(0, half), val);
  }
};


Array.prototype.createNewArray = function(startingPoint, endingPoint) {
  const newArray = [];
  var newStartingPoint = 0;

  for (var i = startingPoint; i < endingPoint; i++) {
    newArray[newStartingPoint] = this[i];
    newStartingPoint++;
  }
  return newArray;
};
