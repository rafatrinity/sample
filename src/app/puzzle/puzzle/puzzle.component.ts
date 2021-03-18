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
    document.getElementById('begin').setAttribute('class', 'begin d-none');
    document.getElementById('game').setAttribute('class', 'game d-block');
    document.getElementById('pair').setAttribute('class', 'pair d-block');
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
    document.getElementById('pair').setAttribute('class', 'pair d-none');
    document.getElementById('one').setAttribute('class', 'one d-block');
  }

  isOne(resp: string) {
    if (resp == 'yes') this.magic();
    else {
      document.getElementById('pair').setAttribute('class', 'pair d-block');
      document.getElementById('one').setAttribute('class', 'one d-none');
    }
  }

  pot(a: number, b: number): number {
    if (b == 0) return 1;
    if (b == 1) return a;
    let c: number = 0;
    for (let i = 1; i < b; i++) c += a * a;
    return c;
  }

  magic() {
    let a = 0;
    let b = 0;
    if (this.odd == 0) return this.pot(2, this.pair);
    else {
      for (let i = 0; i < this.count; i++) {
        if (this.position[i] == 1) b += this.pot(2, i); //impar
      }
      a = this.pot(2, this.pair + this.odd);
      this.puzzle = a + b;
      document.getElementById('one').setAttribute('class', 'one d-none');
      document.getElementById('puzzle').setAttribute('class', 'puzzle d-block');
    }
  }

  remake() {
    this.start = true;
    this.ask = '';
    this.pair = 0;
    this.odd = 0;
    this.count = 0;
    this.puzzle = 0;
    this.position = [];
    document.getElementById('one').setAttribute('class', 'one d-none');
    document.getElementById('game').setAttribute('class', 'game d-none');
    document.getElementById('begin').setAttribute('class', 'begin d-block');  
  }
}
