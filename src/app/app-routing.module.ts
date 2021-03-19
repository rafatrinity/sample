import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './characters/catalog/catalog.component';
import { PuzzleComponent } from './puzzle/puzzle/puzzle.component'
const routes: Routes = [
  {path:'catalog', component: CatalogComponent},
  {path:'puzzle', component: PuzzleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
