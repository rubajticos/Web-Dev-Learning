import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoggingService } from '../logging.service';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [SharedModule, FormsModule, RouterModule.forChild([{ path: '', component: ShoppingListComponent }])],
  exports: [ShoppingListComponent, ShoppingEditComponent],
  providers: [LoggingService],
})
export class ShoppingListModule {}
