import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import {AppRoutingModule } from './app.routing';
import { HttpModule }      from '@angular/http';
import { FormsModule }     from '@angular/forms';

import { AppComponent }        from './app.component';
import {HomeComponent }        from './components/home.component';
import {PersonasListComponent} from './components/personas-list.component';
import {PersonaAddComponent}   from './components/persona-add.component';
import {PersonaEditComponent}  from './components/persona-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonasListComponent,
    PersonaAddComponent,
    PersonaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
