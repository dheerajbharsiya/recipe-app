import { Subscription } from 'rxjs/subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: number;
  sub : Subscription ;
  constructor(private recipeService: RecipeService, private acitveRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.sub =  this.acitveRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  onAddShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.acitveRoute });
  }

  onDeleteReceip () {
   this.recipeService.deleteRecipe(+this.id); 
   this.router.navigate(['/recipes']);
}
  ngOnDestroy () {
    this.sub.unsubscribe();
  }

}
