import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiMovieService } from '../api-movie.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  providers: [ApiMovieService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  movie: any;
  originals: any;
  actions: any;
  comedies: any;
  crimes: any;
  dramas: any;
  imageUrl : string = "https://image.tmdb.org/t/p/original"
  constructor(private apiMovieService: ApiMovieService) {}
  ngOnInit(): void {
    this.apiMovieService.getBannerImage().subscribe(
      (movie) => {
        this.movie = movie;
      },
      (error) => {
        console.error('Error fetching movie', error);
      }
    );
    this.apiMovieService.getOriginalsMovies().subscribe(
      (movie) => {
        this.originals = movie
      },
      (error) => {
        console.error('Error fetching movie', error)
      }
    )
    this.apiMovieService.getActions().subscribe(
      (movie) => {
        this.actions = movie
      },
      (error) => {
        console.error('Error fetching movie', error)
      }
    )
    this.apiMovieService.getComedyMovies().subscribe(
      (movie) => {
        this.comedies = movie
      },
      (error) => {
        console.error('Error fetching movie', error)
      }
    )
    this.apiMovieService.getCrimeMovies().subscribe(
      (movie) => {
        this.crimes = movie
      },
      (error) => {
        console.error('Error fetching movie', error)
      }
    )
    this.apiMovieService.getDramaMovies().subscribe(
      (movie) => {
        this.dramas = movie
      },
      (error) => {
        console.error('Error fetching movie', error)
      }
    )
  }
}
