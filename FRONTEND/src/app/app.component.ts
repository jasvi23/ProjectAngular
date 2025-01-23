import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from "./Components/header/header.component";
import { LateralComponent } from "./Components/lateral/lateral.component";
import { MainComponent } from './Components/main/main.component';
import { CarritoComponent } from "./Components/carrito/carrito.component";
import { AdminComponent } from './Components/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, LateralComponent, MainComponent, CarritoComponent, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isCartOpen = false;
  isAdminOpen = false;

  onToggleAdmin() {
    this.isAdminOpen = !this.isAdminOpen;
  }

  //Como son paneles absolutos la idea es que activa o desactiva los paneles segun los output de la cabecera
}
