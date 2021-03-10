import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CatalogComponent]
})
export class CharactersModule { }
