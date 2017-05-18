import { Component } from '@angular/core';

import { TmdbMovie } from './../model/TmdbMovie';
import { OmdbError } from './../model/OmdbError';
import { Movie } from './../model/Movie';
import { MovieSearchService } from './../services/movie-search.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-md-movie-search',
  templateUrl: './md-movie-search.component.html',
  styleUrls: ['./md-movie-search.component.css']
})
export class MdMovieSearchComponent {
  private searchString: string;
  private resultMovies: Movie[];
  private resultTmdbMovies: TmdbMovie[];
  private searchError: OmdbError;
  private serverError: string;

  private apiKeyString: string;

  constructor(private movieSearchService: MovieSearchService) { }

  protected searchMovie() {

    this.movieSearchService.searchOmdbMovies(this.searchString, 1)
      .do(r => console.log(r))
      .subscribe(r => {
        if (r.Response.toLowerCase() === 'true') {
          this.resultMovies = r.Search;
        } else {
          this.searchError = r;
        }
      }, error => this.serverError = error);

      this.movieSearchService.searchTmdbMovies(this.searchString, 1)
        .do(r => console.log(r))
        .subscribe(r => this.resultTmdbMovies = r.results);
  }

}
