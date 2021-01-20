import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimbersComponent } from './timbers/timbers.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'timbers', component: TimbersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
