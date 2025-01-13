import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
[x: string]: any;

  private _tituloSource = new BehaviorSubject<string>('');
  titulo$: Observable<string> = this._tituloSource.asObservable();

  private _extendidoSource = new BehaviorSubject<boolean>(false);
  extendido$: Observable<boolean> = this._extendidoSource.asObservable();

  private _isDarkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme$: Observable<boolean> = this._isDarkTheme.asObservable();

  setTitulo(nuevoTitulo: string) {
    this._tituloSource.next(nuevoTitulo);
  }

  setExtendido(nuevoValor: boolean) {
    this._extendidoSource.next(nuevoValor);
  }

  toggleTheme() {
    const currentTheme = this._isDarkTheme.getValue();
    this._isDarkTheme.next(!currentTheme);
    document.body.classList.toggle('dark-theme', !currentTheme);
  }
}