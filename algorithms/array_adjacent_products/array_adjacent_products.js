'use strict';

//return the largest product of 2 adjacent values within the 2D array

function largestProduct (twoDArray) {
  let arr = twoDArray;
  let highestProduct = 0;
  let highestElement = 0;
  let highestElementAdj = 0;
  //highest element [y,x]
  let hEXY = [];
  //highest element
  for (var i = 0; i < arr.length; i++) {
    for (var j =0; j < arr[i].length; j++) {
      if (highestElement < arr[i][j]) {
        highestElement = arr[i][j];
        hEXY[0] = i
        hEXY[1] = j
        console.log('highest element is: ', highestElement);

      }
    }
  }
  // x x  x
  // x HE x
  // x x  x
  let adjacentElements = {
    topLeft: [hEXY[0]-1,hEXY[1]-1],
    top: [hEXY[0]-1,hEXY[1]],
    topRight: [hEXY[0]-1,hEXY[1]+1],
    left: [hEXY[0],hEXY[1]-1],
    right: [hEXY[0],hEXY[1]+1],
    botLeft: [hEXY[0]+1,hEXY[1]-1],
    bot: [hEXY[0]+1,hEXY[1]],
    botRight: [hEXY[0]+1,hEXY[1]+1],
  }

  //highest defined adjacent
  let eleNames = Object.keys(adjacentElements);
  for (var i = 0; i < eleNames.length; i++) {
    if (arr.length > adjacentElements[`${eleNames[i]}`][0] && adjacentElements[`${eleNames[i]}`][0] > -1) {
      if (arr[adjacentElements[`${eleNames[i]}`][0]].length > adjacentElements[`${eleNames[i]}`][1]) {
        if(highestElementAdj < arr[adjacentElements[`${eleNames[i]}`][0]][adjacentElements[`${eleNames[i]}`][1]]){
          highestElementAdj = arr[adjacentElements[`${eleNames[i]}`][0]][adjacentElements[`${eleNames[i]}`][1]];
          console.log(`highest adjacent element to ${highestElement}: ${highestElementAdj}`);
        }
    }
    }
  }

  highestProduct = highestElement * highestElementAdj;
  return highestProduct;

}


let testArr =  [
    [ 1, 2, 10 ],
    [ 2, 7, 2 ],
    [ 3, 9, 1 ],
    [ 7, 8, 9 ]
  ]

largestProduct(testArr);
