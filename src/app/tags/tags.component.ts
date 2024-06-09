import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/tags';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string = 'center';

  tags?:Tag[] = [];
  constructor(private fs:FoodService) { }

  ngOnInit():void {
    if(! this.foodPageTags)
    this.tags = this.fs.getAllTag();
  }

}
