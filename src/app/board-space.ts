export class BoardSpace {
  index: number;
  yIndex: number;
  color: string;
  filled: boolean;
  playerId: number;

  constructor(args: any){
    this.index = args.location;
    this.filled = false;
    this.yIndex = (-args.yIndex);
  }
}
