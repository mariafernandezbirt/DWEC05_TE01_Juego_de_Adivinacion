export class Configuracion  {
  public nombre: string = "";
  public apellido: string = "";
  public rangoMax: number = 0;
  public intentos: number = 0;
  public numeroSecreto: number = 0;  


    // Constructor
    constructor(nombre: string, apellido: string, rangoMax: number, intentos: number, numeroSecreto: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.rangoMax = rangoMax;
    this.intentos = intentos;
    this.numeroSecreto = numeroSecreto;
  }
}