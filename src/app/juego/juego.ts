import { Component, Input, OnInit } from '@angular/core';
import { Configuracion } from '../modelos/configuracion.modelo';

@Component({
  selector: 'app-juego',
  standalone: false,
  templateUrl: './juego.html',
  styleUrl: './juego.css',
})

export class Juego implements OnInit {
  
  @Input() configuracion!: Configuracion; // Recibimos la configuración

  mensajeBienvenida: string = "";
  numeroIntento: number | null = null;  // Variable para vincular con el input
  feedbackIntento: string = "";         // Mensaje del intento actual
  intentosRestantes: number = 0;        // Para controlar los intentos
  partidaFinalizada: boolean = false;   // Para bloquear el input y botón al finalizar
  
  ngOnInit(): void {
    if (this.configuracion) {
      this.iniciarJuego();
    }
}
  
//metodo para iniciar el juego
  iniciarJuego() {
    this.mensajeBienvenida = `Ongi Etorri ${this.configuracion.nombre} ${this.configuracion.apellido}`;
    this.intentosRestantes = this.configuracion.intentos;
    console.log("Número secreto:", this.configuracion.numeroSecreto);
  }

  // metodo para comprobar el numero
  comprobarNumero() {
    if (this.numeroIntento === null || this.partidaFinalizada) return;

    // Restamos un intento
    this.intentosRestantes--;

    const diferencia = this.configuracion.numeroSecreto - this.numeroIntento;

    if (diferencia === 0) {
      this.feedbackIntento = "Has ganado 🎉";
      this.partidaFinalizada = true;
    } else if (diferencia === -1 || diferencia === 1) {
      this.feedbackIntento = "Caliente 🔥";
    } else if (diferencia === 2) {
      this.feedbackIntento = "Templado 🌤️";
    } else if (diferencia >= 3) {
      this.feedbackIntento = "Frío ❄️";
    } else if (diferencia < 0) {
      this.feedbackIntento = "Te pasaste 🚫";
    }

    // Si se acaban los intentos y no ganó
    if (this.intentosRestantes === 0 && !this.partidaFinalizada) {
      this.feedbackIntento += " | Juego terminado 😢";
      this.partidaFinalizada = true;
    }
  }
}
