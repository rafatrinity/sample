import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  faGamepad,
  faChartPie,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  faGamepad = faGamepad;
  faChartPie = faChartPie;
  faSearch = faSearch;
  faUser = faUser;
  env = environment.assets;
  ngOnInit(): void {}

  turnOff(){
    let imagem1 = document.getElementById('1');
    let imagem2 = document.getElementById('2');
    let imagem3 = document.getElementById('3');
    let imagem4 = document.getElementById('4');
    imagem1.setAttribute('class','neon_img');
    imagem2.setAttribute('class','mb-4 neon_img');
    imagem3.setAttribute('class','mb-4 neon_img');
    imagem4.setAttribute('class','neon_img');
  }
  turnOn(id) {
    this.turnOff();
    let imagem = document.getElementById(id);
    imagem.setAttribute('class', imagem.getAttribute('class').concat(' on'));
  }
}
