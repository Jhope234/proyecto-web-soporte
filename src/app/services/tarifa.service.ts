import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TarifaService {
  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>('/tarifas');
  }

  obtener() {
    return this.http.get('/tarifas/ver');
  }

  obtenerPorDistrito() {
    return this.http.get('/tarifas_distritos');
  }
}

