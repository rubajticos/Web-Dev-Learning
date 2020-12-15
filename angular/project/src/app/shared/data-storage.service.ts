import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../component/auth/auth.service';
import { Recipe } from '../component/recipes/recipe.model';
import { RecipeService } from '../component/recipes/recipe.service';
import * as fromApp from '../component/store/app.reducer';
import * as RecipesActions from '../component/recipes/store/recipe.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put('https://angularcourse-recipe-book.firebaseio.com/recipes.json', recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://angularcourse-recipe-book.firebaseio.com/recipes.json').pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        });
      }),
      tap((recipes) => {
        // this.recipeService.setRecipes(recipes);
        this.store.dispatch(new RecipesActions.SetRecipes(recipes));
      })
    );
  }
}
