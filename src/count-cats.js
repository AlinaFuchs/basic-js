const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
 let cats = 0;
 for(let i = 0; i < backyard.length; i++) {
   let arr = backyard[i];
   for(let l = 0; l< arr.length; l++) {
     if(arr[l] == '^^') {
       cats++
     }
   }
}
 return cats;
};
