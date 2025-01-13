import { Component, Input } from '@angular/core';
import { Categoria } from '../../interfaces/categorias';
@Component({
  selector: 'app-tarjeta-categoria',
  templateUrl: './tarjeta-categoria.component.html',
  styleUrls: ['./tarjeta-categoria.component.scss'],
})
export class TarjetaCategoriaComponent {
  @Input() categoria!:Categoria;
}