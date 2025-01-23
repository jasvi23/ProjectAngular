import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../Models/producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() product!:Producto;
  
  @Output() agregarAlCarrito = new EventEmitter<Producto>();

  onAddToCart() {
    this.agregarAlCarrito.emit(this.product);
  }
}
