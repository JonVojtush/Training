// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript
function flickSwitch(arr){
  let bool = true;
  for (let i = 0; i < len(arr); i++) {
    if (arr[i] = 'flick') {
      bool = !bool;
    }
    arr[i] = bool;
  }
  return arr;
} 