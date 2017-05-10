import { TmdbMovie } from './../model/TmdbMovie';
import { OmdbError } from './../model/OmdbError';
import { Movie } from './../model/Movie';
import { MovieSearchService } from './../services/movie-search.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import 'rxjs/Rx';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  private resultMovies: Movie[];
  private resultTmdbMovies: TmdbMovie[];
  private searchError: OmdbError;
  private serverError: string;

  constructor(private movieSearchService: MovieSearchService) { }

  ngOnInit() {
  }

  searchMovie(searchTerm): void {
    this.searchError = undefined;
    this.resultMovies = undefined;

    this.movieSearchService.searchOmdbMovies(searchTerm, 1)
//      .map(r => r.json())
      .do(r => console.log(r))
      .subscribe(r => {
        if (r.Response.toLowerCase() === 'true') {
          this.resultMovies = r.Search;
/*
          this.resultMovies = this.resultMovies
            .filter(m => m.Type === 'movie');
          console.log(this.resultMovies);
*/
        } else {
          this.searchError = r;
        }
      }, error => this.serverError = error);

      this.movieSearchService.searchTmdbMovies(searchTerm, 1)
        .do(r => console.log(r))
        .subscribe(r => this.resultTmdbMovies = r.results);
  }

  addMovie(newMovie, event) {
    console.log(newMovie);
    event.preventDefault();
  }
}
