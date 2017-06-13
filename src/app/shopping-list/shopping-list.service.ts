import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {

    private ingredients: Ingredient[] = [new Ingredient('testIngredient', 2)];
    ingredientAdded = new EventEmitter<Ingredient[]>();
    startEditing = new Subject<number>();
  
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientAdded.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientAdded.next(this.ingredients.slice());
    }

}