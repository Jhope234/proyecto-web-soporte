import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HistorialService {
private baseUrl = 'https://spyrocode.dev/api'; // si usas prefijo /api

  constructor(private http: HttpClient) {}

  // Obtener historial completo
  obtenerHistorial(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/servicios`);
  }

  // Obtener detalle de un servicio por ID
  obtenerDetalleServicio(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/servicios/ver?id=${id}`);
  }
}
