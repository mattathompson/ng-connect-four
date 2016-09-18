import { Component, OnInit }    from '@angular/core';
import { BoardRow, BoardSpace } from '../';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  rows: Array<BoardRow>;

  constructor() { }

  ngOnInit() {
    this.rows = Array(6).fill().map((x,i)=> new BoardRow({location: i}));
  }

}
