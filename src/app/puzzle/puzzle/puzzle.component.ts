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
    let on=document.getElementById('begin');
    let off=document.getElementById('game');
    on.setAttribute('class','begin off');
    off.setAttribute('class','game on');
  }

}
