import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Response, Character } from './models/characters';
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
    nameStartsWith: '',
    modifiedSince: '',
    comics: '',
    series: '',
    events: '',
    stories: '',
    orderBy: OrderBy.oldFirst,
    limit: null,
    offset: null
  };

  characters: Character[];
  ngOnInit(): void {
    this.getCharacters(this.params)
  }

  getCharacters(params: Params) {
    this.service
      .getCharacters(params)
      .subscribe((characters: Character[]) => {
        this.characters = characters;
        console.log(characters);
      });
  } 
}
