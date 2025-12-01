import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  cliente: any = {};
  token: string | null = null;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    const idCliente = 1; // ⚠️ Reemplaza con el ID real del cliente logueado

    if (this.token) {
      this.clienteService.obtenerCliente(idCliente, this.token).subscribe({
        next: (data: any) => this.cliente = data,
        error: (err: any) => console.error('Error al cargar datos del cliente:', err)
      });
    }
  }

  editarCuenta(): void {
    if (this.token) {
      this.clienteService.actualizarCliente(this.cliente, this.token).subscribe({
        next: () => alert('✅ Cuenta actualizada correctamente'),
        error: (err: any) => console.error('Error al actualizar cuenta:', err)
      });
    }
  }

  eliminarCuenta(): void {
    if (this.token) {
      const idCliente = 1; // ⚠️ Reemplaza con el ID real
      this.clienteService.eliminarCliente(idCliente, this.token).subscribe({
        next: () => alert('🗑️ Cuenta eliminada correctamente'),
        error: (err: any) => console.error('Error al eliminar cuenta:', err)
      });
    }
  }
}
