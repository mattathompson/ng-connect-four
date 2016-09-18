import { BoardSpace } from './board-space';

export class BoardRow {
  index: number;
  spaces: Array<BoardSpace>

  constructor(args: any){
    this.index = args.location;
    this.spaces = Array(7).fill().map((x,i)=> new BoardSpace({location: i}));
  }
}
