import { Injectable } from '@angular/core';
import { Usuario } from '../Models/usuario';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //BehaviorSubject con usuario actual (null si no hay)
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser$: Observable<Usuario | null>; //$ para indicar que es observable
  private apiUrl = 'http://localhost:3000/api/Usuario';
  private ContadorKey = 1; //Contador para asignar id a key

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario | null>(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
   }

  // Devuelve el último valor de la sesión actual
  public get currentUserValue(): Usuario | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(map(user => { //pipe para transformar la respuesta junto con map
        if (user) {
          this.currentUserSubject.next(user);
          return true;
        }
        return false;
      }));
  }
  register(username: string, password: string): Observable<boolean> {
    const userId = this.ContadorKey++;
    return this.http.post<any>(`${this.apiUrl}/register`, { key: userId, username, password })
      .pipe(map(user => {
        if (user) {
          return true;
        }
        return false;
      }));
  }
  logout(): void {
    this.currentUserSubject.next(null);
  }

}
