import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './component/recipes/recipes.module#RecipesModule' }, // 1st method
  // { path: 'recipes', loadChildren: () => import('./component/recipes/recipes.module').then((m) => m.RecipesModule) }, // 2nd method
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
