import { Movie } from './../model/Movie';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operrator/map';
// import 'rxjs/Rx';

import 'rxjs/add/observable/throw';


@Injectable()
export class MovieSearchService {
  private hostUrl = 'http://www.omdbapi.com/?s=';
  private tmdbHostUrl = 'https://api.themoviedb.org/3/search/movie?';
  private options = '';
  constructor(private http: Http) { }

  /**
   * setApiKey
   */
  public setApiKey(newApiKey: string) {
    this.options = newApiKey;
  }

//  searchMovies(searchTerm: string): Observable<Object> {
  public searchOmdbMovies(searchTerm: string, pageNumber: number = 1): Observable<any> {
    console.log(searchTerm);
    const url = this.hostUrl + encodeURI(searchTerm.trim()) + '&page=' + pageNumber;
    console.log(url);

    return this.http.get(url)
      .map((r: Response) => r.json())
      .catch(this.errorHandler);
  }

  public searchTmdbMovies(searchTerm: string, pageNumber: number = 1): Observable<any> {
    const url = this.tmdbHostUrl + encodeURI(searchTerm.trim())
      + '&query=' + searchTerm
      + '&api_key=' + this.options
      + '&page=' + pageNumber;
    console.log(url);

    return this.http.get(url)
      .map((r: Response) => r.json())
      .catch(this.errorHandler);
  }

  private errorHandler(error: Response) {
    console.log('ERROR:' + error);
    return Observable.throw(error || 'Server error!');
  }
}
