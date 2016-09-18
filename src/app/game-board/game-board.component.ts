import { Component, OnInit, ViewChildren, QueryList }    from '@angular/core';
import { BoardRow, BoardSpace, Player } from '../';
import { BoardRowComponent } from '../board-row/board-row.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  rows: Array<BoardRow>;
  computer: Player;
  player: Player;
  whoseTurn: number;

  @ViewChildren(BoardRowComponent) boardRowComponents: QueryList<BoardRowComponent>;


  constructor() { }

  ngOnInit() {
    this.rows = Array(6).fill().map((x,i)=> new BoardRow({location: i}));
    this.setPlayers();
    this.setRandomTurn();
  }

  makeMove(l) : void {
    let row = this.fetchRow(l)
    let childRowComponent = this.boardRowComponents.toArray().filter(function( obj ) { return obj.row === row })[0]
    if (childRowComponent) {
      childRowComponent.setSpace(l);
    } else {
      alert("There are no more spaces on that column");
    }
  }

  findPlayer(id){
    this.players.filter(function( obj ) {
      return obj.id === id;
    })[0]
  }

  playersTurn() : boolean {
    return this.whoseTurn.computer === false;
  }

  private setRandomTurn() : void {
    let players = Array(this.player, this.computer)
    let index = Math.floor(Math.random() * players.length)
    this.whoseTurn = players[index].id;
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

  private setPlayers(){
    this.computer = new Player({ id: 1, computer: true, color: "red"});
    this.player = new Player({id: 2, computer: false, color: "black"});
    this.players = Array(this.computer, this.player);
  }
}
