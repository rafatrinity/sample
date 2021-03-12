import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, HttpClientModule, MatCardModule, MatButtonModule],
  exports: [CatalogComponent],
})
export class CharactersModule {}
