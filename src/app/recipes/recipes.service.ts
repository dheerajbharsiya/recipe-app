import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test Desc', 'https://c1.staticflickr.com/3/2015/2269983942_96804244fb_b.jpg', [new Ingredient('water', 0)]),
        new Recipe('Pizza', 'Very deilicious', 'https://c1.staticflickr.com/3/2015/2269983942_96804244fb_b.jpg', [new Ingredient('rice', 1), new Ingredient('buns', 1)])
    ];

    constructor(private shoplService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes[id]; 
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoplService.addIngredients(ingredients);
    }
}