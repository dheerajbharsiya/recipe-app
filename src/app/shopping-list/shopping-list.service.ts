import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {

    private ingredients: Ingredient[] = [new Ingredient('testIngredient', 2)];
    ingredientAdded = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

}