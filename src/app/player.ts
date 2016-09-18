export class Player {
  id: number;
  computer: boolean;
  color: string;

  constructor(args: any){
    this.id = args.id;
    this.computer = args.computer;
    this.color = args.color;
  }
}
