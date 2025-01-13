import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/core/interfaces/productos';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProductosService } from 'src/app/core/services/productos.service';
@Component({
  selector: 'app-rubro',
  templateUrl: './rubro.component.html',
  styleUrls: ['./rubro.component.scss']
})
export class RubroComponent  {
[x: string]: any;
  productos:Producto[] = []
  constructor(public headerService: HeaderService,
    public productosService: ProductosService,
    public categoriasService: CategoriasService,
    public ac: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.headerService.setTitulo("");
    this.ac.params.subscribe(params => {
      if(params['id']){
        this.categoriasService.getById(parseInt(params['id']))
        .then(categorias =>{
          if(categorias){
            this.productos = categorias.productos
            this.headerService.setTitulo(categorias.nombre)
          }   
      });
      }
    })
  }

}
