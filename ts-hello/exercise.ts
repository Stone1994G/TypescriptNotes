import {Like} from './like'

let user = new Like(44,false);

console.log(user.likes);
console.log(user.selected);
user.clicked();
console.log(user.likes);
console.log(user.selected);
