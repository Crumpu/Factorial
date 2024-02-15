'use strict'

function factorial(a = 0) {
   if (0 > a) {
    return 'Значение не может быть меньше нуля';
    }
    if (a === 0) {
        return 1;
    }
    if (a < 1) {
      return a;
    }
    return a * factorial(a - 1); 
}
console.log(factorial(7))