import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private baseUrl = 'https://spyrocode.dev';

  constructor(private http: HttpClient) {}

  actualizarCliente(cliente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/clientes/actualizar`, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clientes/eliminar?id=${id}`);
  }
}
