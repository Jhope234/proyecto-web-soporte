import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.scss']
})
export class DashboardClienteComponent {
  mostrarMenu = false;

  constructor(public auth: AuthService) {}
}
