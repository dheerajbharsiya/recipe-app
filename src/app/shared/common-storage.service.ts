import { AuthService } from './../auth/auth.service';
import { element } from 'protractor';
import { RecipeItemComponent } from './../recipes/recipe-list/recipe-item/recipe-item.component';
import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { RecipeService } from './../recipes/recipes.service';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class CommonStorage {
    constructor(private rcpService: RecipeService, private http: Http, private authService: AuthService) { }

    storeRecipe() {
               const token = this.authService.getToken();
        return this.http.put('https://recipe-app-project-db855.firebaseio.com/recipe.json?auth='+token, this.rcpService.getRecipes());
    };

    getRecipe() {
       const token = this.authService.getToken();
        this.http.get('https://recipe-app-project-db855.firebaseio.com/recipe.json?auth='+token)
            .map((response: Response) => {
                const recipes: Recipe[] = response.json();
                recipes.forEach(element => {
                    if (!element.ingredients) {
                        element.ingredients = [];
                        console.log(element.ingredients);
                }
                });
                return recipes;
            })
            .subscribe((recipes: Recipe[]) => {
                this.rcpService.setRecipes(recipes);
            });
    }
}