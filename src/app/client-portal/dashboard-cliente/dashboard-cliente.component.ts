import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.scss']
})
export class DashboardClienteComponent {
  mostrarMenu = false;
  mostrarBuscador = false; // ✅ propiedad para controlar la lupa expandible

  constructor(public auth: AuthService) {}
}
