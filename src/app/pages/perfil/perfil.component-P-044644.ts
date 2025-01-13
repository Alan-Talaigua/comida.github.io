import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/core/interfaces/perfil';
import { HeaderService } from 'src/app/core/services/header.service';
import { PerfilService } from 'src/app/core/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfil: Perfil = {
    nombre: "",
    direccion: "",
    telefono: "",
    detalleEntrega: "",
  };

  constructor(
    public headerService: HeaderService,
    public perfilService: PerfilService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.headerService.setTitulo("Perfil");
    this.perfilService.perfil$.subscribe((perfil) => {
      if (perfil) {
        this.perfil = perfil;
      }
    });
    const perfilGuardado = this.perfilService.leerDatos();
    if (perfilGuardado) {
      this.perfil = perfilGuardado;
    }
  }

  guardarDatosPerfil() {
    this.perfilService.guardarDatos(this.perfil);
    this.router.navigate(['/carrito']);
  }
}
