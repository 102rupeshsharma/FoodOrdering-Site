import { foods } from "./food";

export class CartItem{
  constructor(public _food:foods){ 
    this.food = _food;
  }

  food:foods;
  quantity:number = 1;
  get price():number {
    return this._food.price * this.quantity;
  }
}