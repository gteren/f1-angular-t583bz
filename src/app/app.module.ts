import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ResultsComponent } from './results/results.component';
import { DataService } from './data.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ResultsComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
