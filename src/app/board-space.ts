export class BoardSpace {
  index: number;
  color: string;
  filled: boolean;

  constructor(args: any){
    this.index = args.location;
    this.filled = false;
  }
}
