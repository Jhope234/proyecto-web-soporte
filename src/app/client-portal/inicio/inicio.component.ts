import { Component } from '@angular/core';

type Mensaje = { rol: 'bot' | 'user'; texto: string };

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  chatAbierto = false;
  entrada = '';
  mensajes: Mensaje[] = [
    { rol: 'bot', texto: 'Hola 👋 Soy tu asistente. ¿En qué puedo ayudarte hoy?' }
  ];

  toggleChat(): void {
    this.chatAbierto = !this.chatAbierto;
  }

  enviarPregunta(texto: string): void {
    this.mensajes.push({ rol: 'user', texto });
    // Respuesta simple simulada
    const respuesta = this.responder(texto);
    setTimeout(() => this.mensajes.push({ rol: 'bot', texto: respuesta }), 300);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const texto = this.entrada.trim();
    if (!texto) return;
    this.enviarPregunta(texto);
    this.entrada = '';
  }

  private responder(texto: string): string {
    const t = texto.toLowerCase();
    if (t.includes('agenda') || t.includes('cita')) {
      return 'Para agendar, primero regístrate o inicia sesión. Luego ingresa a Citas y selecciona modalidad y horario.';
    }
    if (t.includes('tarifa') || t.includes('domicilio')) {
      return 'Las tarifas a domicilio dependen del distrito. Regístrate e inicia sesión para ver las opciones disponibles.';
    }
    if (t.includes('remoto')) {
      return 'El soporte remoto está disponible para incidencias de software. Regístrate e inicia sesión para solicitarlo.';
    }
    return 'Puedo ayudarte con: agendar cita, tarifas a domicilio, soporte remoto. ¿Cuál necesitas?';
  }

  
}
