"use strict";
exports.__esModule = true;
exports.Point = void 0;
// Modules - add 'export' in front of class to make it available to other files
// Classes
var Point = /** @class */ (function () {
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
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // Basic Accessor
    Point.prototype.getX = function () {
        return this._x;
    };
    // Basic Mutator
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    };
    Object.defineProperty(Point.prototype, "x", {
        /* A property looks like a field from the outside but internally its really a method in the class
        To be more accurate its a utility that can be used for accessors and mutators (getters and setters)
        * Property Accessor */
        get: function () {
            return this.x;
        },
        // Property Mutator
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    // Method - public by default
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y; ' + this._y);
    };
    return Point;
}());
exports.Point = Point;
