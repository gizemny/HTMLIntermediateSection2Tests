module.exports = function() {

  this.buildArray = function (first, second, third) {
    // return array with the items first, second, and third in an array.
    return [first, second, third];
  }

  this.returnThirdItem = function (arr) {
    // should return the third item in the array
    return arr[2];
  }

  this.setFirstItem = function (arr, newFirstItem) {
    // should set the first item in the array with newFirstItem
    arr[0]= newFirstItem
    return arr;
  }

  this.returnCenterItem = function(fiveByFiveArray) {
    // returns the "center" item in a 5 x 5 array
    // ex. 3 x 3 array [[1, 2, 3], [4, 5, 6], [7, 8, 9]] the center item is 5
    // var arrLength = fiveByFiveArray.length;
    // var lastIndex = arrLength - 1;
    // var midIndex = lastIndex / 2;
    // var middle = fiveByFiveArray[Math.floor((fiveByFiveArray.length - 1) / 2)];
    // fiveByFiveArray = [Math.floor((fiveByFiveArray.length - 1) / 2)];
    fiveByFiveArray = Math.ceil(fiveByFiveArray.length/2)
    return fiveByFiveArray;
    console.log(fiveByFiveArray);
  }


  this.arrayJoin = function(arr) {
    // should return a string of the joined array items, separated by a space
    return arr.join(' ');
  }

  this.stringSplit = function(str) {
    // should return an array of the words in a string, delimited by a space
  return str.split(' ');
  }

}
