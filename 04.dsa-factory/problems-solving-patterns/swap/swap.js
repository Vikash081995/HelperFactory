function swap(arr, indx1, indx2) {
  var temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}

//es2015
const swap = (arr, ix1, ix2) => {
  [arr[ix1], arr[ix2]] = [arr[ix2],arr[ix1]];
};
