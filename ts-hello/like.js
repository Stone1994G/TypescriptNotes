"use strict";
/**
 * When a user clicks the "Like" button below a post, the button is highlighted
 * (to indicate that it is selected) and the number of likes is increased.
 */
exports.__esModule = true;
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(_likes, _selected) {
        this._likes = _likes;
        this._selected = _selected;
    }
    Object.defineProperty(Like.prototype, "likes", {
        get: function () {
            return this.likes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        enumerable: false,
        configurable: true
    });
    Like.prototype.clicked = function () {
        if (this._selected == false) {
            this._selected = true;
            this._likes += 1;
        }
        else {
            this._selected = true;
            this._likes -= 1;
        }
    };
    return Like;
}());
exports.Like = Like;
