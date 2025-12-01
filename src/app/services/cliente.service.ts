import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private baseUrl = 'https://spyrocode.dev';

  constructor(private http: HttpClient) {}

  registrarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/clientes/registrar`, cliente);
  }

  loginCliente(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/clientes/login`, credentials);
  }

  obtenerCliente(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/clientes/ver?id=${id}`, { headers });
  }

  actualizarCliente(cliente: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.baseUrl}/clientes/actualizar`, cliente, { headers });
  }

  eliminarCliente(id: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.baseUrl}/clientes/eliminar?id=${id}`, { headers });
  }
}
