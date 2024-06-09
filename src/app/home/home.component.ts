import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: foods[] = [];
  searchItem: any;
  constructor(private fs: FoodService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.foods = this.fs.getAll();
    this.router.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.foods = this.fs.getAllFoodByTag(params['tag'])
      else 
      this.foods = this.fs.getAll();
    })
  }
 

}
