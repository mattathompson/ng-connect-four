import { Injectable } from '@angular/core';

@Injectable()
export class RefereeServiceService {
  boardGrid: Array<any>;
  playerId: number;

  constructor() {}

  checkForWinner(dataSet, playerId) {
    this.playerId = playerId;
    this.boardGrid = dataSet.map((x) => x.spaces );

    this.checkHorizontalWin();
    this.checkVerticalWin();
  }

  checkVerticalWin(){
    var result = false;
    var verticalArray = [];
    for (var i = 0; i <= (this.boardGrid[0].length - 1); i++) {
      verticalArray.push(this.boardGrid.map((x)=> x[i]));
    }

    for(let column of verticalArray) {
      var playerId = this.playerId;
      var spaces = column.filter(function( obj ) { return obj.playerId === playerId })
      if (spaces.length >= 4){
        var count;
        var array = spaces.map((x)=> x.yIndex ).reverse();
        count = this.countCons(array);
        if(count === 4) {
          result = true;
          break;
        }
      }
    }
    return result
  }

  checkHorizontalWin(){
    var result = false
    for(let row of this.boardGrid) {

      var playerId = this.playerId;
      var spaces = row.filter(function( obj ) { return obj.playerId === playerId })
      if (spaces.length >= 4){
        var count;
        var array = spaces.map((x)=> x.index );
        count = this.countCons(array);
        if(count === 4) {
          result = true;
          break;
        }
      }
    }
    return result
  }


  private countCons(array) {
    var count = 1;
    for (var i = 0; i < array.length; i++) {
      if(array[i] === (array[i + 1] - 1)){
        count++;
      }
    }
    return count;
  }
}
