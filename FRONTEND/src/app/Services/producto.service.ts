import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../Models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/api/Producto';

  constructor(private http: HttpClient) {}
  
  // Método para obtener todos los productos (llenar arrays)
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}`);
  }
  
  //Metodo para obtener 1 producto
  getOneProducto(key: string): Observable<Producto>{
      return this.http.post<Producto>(`$(this.apiUrl)/key`, key)
  }

  crearProducto(producto: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, producto);
  }
}
