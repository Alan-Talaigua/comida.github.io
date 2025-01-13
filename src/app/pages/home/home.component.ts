import { Component, OnDestroy, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categorias';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { HeaderService } from 'src/app/core/services/header.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy{
[x: string]: any;
  constructor(public headerService: HeaderService,
    public categoriasService: CategoriasService,
  ) {}
  categorias:Categoria[] = [];
  
  ngOnInit(): void {
    this.headerService.setTitulo("Home");
    this.headerService.setExtendido(true);
    this.categoriasService.getAll().then(res => this.categorias = res);
  }

  ngOnDestroy(): void {
    this.headerService.setExtendido(false);
  }
  }

