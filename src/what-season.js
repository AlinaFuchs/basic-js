const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 if(date == null) {
   return 'Unable to determine the time of year!'
 } if (date === undefined || isNaN(date)) {
  throw new Error('Not implemented') ;
 } let month = date.getMonth(); 
  if (month == 0 || month == 1 || month == 11) {
    return 'winter';
} else if (month <5 ) {
  return 'spring'
} else if (month < 8) {
  return 'summer';
} else {
  return 'autumn'
}
};
