import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nombres = '';
  apellidos = '';
  telefono = '';
  correo = '';
  contrasena = '';

@Output() solicitarLogin = new EventEmitter<void>();

cambiarVista() {
  this.solicitarLogin.emit();
}


  registrar(form: any) {
    console.log('Datos registrados:', form);
    // Aquí puedes llamar a tu AuthService para enviar los datos al backend
  }
}
