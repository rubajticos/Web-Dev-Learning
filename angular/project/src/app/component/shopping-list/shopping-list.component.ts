import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { LoggingService } from '../logging.service';
import { ShoppingListService } from './shopping-list.service';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(
    private slService: ShoppingListService,
    private loggingService: LoggingService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
    //   this.ingredients = ingredients;
    // });
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    // this.slService.startingEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
