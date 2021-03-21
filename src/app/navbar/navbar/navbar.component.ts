import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  faGamepad,
  faChartPie,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  faGamepad = faGamepad;
  faChartPie = faChartPie;
  faSearch = faSearch;
  faUser = faUser;
  env = environment.assets;
  ngOnInit(): void {
    
  }

  turnOff() {
    let img;
    for (let i = 1; i < 9; i++) {
      img = document.getElementById(i.toString());
      i == 6 || i == 7
        ? img.setAttribute('class', 'mb-4 neon_img')
        : img.setAttribute('class', 'neon_img');
    }
  }
  turnOn(id) {
    this.turnOff();
    let img = document.getElementById(id);
    img.setAttribute('class', img.getAttribute('class').concat(' on'));
  }
}
