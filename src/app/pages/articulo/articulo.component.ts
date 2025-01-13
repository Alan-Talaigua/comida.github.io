import { Component, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from 'src/app/core/interfaces/productos';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProductosService } from 'src/app/core/services/productos.service';
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent {
  @Input() productos!:Producto;
  producto?: Producto;
  notas = "";
  constructor(public headerService: HeaderService,
    public productosService: ProductosService,
    private ac: ActivatedRoute,
    public carritoService: CarritoService,
    private router: Router
  ) {
    ac.params.subscribe(param =>{
      if(param['id']){
        this.productosService.getById(param['id']).then(producto => {
          this.producto = producto;
          this.headerService.setTitulo(producto!.nombre);
        })
      }
    })
  }
  
  ngOnInit(): void {
    this.headerService.setTitulo("Articulo");
  }

  private cantidadSubject = new BehaviorSubject<number>(1);
  cantidad$: Observable<number> = this.cantidadSubject.asObservable();


  setCantidad(newValue: number) {
    this.cantidadSubject.next(newValue);
  }

  // Método para obtener el valor actual de cantidad
  getCantidad(): number {
    return this.cantidadSubject.value;
  }

  agregarAlCarrito(){
    if(!this.producto) return;
    this.carritoService.agregarProducto(this.producto?.id,this.getCantidad(), this.notas);
    this.router.navigate(["/carrito"]);
  }

}
