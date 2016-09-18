import { Component, OnInit, ViewChildren, QueryList }    from '@angular/core';
import { BoardRow, BoardSpace } from '../';
import { BoardRowComponent } from '../board-row/board-row.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  rows: Array<BoardRow>
  @ViewChildren(BoardRowComponent) boardRowComponents: QueryList<BoardRowComponent>;


  constructor() { }

  ngOnInit() {
    this.rows = Array(6).fill().map((x,i)=> new BoardRow({location: i}));
  }

  makeMove(l){
    let row = this.fetchRow(l)
    let childRowComponent = this.boardRowComponents.toArray().filter(function( obj ) { return obj.row === row })[0]
    if (childRowComponent) {
      childRowComponent.setSpace(l);
    } else {
      alert("There are no more spaces on that column");
    }

  }

  private fetchRow(l) : BoardRow {
    var rows = this.rows.filter(function ( row ) {
      for(let space of row.spaces) {
        if (space.index === l && space.filled == false) {
           return row;
         }
      }
    });
    return rows[rows.length - 1]
  }
}
