import { Component, OnInit, ViewChildren, QueryList }    from '@angular/core';
import { BoardRow, BoardSpace, Player } from '../';
import { BoardRowComponent } from '../board-row/board-row.component';
import { RefereeServiceService } from '../referee-service.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  providers: [ RefereeServiceService ]
})

export class GameBoardComponent implements OnInit {
  rows: Array<BoardRow>;

  computer: Player;
  player: Player;

  winner: Player;

  players: Array<Player>;

  activePlayerId: number;
  playHasStarted: boolean = false;

  @ViewChildren(BoardRowComponent) boardRowComponents: QueryList<BoardRowComponent>;


  constructor(private referee: RefereeServiceService) {

  }

  ngOnInit() {
    this.rows = Array(6).fill().map((x,i)=> new BoardRow({location: i}));
    this.setPlayers();
    this.setRandomTurn();
  }

  restartGame(){
    window.location.reload()
  }

  startGame() : void {
    this.playHasStarted = true;
    if(!this.playersTurn()){
      this.computersMove();
    }
  }

  newMove() : void {
    var results = this.referee.checkForWinner(this.rows, this.activePlayerId);
    console.log(results);
    if (results.win === true) {
      var player = this.findPlayer(results.playerId);
      this.winner = player;
      if(player.computer) {
        alert("Victory is MINE!!!");
      } else {
        alert("You win this time... ");
      }
      return
    }

    this.switchTurns();

    if(!this.playersTurn()) {
      this.computersMove();
    }
  }

  makeMove(l, player) : void {
    let row = this.avalibleRow(l)
    let childRowComponent = this.boardRowComponents.toArray().filter(function( obj ) { return obj.row === row })[0]
    if (row) {
      childRowComponent.setSpace(l, player);
    }
  }

  findPlayer(id) : Player {
    var object = this.players.filter(function( obj ) {
      return obj.id === id;
    })[0]
    return object;
  }

  playersTurn() : boolean {
    let id = this.activePlayerId;
    let isPlayer = this.findPlayer(id).computer === false;

    return (isPlayer && this.playHasStarted);
  }

  playersMove(l) {
    if(this.avalibleRow(l)) {
      this.makeMove(l, this.player);
    } else {
      alert("There are no more spaces on that column");
    }
  }

  computersMove(){
    let possibilites = this.shuffle(Array(7).fill().map((x,i) => i));
    let l;

    for (let possibility of possibilites) {
      if (this.avalibleRow(possibility)) {
        l = possibility;
        break;
      }
    }
    this.makeMove(l, this.computer);
  }

  private switchTurns(){
    if(this.playersTurn()){
      this.activePlayerId = this.computer.id;
    } else {
      this.activePlayerId = this.player.id;
    }
  }

  private setRandomTurn() : void {
    let players = Array(this.player, this.computer)
    let index = Math.floor(Math.random() * players.length)
    this.activePlayerId = players[index].id;
  }

  private avalibleRow(l) : BoardRow {
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

  private shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
