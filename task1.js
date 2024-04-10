function SortNum(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

function sortNumberArray(arr){
console.log(arr);    
arr = arr.sort(SortNum);
console.log(arr);
}
