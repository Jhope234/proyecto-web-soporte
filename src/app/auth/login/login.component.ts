import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Campos enlazados con ngModel
  correo: string = '';
  contrasena: string = '';

  // Mensajes de feedback
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private clienteService: ClienteService, private router: Router) {}

  iniciarSesion(formValue: any): void {
    const credentials = {
      correo: this.correo,
      password: this.contrasena // ⚠️ el backend espera "password"
    };

    this.clienteService.loginCliente(credentials).subscribe({
      next: (res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.mensajeExito = '✅ Login exitoso';
          this.mensajeError = '';
          // Redirige al perfil o dashboard
          this.router.navigate(['/account']);
        }
      },
      error: (err: any) => {
        console.error('Error en login:', err);
        this.mensajeError = '❌ Credenciales inválidas';
        this.mensajeExito = '';
      }
    });
  }

  volverAlInicio(): void {
    this.router.navigate(['/']); // redirige al inicio
  }

  redirigirRegistro(): void {
    this.router.navigate(['/register']); // redirige al registro
  }
}
