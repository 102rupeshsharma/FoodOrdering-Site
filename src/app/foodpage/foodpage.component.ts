import { Component } from '@angular/core';
import { foods } from '../shared/models/food';
import { ActivatedRoute, Route } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent {
  food!:foods;

  constructor(private activedRoute:ActivatedRoute, 
    private foodservice:FoodService, private cartService:CartService, private router:Router) {
      activedRoute.params.subscribe((params) => {
        if(params['id'])
        this.food = foodservice.getFoodbyId(params['id'])
      })
     }

  ngOnInit() { 
  }
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cartpage');
  }
  buyNow() {
    this.router.navigateByUrl('/checkout')
  }


}
