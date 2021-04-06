import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Character } from './models/characters';
import { Params, OrderBy } from './models/params';
import { environment } from 'src/environments/environment';
import * as json from '../../../assets/json/characters.json';
import {
  faSort,
  faSortAlphaUp,
  faSortAlphaUpAlt,
  faSortNumericUp,
  faSortNumericUpAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(private service: CatalogService) {}
  params: Params = {
    name: '',
    nameStartsWith: '',
    modifiedSince: '',
    comics: '',
    series: '',
    events: '',
    stories: '',
    orderBy: OrderBy.oldFirst,
    limit: 99,
    offset: null,
  };
  menu = faSort;
  faSortAlphaUp = faSortAlphaUp;
  faSortAlphaUpAlt = faSortAlphaUpAlt;
  faSortNumericUp = faSortNumericUp;
  faSortNumericUpAlt = faSortNumericUpAlt;
  env = environment.assets;
  hidden = false;
  data = (json as any).default;
  characters: Character[];

  ngOnInit(): void {}

  orderBy(param: string) {
    switch (param) {
      case 'name_A-Z':
        this.data.sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        break;
      case 'name_Z-A':
        this.data.sort(function (a, b) {
          return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
        });
        break;
      case 'date-':
        this.data.sort(function (a, b) {
          return a.modified > b.modified ? -1 : a.modified < b.modified ? 1 : 0;
        });
        break;
      case 'date+':
        this.data.sort(function (a, b) {
          return a.modified < b.modified ? -1 : a.modified > b.modified ? 1 : 0;
        });
        break;

      default:
        break;
    }
  }

  getCharacters(params: Params) {
    this.service.getCharacters(params).subscribe((characters: Character[]) => {
      this.characters = characters;
    });
  }
}
