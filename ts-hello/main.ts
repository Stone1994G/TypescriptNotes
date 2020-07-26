import { Point } from './point'

// Typescript Tutorial
// from Mosh Hamedani Angular crash course for busy devs

// TYPE 
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,true,'a',false];

// Type Assertions
let message;
message = 'abc';
// idk if below two lines are correct...
//let endsWithC = (<string>message).endsWith('c')
//let alternativeWay = (message as string).endsWith('c');

// Normal Functions
let log = function(message) {
    console.log(message);
}

/* Arrow Function --- no longer require function keyword
              () <-- parameters                        
 cleaner way to define function...... */
let doLog = (message) => console.log(message);
 
// Interface - only for declaration - NOT for implementation 
interface Coordinates {
    x: number,
    y: number
    draw: () => void
};

/* Access Modifiers
 ex: public, private, protected
 everything is public by default unless specified elsewhere
 used to control access to variable within a class
*/



// You have to initilize a instance of the class as object
let point = new Point(1 , 2);
let x1 = point.getX; // Getter (Accessor) function Implementation
let x2 = point.x // Property Implementation (No longer a function)
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