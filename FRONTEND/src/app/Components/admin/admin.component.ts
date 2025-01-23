import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';

interface Product {
  name: string;
  category: string;
  price: number;
  imgUrl?: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  
  
  // Array local de productos (ejemplo). Luego vendrá de tu base de datos o servicio
  products: Product[] = [
    { name: 'Producto 1', category: 'Categoría A', price: 10, imgUrl: 'assets/img/prod1.png' },
    { name: 'Producto 2', category: 'Categoría B', price: 20, imgUrl: 'assets/img/prod2.png' }
  ];

  // Objeto para un nuevo producto
  newProduct: Product = {
    name: '',
    category: '',
    price: 0
  };

  // Producto que se está editando
  selectedProduct: Product = {
    name: '',
    category: '',
    price: 0,
    // ... otras propiedades necesarias
  };

  // Simular lógica de añadir un producto
  /*addProduct() {
    const formData = new FormData();
    formData.append('nombre', this.producto.nombre);
    formData.append('precio', this.producto.precio);
    formData.append('categoria', this.producto.categoria);
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile, this.selectedFile.name);
    }

    this.productoService.crearProducto(formData).subscribe(response => {
      console.log('Producto guardado', response);
    });
  }*/

  // Editar un producto existente
  editProduct(product: Product) {
    // Copiamos el objeto para editarlo sin modificar la lista original
    this.selectedProduct = { ...product };
  }

  // Actualizar el producto seleccionado
  updateProduct() {
    if (this.selectedProduct) {
      // Busca en products el original y reemplaza sus valores
      const index = this.products.findIndex(p => p.name === this.selectedProduct!.name);
      if (index >= 0) {
        this.products[index] = { ...this.selectedProduct };
      }
      // Limpia el producto seleccionado
      this.selectedProduct = {
        name: '',
        category: '',
        price: 0,
        // ...
      };
    }
  }

  // Eliminar un producto
  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }

  // Manejo de archivos (imágenes)
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Podrías usar FileReader para generar una URL base64, etc.
      // Por ejemplo:
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.selectedProduct) {
          this.selectedProduct.imgUrl = e.target.result;
        } else {
          this.newProduct.imgUrl = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
