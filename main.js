"use strict";
// by adding import and export ts treat this a module rather than a file module will have its own scope while file will have global scope
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Welcome back ";
var isBegginer = true;
var total = 2;
total = 3;
var sentence = "iam vishwas ".concat(total);
// console.log(sentence)
var list1 = [1, 2, 3];
var list2 = ['a', 'b'];
var person = ['kholi', 23];
var color;
(function (color) {
    color[color["white"] = 2] = "white";
    color[color["green"] = 3] = "green";
    color[color["orange"] = 4] = "orange";
})(color || (color = {}));
var clr = color.white;
console.log(clr, 'hii');
var myVar = 10;
myVar = 'mkejfke';
console.log(myVar());
myVar.toUpperCase();
var mykv = 22;
// we have a user defined type guard when we uses the unkown type
console.log(mykv.toLocaleUpperCase());
// union type
var multiType;
multiType = 23;
multiType = true;
// console.log(message)
// funcyions in ts
// function add (num1,num2) {
//     return num1+num2
// }
// console.log(add(1,2))

// to make the background transperent
style: {
              backgroundColor: "transparent", // Make the dialog background transparent
              boxShadow: "none",
            },
