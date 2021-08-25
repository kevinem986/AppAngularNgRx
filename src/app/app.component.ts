import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './app.reducer';

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

  spanishMsj(){
    this.store.dispatch({type: "SPANISH"});
  }

  englishMsj(){
    this.store.dispatch({type: "ENGLISH"});
  }
}
