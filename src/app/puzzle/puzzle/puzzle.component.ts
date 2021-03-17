import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  puzzleAsk(resp: string){

  }

  begin(){
    document.getElementById('begin').setAttribute('class','begin off');
    document.getElementById('game').setAttribute('class','game on');
  }

}
