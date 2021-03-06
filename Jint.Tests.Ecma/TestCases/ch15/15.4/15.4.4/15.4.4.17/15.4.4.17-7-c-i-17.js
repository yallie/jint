/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-7-c-i-17.js
 * @description Array.prototype.some - element to be retrieved is own accessor property without a get function on an Array-like object
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return typeof val === "undefined";
            }
            return false;
        }

        var obj = { length: 2 };
        Object.defineProperty(obj, "1", {
            set: function () { },
            configurable: true
        });

        return Array.prototype.some.call(obj, callbackfn);
    }
runTestCase(testcase);
