import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Character } from './models/characters';
import { Params, OrderBy } from './models/params';
import { environment } from 'src/environments/environment'
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
    offset: null
  };

  env = environment.assets;

  data = [];
  characters: Character[];
  ngOnInit(): void {
    for (let i = 0; i < 1493; i+=99) {
     this.params.offset=i;
      this.getCharacters(this.params)
    }
    console.log(this.data);
  }
  getCharacters(params: Params) {
    this.service
      .getCharacters(params)
      .subscribe((characters: Character[]) => {
        // this.characters = characters;
        characters.forEach(e => {
          this.data.push({name: e.name, description: e.description, thumbnail: e.thumbnail,modified: e.modified,id: e.id});
        });
      });
  } 
}
