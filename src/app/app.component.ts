import { Component } from '@angular/core';
import { GameBoard } from './game-board/game-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  directives: [ GameBoard ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng2 Connect Four';
}
