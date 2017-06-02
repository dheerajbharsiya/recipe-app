import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipeService} from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelected() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
