import { Component } from '@angular/core';
import { UsuarioComponent } from "../usuario/usuario.component";
import { CarritoComponent } from '../carrito/carrito.component';
import { AdminComponent } from "../admin/admin.component";
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UsuarioComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() openCart = new EventEmitter<void>();
  @Output() toggleAdmin = new EventEmitter<void>();
  
  abrirCarrito(){
    this.openCart.emit();
  }
  //se los mandamos al AppComponent para que active o desactive los paneles
}
