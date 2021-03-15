import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faGamepad, faChartPie } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  faGamepad = faGamepad;
  faChartPie = faChartPie;
  env = environment.assets;

  ngOnInit(): void {}
}
