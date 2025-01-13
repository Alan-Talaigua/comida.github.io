import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contador-cantidad.component.html',
  styleUrls: ['./contador-cantidad.component.scss']
})
export class ContadorCantidadComponent implements OnInit {

  @Output() cantidadCambiada = new EventEmitter<number>();
  @Input() cantidadInicial = 1;
  constructor() { }

  ngOnInit(): void {
    this.setNumero(this.cantidadInicial);
  }

  private numeroSubject = new BehaviorSubject<number>(1);
  numero$: Observable<number> = this.numeroSubject.asObservable();


   // Método para actualizar el valor
   setNumero(newValue: number) {
    this.numeroSubject.next(newValue);
  }

  // Método para obtener el valor actual (si necesitas accederlo de forma sincrónica)
  getNumero(): number {
    return this.numeroSubject.value;
  }

  actualizarNumero(difererencia:number){
    this.setNumero(Math.max( this.getNumero()+difererencia,1));
    this.cantidadCambiada.emit(this.getNumero());
  }
}




