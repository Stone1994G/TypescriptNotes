"use strict";
exports.__esModule = true;
var point_1 = require("./point");
// Typescript Tutorial
// from Mosh Hamedani Angular crash course for busy devs
// TYPE 
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
// Type Assertions
var message;
message = 'abc';
// idk if below two lines are correct...
//let endsWithC = (<string>message).endsWith('c')
//let alternativeWay = (message as string).endsWith('c');
// Normal Functions
var log = function (message) {
    console.log(message);
};
/* Arrow Function --- no longer require function keyword
              () <-- parameters
 cleaner way to define function...... */
var doLog = function (message) { return console.log(message); };
;
/* Access Modifiers
 ex: public, private, protected
 everything is public by default unless specified elsewhere
 used to control access to variable within a class
*/
// You have to initilize a instance of the class as object
var point = new point_1.Point(1, 2);
var x1 = point.getX; // Getter (Accessor) function Implementation
var x2 = point.x; // Property Implementation (No longer a function)
point.setX(10);
point.draw();
/*
let drawPoint = (point: Point) =>{

}

// In line annotation
let drawPoint = (point: {x:number, y: number}) => {
    //....
}

let drawPoint = (point) => {
    // ....`
}

drawPoint([
    x: 1,
    y: 2
])



// let vs var
 
 function doSomething() {
    for(var i = 0; i<5; i++){
        console.log(i);
    }
    // var will have the scope be open
    console.log('Finally: ' + i);
}

function doSomethingright() {
    let num;
    for(let i = 0; i<5; i++){
        console.log(i);
        num = i;
    }
    // let ^^ wont have i outside of its scope
    // num will be 4 while i ends at being 5 but not printed out because it doesn't step into for loop
    console.log('Finally: ' + num);
}
doSomething();
doSomethingright();
*/ 
