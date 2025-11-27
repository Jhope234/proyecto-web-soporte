import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  modalEditar = false;
  modalEliminar = false;

  mostrarEditar() {
    this.modalEditar = true;
    this.modalEliminar = false;
  }

  mostrarEliminar() {
    this.modalEliminar = true;
    this.modalEditar = false;
  }

  cerrarModales() {
    this.modalEditar = false;
    this.modalEliminar = false;
  }
}
