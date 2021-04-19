"use strict";
function add1(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(printResult1(add1(5, 12)));
var combineValues;
combineValues = add1;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
//# sourceMappingURL=functions.js.map