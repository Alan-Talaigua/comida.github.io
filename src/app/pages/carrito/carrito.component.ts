import { Component} from '@angular/core';
import { Producto } from 'src/app/core/interfaces/productos';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { ProductosService } from 'src/app/core/services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  productosCarrito:Producto[] = [];
  constructor(public headerService: HeaderService,
    public carritoService: CarritoService,
    public productosService: ProductosService,
    public perfilService: PerfilService
  ) {
  }
  
  subTotal = 0;
  delivery = 100;
  total = 0;

  ngOnInit(): void {
    this.headerService.setTitulo("Carrito");
    this.carritoService.carrito.forEach(async (itemCarrito: { idProducto: number; }) => {
      const res = await this.productosService.getById(itemCarrito.idProducto);
      if(res) this.productosCarrito.push(res);
      this.calcularInformacion();
    })
  }

  eliminarProducto(idProducto:number){
    this.carritoService.eliminarProducto(idProducto);

  }

  calcularInformacion(){
    this.subTotal = 0;
    for (let i = 0; i < this.carritoService.carrito.length; i++) {
      this.subTotal += this.productosCarrito[i].precio * this.carritoService.carrito[i].cantidad;

    }
    this.total = this.subTotal + this.delivery;
  }


  cambiarCantidadProducto(id:number, cantidad:number){
    this.carritoService.cambiarCantidadProducto(id, cantidad);
    this.calcularInformacion();
  }
}
