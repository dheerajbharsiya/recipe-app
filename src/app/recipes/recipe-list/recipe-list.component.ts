import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Desc', 'https://c1.staticflickr.com/3/2015/2269983942_96804244fb_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
