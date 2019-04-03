'use strict';
module.exports = function() {
  const randomNumber = Math.floor(Math.random() * Math.floor(1000000));
  
  return function secretNumber(){
    return randomNumber;
  }
};