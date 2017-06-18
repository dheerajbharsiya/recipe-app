import { Injectable } from '@angular/core';
import { RecipeService } from './../recipes/recipes.service';
import { Http } from '@angular/http';
@Injectable()
export class CommonStorage {
    constructor(private rcpService: RecipeService, private http: Http) { }

    storeRecipe() {
       return this.http.put('https://recipe-app-project-db855.firebaseio.com/recipe.json', this.rcpService.getRecipes());
    };
}