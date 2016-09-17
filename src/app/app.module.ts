import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { BoardRowComponent } from './board-row/board-row.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    BoardRowComponent
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
