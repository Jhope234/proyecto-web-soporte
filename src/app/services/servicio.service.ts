import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServicioService {
  constructor(private http: HttpClient) {}

  registrarServicio(servicio: any): Observable<any> {
    return this.http.post('/servicios', servicio);
  }

  getServiciosInstalacion(): Observable<any[]> {
    return this.http.get<any[]>('/serviciosInstalacion');
  }

  getServiciosReparacion(): Observable<any[]> {
    return this.http.get<any[]>('/serviciosReparacion');
  }

  getServiciosMantenimiento(): Observable<any[]> {
    return this.http.get<any[]>('/serviciosMantenimiento');
  }
}

