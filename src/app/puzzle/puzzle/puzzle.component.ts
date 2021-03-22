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
  ask: string;
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
    this.ask = this.langue.even_1;
    document.getElementById('begin').setAttribute('class', 'begin d-none');
    document.getElementById('puzzle').setAttribute('class', 'puzzle d-none');
    document.getElementById('divide').setAttribute('class', 'divide d-none');
    document.getElementById('game').setAttribute('class', 'game d-block');
    document.getElementById('even').setAttribute('class', 'even d-block');
  }

  isEven(resp: string) {
    this.ask = this.langue.even_2;
    document.getElementById('even').setAttribute('class', 'even d-none');
    if (resp == 'yes') {
      this.divide = this.langue.divide;
      this.position.push(0);
    } else {
      this.divide = this.langue.sub_divide;
      this.position.push(1);
    }
    document.getElementById('divide').setAttribute('class', 'divide d-block');
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

  magic() {
    let resp = 1;
    for (let i = 0; i < this.position.length; i++) {
      if (this.position[i] == 1) {
        resp *= 2;
        resp += 1;
      } else resp *= 2;
    }
    document.getElementById('puzzle').setAttribute('class', 'puzzle d-block');
  }

  remake() {
    this.ask = this.langue.even_1;
    this.puzzle = 0;
    this.position = [];
    document.getElementById('one').setAttribute('class', 'one d-none');
    document.getElementById('game').setAttribute('class', 'game d-none');
    document.getElementById('begin').setAttribute('class', 'begin d-block');
  }
}
