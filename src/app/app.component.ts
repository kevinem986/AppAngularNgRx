import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './app.reducer';
import * as fromMessage from './mensaje.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application with Angular and NgRx';
  dato$: Observable<any>;

  constructor(private store: Store<appState>){
    this.dato$ = store.select('texto');
  }

  spanishMsg(){
    this.store.dispatch(new fromMessage.SpanishMsg("Color Amarillo"));
  }

  englishMsg(){
    this.store.dispatch(new fromMessage.EnglishMsg("Colour Yellow"));
  }
}
