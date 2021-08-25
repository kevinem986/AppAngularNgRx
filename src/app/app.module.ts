import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { miReducer } from "./app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      texto: miReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 4
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
