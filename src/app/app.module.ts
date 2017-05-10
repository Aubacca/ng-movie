import { MovieSearchService } from './services/movie-search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
