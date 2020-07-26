/**
 * When a user clicks the "Like" button below a post, the button is highlighted
 * (to indicate that it is selected) and the number of likes is increased. 
 */

export class Like {
    constructor(private _likes?: number, private _selected?: boolean){}
        get likes(): number {
            return this.likes;
        }
        get selected(): boolean{
            return this._selected;
        }
        clicked(): void{
            if(this._selected==false){
                this._selected = true;
                this._likes += 1
            }
            else{
                this._selected = true;
                this._likes -= 1
            }
        }
}