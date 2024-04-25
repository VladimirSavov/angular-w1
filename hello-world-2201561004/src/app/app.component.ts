import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Владимир Савов';
  age: number = 20;
  city: string = 'град Септември';
  hobies: string[] = ['карам велосипед', 'да се разхождам в планината'];
  creatorChannel: string = 'https://www.youtube.com/@MrBeast';
  myChannel: string = 'https://www.youtube.com/channel/UCVqVJmaYJlGO1q_rs-9srsg';
  game: string = 'мобилна игра';
}
