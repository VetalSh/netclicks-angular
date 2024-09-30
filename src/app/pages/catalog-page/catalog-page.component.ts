import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constants/films.constants';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  public films: Film[] = FILMS
}
