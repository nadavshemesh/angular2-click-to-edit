import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NdvEditComponent } from "./edit/ndv.edit.component";
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NdvEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
