import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../Models/usuario';
import { UsuarioService } from '../../Services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  isMenuOpen = false;        // controla el despliegue del submenú al hover/clic
  isShowingLoginForm = false;
  isShowingRegisterForm = false;

  username: string = '';
  password: string = '';

  constructor(public usuarioService: UsuarioService) {}

  get currentUser(): Usuario | null {
    return this.usuarioService.currentUserValue;
  }

  // Abre/cierra el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Muestra el formulario de login
  showLoginForm() {
    this.isShowingLoginForm = true;
    this.isShowingRegisterForm = false;
    this.toggleMenu(); // Opcional: cierra o mantiene el menú
  }

  // Muestra el formulario de registro
  showRegisterForm() {
    this.isShowingLoginForm = false;
    this.isShowingRegisterForm = true;
    this.toggleMenu(); // Opcional
  }

  // Intenta loguear al usuario
  login() {
    this.usuarioService.login(this.username, this.password).subscribe(success =>{
      if (success) {
        alert('Login correcto');
        this.isShowingLoginForm = false; //Cierra panel y lo resetea
        this.username = '';
        this.password = '';
      } else {
      alert('Login fallido');
      }
    });
  }

  // Intenta registrar al usuario
  register() {
    this.usuarioService.register(this.username, this.password).subscribe(success => {
      if (success) {
        this.isShowingRegisterForm = false;
        this.username = '';
        this.password = '';
      } else {
        alert('Registration failed');
      }
    });
  }

  // Cerrar sesión
  doLogout() {
    this.usuarioService.logout();
    this.toggleMenu(); // Cierra menú tras logout
  }
}
