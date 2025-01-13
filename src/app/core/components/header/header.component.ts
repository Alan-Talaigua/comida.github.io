import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  claseAplicada$ = new BehaviorSubject<string>('');
  tituloMostrado = new BehaviorSubject<string>('');

  constructor(public headerService: HeaderService) {}

  // Método para actualizar el valor
  actualizarClase(nuevaClase: string) {
    this.claseAplicada$.next(nuevaClase);
  }

  mostrarTituloNuevo(e:AnimationEvent) {
    this.headerService.titulo$.subscribe(titulo => {
    console.log(e.animationName.includes("fade-out"))
    if(e.animationName.includes("fade-out")){
      this.tituloMostrado.next(titulo);
      this.claseAplicada$.next("fade-in");
      setTimeout(() => this.claseAplicada$.next(""),250)
    }
  });
  }

  ngOnInit() {
    this.headerService.titulo$.subscribe(titulo => {
      if (titulo) {
        this.actualizarClase("fade-out");
      }
      console.log(titulo);
    });
  }
}