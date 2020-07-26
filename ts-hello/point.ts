// Modules - add 'export' in front of class to make it available to other files
// Classes
export class Point {
    /* Basic constructor 
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x =x;
        this.y =y;
    }
    **^^^NORMAL CONSTRUCTOR ABOVE^^^** - 
    To make parameters optional and not enforced, add '?' before the variable name
    **ACCESS MODIFIER CONSTRUCTOR BELOW** Parameters - helps make one line constructor  
    Convention used to avoid name clashes with properties begin fields with underscore '_'   */
    constructor(private _x?: number, private _y?: number){}
    // Basic Accessor
    getX() {
        return this._x;
    }
    // Basic Mutator
    setX(value): void{
        if (value < 0)
            throw new Error('value cannot be less than 0.')
        this._x = value
    }
    /* A property looks like a field from the outside but internally its really a method in the class
    To be more accurate its a utility that can be used for accessors and mutators (getters and setters)
    * Property Accessor */
    get x() {
        return this.x
    }
    // Property Mutator
    set x(value){
        if (value < 0)
            throw new Error('value cannot be less than 0.')
        this._x = value
    }

    // Method - public by default
    draw() {
        console.log('X: ' + this._x + ', Y; ' + this._y);
    }
    // example
    //getDistance(another: Point) {}
}