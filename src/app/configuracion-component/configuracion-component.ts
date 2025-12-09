import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Configuracion } from '../modelos/configuracion.modelo';

@Component({
  selector: 'app-configuracion-component',
  standalone: false,
  templateUrl: './configuracion-component.html',
  styleUrl: './configuracion-component.css',
})
export class ConfiguracionComponent {
  // Variables del formulario
  nombre: string = "";
  apellido: string = "";
  rangoMax: number | null = null;
  intentos: number | null = null;

  // Feedback en tiempo real
  feedbackNombre: string = "";
  feedbackApellido: string = "";
  feedbackRango: string = "";
  feedbackIntentos: string = "";

  // Control del formulario
  formularioValido: boolean = false;
  datosConfirmados: boolean = false;

  // Guardar la configuración creada
  cfg!: Configuracion;

  // Evento para enviar la configuración al componente padre
  @Output() configurado = new EventEmitter<Configuracion>();

  // Método del ciclo de vida
  ngOnInit(): void {
    console.log("Componente ConfiguracionComponent inicializado");
  }


  //metodo para validar datos del formulario
  validarFormulario() {
    this.feedbackNombre = this.nombre.trim() ? "✅ Correcto" : "❌ El nombre no puede estar vacío";
    this.feedbackApellido = this.apellido.trim() ? "✅ Correcto" : "❌ El apellido no puede estar vacío";
    this.feedbackRango = (this.rangoMax != null && this.rangoMax >= 4) ? "✅ Correcto" : "❌ El rango mínimo es 4";
    this.feedbackIntentos = (this.intentos != null && this.intentos > 0) ? "✅ Correcto" : "❌ Número de intentos inválido";

    this.formularioValido = [
      this.feedbackNombre,
      this.feedbackApellido,
      this.feedbackRango,
      this.feedbackIntentos
    ].every(f => f.includes("✅"));
  }

  // metodo para recoger los datos
  recogerDatos() {
    if (!this.formularioValido || this.rangoMax == null || this.intentos == null) return;

    const numeroRandom = Math.floor(Math.random() * this.rangoMax);

    //Objeto configuracion modelo
    const cfg = new Configuracion(
      this.nombre.trim(),
      this.apellido.trim(),
      this.rangoMax,
      this.intentos,
      numeroRandom
    );

  console.log("Número aleatorio generado:", numeroRandom);

  // Guardar configuración para el HTML / juego
  this.cfg = cfg;

  this.datosConfirmados = true;
  this.configurado.emit(cfg);

  console.log("CONFIGURACIÓN GUARDADA:", cfg);
  }
}  

