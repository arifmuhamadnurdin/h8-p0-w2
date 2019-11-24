function xo(str) {
  // you can only write your code here!
  var karakterX=0;
  var karakterO=0;
  for (let x = 0; x <str.length; x++){
    if(str[x] === 'x'){
      karakterX ++;
    } else if (str[x] === 'o'){
      karakterO ++;
    }
  }
  if (karakterX === karakterO){
    return true;
    } else {
      return false;
    }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true