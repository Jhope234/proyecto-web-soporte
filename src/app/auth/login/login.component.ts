import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  correo = '';
  contrasena = '';

  @Output() solicitarRegistro = new EventEmitter<void>();

  cambiarVista() {
    this.solicitarRegistro.emit();
  }

  iniciarSesion(form: any) {
    console.log('Login:', form);
    // Tu lógica de login aquí
  }
}
