import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.slService.startingEditing.next(index);
  }
}
