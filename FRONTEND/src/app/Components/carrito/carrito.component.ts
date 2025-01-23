import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  @Input() isOpen: boolean = false; //recogera del app.component, que lo invierte en su ts
  @Output() isOpenChange = new EventEmitter<void>();
  
  numProductos: number = 0;    // De momento, luego recoger BD
  
  //Cerrar
  close() {
    this.isOpen = false;
    this.isOpenChange.emit();
  }
}
