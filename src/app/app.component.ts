import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';

  isDarkTheme: boolean = false;

  // Métodos para cambiar el tema
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  get themeIcon() {
    return this.isDarkTheme ? 'assets/icons/sun.svg' : 'assets/icons/moon.svg'; // Sol para modo claro, luna para modo oscuro
  }

  get themeText() {
    return this.isDarkTheme ? 'Modo Claro' : 'Modo Oscuro'; // Texto correspondiente
  }
}