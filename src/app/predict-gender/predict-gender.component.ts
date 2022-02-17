import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PredictGender } from '../models/PredictGender';

@Component({
  selector: 'app-predict-gender',
  templateUrl: './predict-gender.component.html',
  styleUrls: ['./predict-gender.component.css'],
  providers: [DataService]
})
export class PredictGenderComponent implements OnInit {

  // Nombre obtenido del input
  @Input('name') name: string;

  predictGender: PredictGender;

  // Servicios para consumir el API
  dataService: DataService;

  constructor(dataService: DataService) { 
    this.name = ''; 
    this.dataService = dataService;
    this.predictGender = new PredictGender('', 0, 0);
  }

  ngOnInit(): void {
  }

  // Obtiene el género
  getGender() {
    return this.predictGender.gender;
  }

  // Obtiene la probabilidad
  getProbability() {
    return this.predictGender.probability;
  }

  // Obtiene la cantidad
  getCount() {
    return this.predictGender.count;
  }

  // Cambia el género
  setGender(gender:string) {
    this.predictGender.gender = gender;
  }

  // Cambia la probabilidad
  setProbability(probability:number) {
    this.predictGender.probability = probability;
  }

  // Cambia la cantidad
  setCount(count:number) {
    this.predictGender.count = count;
  }

  // Se llama cuando se modifica el nombre y se envía
  ngOnChanges() {
    if (!this.isPredictGenderHidden()) {
      this.hidePredictGender();
    }
    this.name = this.trim(this.name);
    if (!this.isEmpty(this.name)) {
      this.predictGenderByName(this.name);
    }
  }

  // Detecta si un string está vacío
  isEmpty(str:string) {
    return (!str || 0 === str.length);
  }

  // Quita espacios en blanco
  trim(str:string) {
    return str.replace(/ /g,'');
  }

  // Consume el API para obtener la edad
  predictGenderByName(name:string) {
    this.setGender('');
    this.dataService.predictGenderFromName(name).subscribe(
      data => {
        this.setGender(this.traslateGender(data.gender));
        this.setProbability(data.probability);
        this.setCount(data.count);
        this.showPredictGender();
        this.hideSpinner();
      }
    )
  }

  // Pasa el texto de genero de ingles a español
  traslateGender(gender: string) {
    if (gender === 'male') {
      return 'hombre';
    } else {
      return 'mujer';
    }
  }

  /**
   * Oculta el componente de género
   * 
   * @returns void
   */
  hidePredictGender() {
    document.getElementById('predict-gender-component')?.classList.remove('d-block');
    document.getElementById('predict-gender-component')?.classList.add('d-none');
  }

  /**
   * Muestra el componente de género
   * 
   * @returns void
   */
  showPredictGender() {
    document.getElementById('predict-gender-component')?.classList.remove('d-none');
    document.getElementById('predict-gender-component')?.classList.add('d-block');
  }

  /**
   * Detecta si el componente de género está oculto
   * 
   * @returns boolean
   */
  isPredictGenderHidden() {
    return document.getElementById('predict-gender-component')?.classList.contains('d-none');
  }

  /**
   * Oculta el spinner de carga
   * 
   * @returns void
   */
  hideSpinner() {
    document.getElementById('spinner-name')?.classList.remove('d-block');
    document.getElementById('spinner-name')?.classList.add('d-none');
  }
}
