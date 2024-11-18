import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiMovieService {
  private API_KEY = 'API_KEY';
  private baseUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  getBannerImage(): Observable<any[]> {
    return this.http
      .get(
        `${this.baseUrl}/trending/all/week?api_key=${this.API_KEY}&language=en-US`
      )
      .pipe(
        map((response: any) => {
          const randomMovie =
            response.results[
              Math.floor(Math.random() * response.results.length)
            ];
          return randomMovie;
        }),
        catchError((error) => {
          console.error('Error fetching movie data:', error);
          return of([]);
        })
      );
  }
  getOriginalsMovies(): Observable<any[]> {
    return this.http
      .get(
        `${this.baseUrl}/discover/tv?api_key=${this.API_KEY}&with_networks=213`
      )
      .pipe(
        map((response: any) => {
          const originals = response.results;
          return originals;
        }),
        catchError((error) => {
          console.error('Error fetching movie data:', error);
          return of([]);
        })
      );
  }
  getActions(): Observable<any[]> {
    return this.http
      .get(
        `${this.baseUrl}/discover/movie?api_key=${this.API_KEY}&with_genres=28`
      )
      .pipe(
        map((response: any) => {
          const actions = response.results;
          return actions;
        }),
        catchError((error) => {
          console.error('Error fetching movie data:', error);
          return of([]);
        })
      );
  }
  getComedyMovies(): Observable<any[]> {
    return this.http
      .get(
        `${this.baseUrl}/discover/movie?api_key=${this.API_KEY}&with_genres=35`
      )
      .pipe(
        map((response: any) => {
          const comedy = response.results;
          return comedy;
        }),
        catchError((error) => {
          console.error('Error fetching movie data:', error);
          return of([]);
        })
      );
  }
  getCrimeMovies(): Observable<any[]> {
    return this.http
      .get(
        `${this.baseUrl}/discover/movie?api_key=${this.API_KEY}&with_genres=80`
      )
      .pipe(
        map((response: any) => {
          const crime = response.results;
          return crime;
        }),
        catchError((error) => {
          console.error('Error fetching movie data:', error);
          return of([]);
        })
      );
  }
  getDramaMovies(): Observable<any[]> {
    return this.http
      .get(
        `${this.baseUrl}/discover/movie?api_key=${this.API_KEY}&with_genres=99`
      )
      .pipe(
        map((response: any) => {
          const drama = response.results;
          return drama;
        }),
        catchError((error) => {
          console.error('Error fetching movie data:', error);
          return of([]);
        })
      );
  }
}
