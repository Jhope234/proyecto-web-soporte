import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

// Servicios que consumen tus APIs Laravel
import { ModalidadService } from 'src/app/services/modalidad.service';
import { DistritoService } from 'src/app/services/distrito.service';
import { HorarioService } from 'src/app/services/horario.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  modalidades: any[] = [];
  distritos: any[] = [];
  horarios: any[] = [];
  hoy: string = '';

  // Estado del formulario
  servicio = {
    nombres: '',
    apellidos: '',
    dni: '',
    direccion: '',
    fecha: '',
    modalidad: '',
    distrito: '',
    hora: '',
    comentario: '',
    acepto: false,
    precio: 0
  };

  constructor(
    private modalidadService: ModalidadService,
    private distritoService: DistritoService,
    private horarioService: HorarioService,
    private servicioService: ServicioService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    // Fecha mínima para el input de fecha
    const fechaHoy = new Date();
    this.hoy = fechaHoy.toISOString().split('T')[0];

    // Cargar modalidades desde API
    this.modalidadService.getModalidades().subscribe(
  (data: any[]) => this.modalidades = data,
  (err: any) => console.error('Error al cargar modalidades:', err)
);

this.distritoService.listar().subscribe(
  (data: any[]) => this.distritos = data,
  (err: any) => console.error('Error al cargar distritos:', err)
);

this.horarioService.listar().subscribe(
  (data: any[]) => this.horarios = data,
  (err: any) => console.error('Error al cargar horarios:', err)
);


  }

  registrarCita(): void {
    const { nombres, apellidos, fecha, hora, acepto } = this.servicio;

    // Validaciones básicas
    if (!nombres || !apellidos || !fecha || !hora) {
      alert('⚠️ Por favor completa los campos obligatorios.');
      return;
    }

    if (!acepto) {
      alert('⚠️ Debes aceptar los términos y condiciones.');
      return;
    }

    // Precio fijo para diagnóstico
    this.servicio.precio = 50;

    // Enviar cita al backend
    this.servicioService.registrarServicio(this.servicio).subscribe(
      () => alert('✅ Cita registrada correctamente'),
      (err: any) => console.error('Error al registrar cita:', err)
    );
  }
}
