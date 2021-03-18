import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersModule } from './characters/characters.module';
import { NavbarModule } from './navbar/navbar.module';
import { PuzzleModule } from './puzzle/puzzle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CharactersModule,
    NavbarModule,
    PuzzleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
