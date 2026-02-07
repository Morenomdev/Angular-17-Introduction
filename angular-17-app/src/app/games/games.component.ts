import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Favorite games's {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})

export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Uncharted 4',
    },
    {
      id: 2,
      name: 'Horizon',
    },
    {
      id: 3,
      name: 'Blodborne',
    },
  ];
  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
    // console.log(` A ${this.username} le gusta jugar a ${gameName}`);
  }
}
