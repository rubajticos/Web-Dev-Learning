import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
            [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
        ),
        new Recipe(
            'Big fat Burder',
            'What else you need to say?',
            'https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/wege_burger_z_pieczonymi_baklazanami_0237983.jpg',
            [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
        ),
    ];

    constructor() {}

    getRecipes() {
        return this.recipes.slice();
    }
}
