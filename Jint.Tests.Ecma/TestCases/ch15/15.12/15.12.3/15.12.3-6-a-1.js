/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.12/15.12.3/15.12.3-6-a-1.js
 * @description JSON.stringify treats numeric space arguments greater than 10 the same as a  space argument of 10.
 */


function testcase() {
  var obj = {a1: {b1: [1,2,3,4], b2: {c1: 1, c2: 2}},a2: 'a2'};
  return JSON.stringify(obj,null, 10)=== JSON.stringify(obj,null, 100);
  }
runTestCase(testcase);
