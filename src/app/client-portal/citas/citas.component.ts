import { Component, OnInit } from '@angular/core';
import { ModalidadService } from 'src/app/services/modalidad.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  modalidades: any[] = [];

  constructor(private modalidadService: ModalidadService) {}

  ngOnInit(): void {
    this.modalidadService.obtenerModalidades().subscribe({
      next: (data) => {
        console.log('Modalidades recibidas:', data); // 👀 revisa en consola
        this.modalidades = data;
      },
      error: (err) => {
        console.error('Error al cargar modalidades:', err);
      }
    });
  }
}

