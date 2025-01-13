import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {

  constructor(public headerService: HeaderService) {}
  
  ngOnInit(): void {
    this.headerService.setTitulo("Buscar");
  }

}
