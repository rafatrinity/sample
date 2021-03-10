import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Characters } from './models/characters';
import { Params, OrderBy } from './models/params';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  constructor(private service: CatalogService) {}
  params: Params = {
    name: '',
    nameStartsWith: 'Air',
    modifiedSince: '',
    comics: '',
    series: '',
    events: '',
    stories: '',
    orderBy: OrderBy.currentFirst,
    limit: null,
    offset: null
  };

  response: Characters;
  ngOnInit(): void {
    this.getCharacters(this.params)
  }

  getCharacters(params: Params) {
    this.service
      .getCharacters(params)
      .subscribe((characters: Characters) => {
        this.response = characters;
        console.log(characters);
      });
  }
}
