"use strict";
exports.__esModule = true;
var like_1 = require("./like");
var user = new like_1.Like(44, false);
console.log(user.likes);
console.log(user.selected);
user.clicked();
console.log(user.likes);
console.log(user.selected);
