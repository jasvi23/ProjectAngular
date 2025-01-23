import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lateral',
  standalone: true,
  imports: [],
  templateUrl: './lateral.component.html',
  styleUrl: './lateral.component.css'
})
export class LateralComponent {
 @Output() categoriaSeleccionada = new EventEmitter<string>();

  seleccionarCategoria(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.labels && inputElement.labels.length > 0) {
      this.categoriaSeleccionada.emit(inputElement.labels[0].innerText);
    }
  }
}
