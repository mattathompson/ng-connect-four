import { Component, OnInit } from '@angular/core';
import { BoardRow, BoardSpace }          from '../';

@Component({
  selector: 'tr[app-board-row]',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.css'],
  inputs: [ 'row' ]
})
export class BoardRowComponent implements OnInit {
  row: BoardRow;
  spaces: Array<BoardSpace>

  constructor() { }

  ngOnInit() {
    this.spaces = this.row.spaces;
  }

  setSpace(index) {
    let space = this.spaces.filter(function( obj ) { return obj.index === index })[0]
    space.filled = true;
    space.color = "red";
  }

}
