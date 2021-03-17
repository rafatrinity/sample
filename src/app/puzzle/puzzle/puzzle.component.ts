import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css'],
})
export class PuzzleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  puzzleAsk(resp: string) {
    
  }

  begin() {
    document.getElementById('begin').setAttribute('class', 'begin off');
    document.getElementById('game').setAttribute('class', 'game on');
  }

  pot(a: number, b: number): number {
    if (b == 0) return 1;
    if (b == 1) return a;
    let c: number = 0;
    for (let i = 1; i < b; i++) c += a * a;
    return c;
  }

  magica(par: number, impar: number, posicao, n: number) {
    let a = 0,
      b = 0;
    if (impar == 0) return this.pot(2, par);
    else {
      for (let i = 0; i < n; i++) {
        if (posicao + i == 1) b += this.pot(2, i); //impar
      }
      a = this.pot(2, par + impar);
      return a + b;
    }
  }
}
