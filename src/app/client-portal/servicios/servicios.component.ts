import { Component, OnInit } from '@angular/core';
import { ModalidadService } from 'src/app/services/modalidad.service';
import { DistritoService } from 'src/app/services/distrito.service';
import { HorarioService } from 'src/app/services/horario.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  programasInstalacion: any[] = [];
  programasReparacion: any[] = [];
  modalidades: any[] = [];
  distritos: any[] = [];
  horarios: any[] = [];
  tarifasDistritos: any[] = [];

  servicio: any = {
    programa: '',
    modalidad: '',
    distrito: '',
    direccion: '',
    fecha: '',
    hora: '',
    nombres: '',
    apellidos: '',
    dni: '',
    comentario: '',
    precio: 0
  };

  constructor(
    private modalidadService: ModalidadService,
    private distritoService: DistritoService,
    private horarioService: HorarioService,
    private servicioService: ServicioService,
    private tarifaService: TarifaService
  ) {}

  ngOnInit(): void {
    // Cargar modalidades
    this.modalidadService.getModalidades().subscribe({
      next: (d: any[]) => this.modalidades = d,
      error: (err: any) => console.error('Error al cargar modalidades:', err)
    });

    // Cargar distritos
    this.distritoService.listar().subscribe({
      next: (d: any[]) => this.distritos = d,
      error: (err: any) => console.error('Error al cargar distritos:', err)
    });

    // Cargar horarios
    this.horarioService.listar().subscribe({
      next: (d: any[]) => this.horarios = d,
      error: (err: any) => console.error('Error al cargar horarios:', err)
    });

    // Cargar tarifas por distrito
    this.tarifaService.listar().subscribe({
      next: (d: any[]) => this.tarifasDistritos = d,
      error: (err: any) => console.error('Error al cargar tarifas:', err)
    });

   this.servicioService.getServiciosInstalacion().subscribe({
  next: (d: any[]) => this.programasInstalacion = d,
  error: (err: any) => console.error('Error al cargar instalación:', err)
});


    // Cargar programas de reparación
    this.servicioService.getServiciosReparacion().subscribe({
      next: (d: any[]) => this.programasReparacion = d,
      error: (err: any) => console.error('Error al cargar reparación:', err)
    });
  }

  actualizarPrecio(): void {
    // Precio base del servicio
    const servicio = [...this.programasInstalacion, ...this.programasReparacion]
      .find(s => s.id_servicio === this.servicio.programa);

    // Tarifa adicional por distrito
    const tarifa = this.tarifasDistritos.find(t => t.id_distrito === this.servicio.distrito);

    const precioServicio = servicio ? servicio.precio : 0;
    const precioDistrito = tarifa ? tarifa.precio : 0;

    this.servicio.precio = precioServicio + precioDistrito;
  }

  registrarServicio(): void {
    if (!this.formularioValido()) {
      alert('⚠️ Completa todos los campos obligatorios antes de registrar el servicio.');
      return;
    }

    this.servicioService.registrarServicio(this.servicio).subscribe({
      next: () => alert('✅ Servicio registrado correctamente'),
      error: (err: any) => console.error('Error al registrar servicio:', err)
    });
  }

  formularioValido(): boolean {
    return this.servicio.programa && this.servicio.distrito && this.servicio.precio > 0;
  }
}
