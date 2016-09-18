import { Component, OnInit } from '@angular/core';
import { BoardSpace }        from '../';

@Component({
  selector: 'td[app-board-space]',
  templateUrl: './board-space.component.html',
  styleUrls: ['./board-space.component.css'],
  inputs: [ 'space' ]
})
export class BoardSpaceComponent implements OnInit {
  space: BoardSpace;
  color: string;

  constructor() { }

  ngOnInit() {
    this.color = "white";
  }

}
