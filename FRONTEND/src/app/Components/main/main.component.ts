import { Component } from '@angular/core';
import { ProductoService } from '../../Services/producto.service';
import { Producto } from '../../Models/producto';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  productos: Producto[] = []; //recoge todos los productos de la base de datos

  constructor(
    private productoService: ProductoService,
  ){}

  ngOnInit():void{ //recoge los productos de la base de datos al inicializar
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al obtener productos:', err)
    });
  }

  filtrarPorCategoria(categoria: string): void {
    if (categoria === 'Todas las categorías') {
      this.cargarProductos();
    } else {
      this.productoService.getProductos().subscribe({
        next: (data) => this.productos = data.filter(producto => producto.categoria === categoria),
        error: (err) => console.error('Error al obtener productos:', err)
      });
    }
  }
}
