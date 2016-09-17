import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { BoardRowComponent } from './board-row/board-row.component';
import { BoardSpaceComponent } from './board-space/board-space.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    BoardRowComponent,
    BoardSpaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
