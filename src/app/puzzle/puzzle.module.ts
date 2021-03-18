import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PuzzleComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [PuzzleComponent],
})
export class PuzzleModule {}
