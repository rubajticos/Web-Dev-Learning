import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../component/recipes/recipe.model';
import { RecipeService } from '../component/recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put('https://angularcourse-recipe-book.firebaseio.com/recipes.json', recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>('https://angularcourse-recipe-book.firebaseio.com/recipes.json')
      .pipe(
        map((recipes) => {
          return recipes.map((recipes) => {
            return { ...recipes, ingredients: recipes.ingredients ? recipes.ingredients : [] };
          });
        })
      )
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
