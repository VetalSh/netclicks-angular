import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constants/films.constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit {
  public films: Film[] = FILMS
  public film!: Film

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id')
    this._initFilm(Number(id))
  }

  private _initFilm(id: number) {
    const findFilm = this.films.find(film => film.id === id)

    if (findFilm) {
      this.film = findFilm
    } else {
      this._router.navigate(['/'])
    }
  }
}
