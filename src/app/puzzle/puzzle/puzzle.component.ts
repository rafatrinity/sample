import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css'],
})
export class PuzzleComponent implements OnInit {
  start: boolean = true;
  ask: string;
  pair: number = 0;
  odd: number = 0;
  count: number = 0;
  position = [];
  puzzle: number;
  constructor() {}

  ngOnInit(): void {}

  begin() {
    document.getElementById('begin').setAttribute('class', 'begin off');
    document.getElementById('game').setAttribute('class', 'game on');
    this.start = true;
  }

  isPair(resp: string) {
    if (this.start == true) this.ask = 'Esse número é par?';
    else this.ask = 'O resultado da divisão é par?';
    this.start = false;
    if (resp == 'yes') this.pair++;
    else {
      this.odd++;
      this.position[this.count] = 1;
    }
    this.count++;
    //? manipular dom
  }

  isOne(resp: string) {
    if (resp == 'yes') {
      this.puzzle = this.magic();
      this.resetVariables();
    }
    else{
      //? manipular dom
    }
  }

  pot(a: number, b: number): number {
    if (b == 0) return 1;
    if (b == 1) return a;
    let c: number = 0;
    for (let i = 1; i < b; i++) c += a * a;
    return c;
  }

  magic():number {
    let a = 0;
    let b = 0;
    if (this.odd == 0) return this.pot(2, this.pair);
    else {
      for (let i = 0; i < this.count; i++) {
        if (this.position[i] == 1) b += this.pot(2, i); //impar
      }
      a = this.pot(2, this.pair + this.odd);
      return a + b;
    }
  }

  resetVariables() {
    this.start = true;
    this.ask = '';
    this.pair = 0;
    this.odd = 0;
    this.count = 0;
    this.puzzle = 0;
    this.position = [];
  }
}
