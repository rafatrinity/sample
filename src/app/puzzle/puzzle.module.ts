import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PuzzleComponent],
  imports: [CommonModule, MatButtonModule, FontAwesomeModule],
  exports: [PuzzleComponent],
})
export class PuzzleModule {}
