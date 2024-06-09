import { Injectable } from '@angular/core';
import { foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/tags';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodbyId(id:number): foods {
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag:string):foods[]{
    return tag == 'All'?
    this.getAll() :  this.getAll().filter( food => food.tags?.includes(tag));
  }

  getAllTag():Tag[] {
    return [
      { name : 'All', count: 14},
      { name : 'FastFood', count: 4},
      { name : 'Pizza', count: 1},
      { name : 'Lunch', count: 3},
      { name : 'Hamburger', count: 1},
      { name : 'Fry', count: 1},
      { name : 'Soup', count: 1},
    ]
  }

  getAll():foods[]{
    return [
      {
        id: 1,
        name: "Fried Rice",
        price: 80,
        cookTime: '10-20',
        favorite: true,
        origins:['China'],
        star: 4.0,
        imageUrl:'/assets/food-1.jpg',
        tags: ['Rice','Lunch','BreakFast'],
      },
      {
        id: 2,
        name: "Spicy Noodles",
        price: 110,
        cookTime: '10-15',
        favorite: false,
        origins:['northwesten China'],
        star: 3.0,
        imageUrl:'/assets/food-2.jpg',
        tags: ['Noodles','Lunch','BreakFast','FastFood'],
      },
      {
        id: 3,
        name: "Vege Burger",
        price: 99,
        cookTime: '10-15',
        favorite: true,
        origins:['United States', 'Germany'],
        star: 3.0,
        imageUrl:'/assets/food-3.jpg',
        tags: ['burger','FastFood','BreakFast','Hamburger'],
      },
      {
        id: 4,
        name: "Amlate",
        price: 35,
        cookTime: '5-10',
        favorite: false,
        origins:['Ancient Persia'],
        star: 4.5,
        imageUrl:'/assets/food-4.jpg',
        tags: ['Amlate','FastFood','BreakFast'],
      },
      {
        id: 5,
        name: "Chicken",
        price: 140,
        cookTime: '30-40',
        favorite: false,
        origins:['India'],
        star: 4.0,
        imageUrl:'/assets/food-5.jpg',
        tags: ['Chicken','Dinner'],
      },
      {
        id: 6,
        name: "Pasta",
        price: 90,
        cookTime: '10-15',
        favorite: true,
        origins:['Italy'],
        star: 3.5,
        imageUrl:'/assets/food-6.jpg',
        tags: ['pasta','FastFood','BreakFast'],
      },
      {
        id: 7,
        name: "Pizza",
        price: 350,
        cookTime: '20-30',
        favorite: false,
        origins:['Italy'],
        star: 3.0,
        imageUrl:'/assets/food-7.jpg',
        tags: ['Pizza','Lunch','BreakFast'],
      },
      {
        id: 8,
        name:'Biryani',
        price: 150,
        cookTime: '20-30',
        favorite: true,
        origins:['India', 'Pakistan', 'Iran'],
        star: 5.0,
        imageUrl:'/assets/food-8.jpg',
        tags: ['biryani','dinnar'],
      },
    ];
  };
}
