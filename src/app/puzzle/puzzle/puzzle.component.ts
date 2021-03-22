import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as en_us from '../../../assets/json/en_us.json';
import * as pt_br from '../../../assets/json/pt_br.json';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss'],
})
export class PuzzleComponent implements OnInit {
  env = environment.assets;
  ask: string = 'Is that number even?';
  even: number = 0;
  odd: number = 0;
  count: number = 0;
  position = [];
  puzzle: number;
  divide: string;
  langue = (en_us as any).default;
  constructor() {}

  ngOnInit(): void {
    this.animation();
    this.translate('pt-br');
  }

  translate(langue: string) {
    if (langue == 'pt-br') this.langue = (pt_br as any).default;

    console.log(this.langue);
  }
  animation() {
    const container = document.querySelector('.wrapper');
    const card = document.querySelector<HTMLElement>('.clash-card');
    const img = document.querySelector<HTMLElement>('.img');
    const txt = document.querySelector<HTMLElement>(
      '.clash-card__unit-description'
    );

    container.addEventListener('mousemove', (e) => {
      let x = (-1 * (window.innerWidth / 2 - e['pageX'])) / 25;
      let y = (window.innerHeight / 2 - e['pageY']) / 25;
      card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
    container.addEventListener('mouseleave', (e) => {
      card.style.transition = 'all 0.5s ease';
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      img.style.transform = 'translateZ(0px)';
      txt.style.transform = 'translateZ(0px)';
    });
    container.addEventListener('mouseenter', (e) => {
      card.style.transition = 'none';
      img.style.transform = 'translateZ(100px)';
      txt.style.transform = 'translateZ(75px)';
    });
  }

  begin() {
    this.ask = 'Is that number even?';
    document.getElementById('begin').setAttribute('class', 'begin d-none');
    document.getElementById('puzzle').setAttribute('class', 'puzzle d-none');
    document.getElementById('divide').setAttribute('class', 'divide d-none');
    document.getElementById('game').setAttribute('class', 'game d-block');
    document.getElementById('even').setAttribute('class', 'even d-block');
  }

  isEven(resp: string) {
    this.ask = 'Is the result of the division even?';
    document.getElementById('even').setAttribute('class', 'even d-none');
    if (resp == 'yes') {
      this.even++;
      this.divide = 'divide by 2.';
    } else {
      this.odd++;
      this.position[this.count] = 1;
      this.divide = 'subtract one and divide by 2.';
    }
    document.getElementById('divide').setAttribute('class', 'divide d-block');
    this.count++;
  }

  ok() {
    document.getElementById('divide').setAttribute('class', 'divide d-none');
    document.getElementById('one').setAttribute('class', 'one d-block');
  }

  isOne(resp: string) {
    document.getElementById('one').setAttribute('class', 'one d-none');
    if (resp == 'yes') this.magic();
    else document.getElementById('even').setAttribute('class', 'even d-block');
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
    if (this.odd == 0) this.puzzle = this.pot(2, this.even);
    else {
      for (let i = 0; i < this.count; i++) {
        if (this.position[i] == 1) b += this.pot(2, i); //impar
      }
      a = this.pot(2, this.even + this.odd);
      this.puzzle = a + b;
      console.log(this.puzzle);
    }
    document.getElementById('puzzle').setAttribute('class', 'puzzle d-block');
  }

  remake() {
    this.ask = 'Is that number even?';
    this.even = 0;
    this.odd = 0;
    this.count = 0;
    this.puzzle = 0;
    this.position = [];
    document.getElementById('one').setAttribute('class', 'one d-none');
    document.getElementById('game').setAttribute('class', 'game d-none');
    document.getElementById('begin').setAttribute('class', 'begin d-block');
  }
}
