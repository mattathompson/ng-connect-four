import { Injectable } from '@angular/core';

@Injectable()
export class RefereeServiceService {
  boardGrid: Array<any>;
  playerId: number;

  constructor() {}

  checkForWinner(dataSet, playerId) {
    this.playerId = playerId;
    this.boardGrid = dataSet.map((x) => x.spaces );

    var win = false;

    if(this.checkHorizontalWin() || this.checkVerticalWin() || this.checkDiagonalWin()){
      win = true;
    }

    return {win: win, playerId: this.playerId };
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
      var spaces = row.filter(function( obj ) { return obj.playerId === playerId });
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

  checkDiagonalWin(){

    var result = false;
    var playerId = this.playerId;
    var spaces = [].concat.apply([], this.boardGrid).filter(function( obj ) { return obj.playerId === playerId });

    if(spaces.length >= 4) {
      for(let space of spaces) {
        let matches;
        matches = this.findMatches(space, spaces);
        for (var slope in matches) {
          if (matches.hasOwnProperty(slope)) {
            if(matches[slope].length >= 4) {
              let count;
              let array = matches[slope].map((x)=> x.index ).sort();
              count = this.countCons(array);
              if(count === 4) {
                result = true;
                break;
              }
            }
          }
        }
      }
    }
    return result
  }

  findMatches(space, spaces){
    var slopes = [1,-1];
    var space = space;
    var spaces = spaces;
    var index = spaces.indexOf(space);
    var matches = {};

    matches[1] = [];
    matches[-1] = [];

    spaces.splice(index, 1);

    for(let point of spaces) {
      for(let slope of slopes) {
        if(this.matchesOnSlope(space, point, slope) === true){
          matches[slope].push(point);
          matches[slope].push(space);
        };
      }
    }

    return matches;
  }

  private matchesOnSlope(space, point, slope){
    // y − y1 = 1(x − x1) or  y = 1(x − x1) + y1
    return (point.yIndex === ( slope * ( point.index - space.index ) + space.yIndex ) )
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
