import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppPiano';

  aplicarSonido(id: number): void {
    const audio = new Audio();
    audio.src = `../assets/sonidos/note${id}.wav`;
    audio.load();
    audio.play();
  }
}
