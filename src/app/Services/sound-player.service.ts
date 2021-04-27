import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundPlayerService {

  constructor() { }

  playSound(selector: string) {
    let click = new Audio();

    switch (selector) {
      case 'error':
        click.src = './assets/sounds/error.mp3'
        click.play();
        break;

      case 'correct':
        click.src = './assets/sounds/correct.mp3'
        click.play();
        break;
      case 'discard':
        click.src = './assets/sounds/discard.mp3'
        click.play();
        break;

      case 'clear':
        click.src = './assets/sounds/clear.mp3'
        click.play();
        break;
      default:
        click.src = './assets/sounds/click.mp3'
        click.play();
        break;
    }

  }
}
