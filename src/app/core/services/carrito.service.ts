import { Injectable } from '@angular/core';
import { Carrito } from '../interfaces/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() {
    const carrito = localStorage.getItem("carrito");
    if(carrito){
      this.carrito = JSON.parse(carrito);
    }
   }

  carrito: Carrito[] = [];

  agregarProducto(idProducto: number, cantidad:number, notas:string){
    const i = this.carrito.findIndex(producto => producto.idProducto === idProducto);
    if(i === -1){
      const nuevoProducto:Carrito = {idProducto:idProducto, cantidad:cantidad, notas:notas };
      if(notas) nuevoProducto.notas = notas;
      this.carrito.push(nuevoProducto);
    }else {
      this.carrito[i].cantidad += cantidad;
    }
    this.actualizarHistorial();
  }

  eliminarProducto(idProducto: number) {
    this.carrito = this.carrito.filter(producto => producto.idProducto !== idProducto);
    if(this.carrito.length === 0) 
      return localStorage.clear();
    this.actualizarHistorial();
  }

  cambiarCantidadProducto(idProducto: number, cantidad: number) {
    this.carrito = this.carrito.map(producto => {
      const productoActual = producto;
      if(productoActual.idProducto === idProducto) productoActual.cantidad = cantidad;
      return productoActual;
    })
    this.actualizarHistorial();
  }

  actualizarHistorial(){
    localStorage.setItem('carrito', JSON.stringify(this.carrito))
  }
}
