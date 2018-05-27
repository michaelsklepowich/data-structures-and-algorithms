'use strict';

function (array, newValue) {
  let middle = Math.ceil(array.length /2 )
  let newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i < middle) {
      newArr[i] = array[i];
    }
    else if (i === middle) {
      newArr[i] = newValue;
    }
    else if (i > middle) {
      newArr[i] = array[i+1];
    }
  }
  return newArr;  
}
