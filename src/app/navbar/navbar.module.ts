import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatToolbarModule, FontAwesomeModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
