import { Injectable } from '@angular/core';
import { BoardRow }   from './';

@Injectable()
export class ComputerPlayerService {
  rows: Array<BoardRow>;

  constructor() { }

  chooseMove(rows) : number {
    this.rows = rows;

    let possibilites = this.shuffle(Array(7).fill().map((x,i) => i));
    let l;

    for (let possibility of possibilites) {
      if (this.avalibleRow(possibility)) {
        l = possibility;
        break;
      }
    }
    return l;
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


}
