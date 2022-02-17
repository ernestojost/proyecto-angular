import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PredictNationality } from '../models/PredictNationality';

@Component({
  selector: 'app-predict-nationality',
  templateUrl: './predict-nationality.component.html',
  styleUrls: ['./predict-nationality.component.css'],
  providers: [DataService]
})
export class PredictNationalityComponent implements OnInit {

  // Nombre obtenido del input
  @Input('name') name: string;

  predictNationality: PredictNationality[];

  // Servicios para consumir el API
  dataService: DataService;

  constructor(dataService: DataService) { 
    this.name = ''; 
    this.dataService = dataService;
    this.predictNationality = [];
  }

  ngOnInit(): void {
  }

  // Obtiene el ID de un país
  getCountryID(index:number) {
    return this.predictNationality[index].country_id;
  }

  // Obtiene la probabilidad de un país
  getProbability(index:number) {
    return this.predictNationality[index].probability;
  }

  // Cambia el ID del país
  setCountryID(index:number, country_id:string) {
    this.predictNationality[index].country_id = country_id;
  }

  // Cambia la probabilidad
  setProbability(index:number, probability:number) {
    this.predictNationality[index].probability = probability;
  }

  // Se llama cuando se modifica el nombre y se envía
  ngOnChanges() {
    if (!this.isPredictNacionalityHidden()) {
      this.hidePredictNacionality();
    }
    this.name = this.trim(this.name);
    if (!this.stringIsEmpty(this.name)) {
      this.predictNationalityByName(this.name);
    }
  }

  // Vacia el array de países
  clearPredictNationality() {
    this.predictNationality = [];
  }

  // Detecta si un array está vacío
  arrayIsEmpty(arr:any[]) {
    return (!arr || 0 === arr.length);
  }

  // Detecta si un string está vacío
  stringIsEmpty(str:string) {
    return (!str || 0 === str.length);
  }

  /**
   * Quita espacios en blanco de un string
   * 
   * @param str String que se quiere limpiar espacion en blanco
   * @returns String sin espacios en blanco
   */
  trim(str:string) {
    return str.replace(/ /g,'');
  }

  // Consume el API para obtener la edad
  predictNationalityByName(name:string) {
    this.clearPredictNationality();
    this.dataService.predictNationalityFromName(name).subscribe(
      data => {
        data.country.forEach( (valor: any) => {
          var probability = Math.round(valor.probability * 100);
          var country = this.getCountryName(valor.country_id);
          this.predictNationality.push(new PredictNationality(country, probability));
        });
        this.showPredictNacionality()
        this.hideSpinner();
      }
    )
  }

  // Obtiene el nombre del país a partir del country id
  getCountryName(country_id:string) {
    return this.dataService.getCountryName(country_id);
  }

  /**
   * Oculta el componente de nacionalidad
   * 
   * @returns void
   */
   hidePredictNacionality() {
    document.getElementById('predict-nationality-component')?.classList.remove('d-block');
    document.getElementById('predict-nationality-component')?.classList.add('d-none');
  }

  /**
   * Muestra el componente de nacionalidad
   * 
   * @returns void
   */
  showPredictNacionality() {
    document.getElementById('predict-nationality-component')?.classList.remove('d-none');
    document.getElementById('predict-nationality-component')?.classList.add('d-block');
  }

  /**
   * Detecta si el componente de nacionalidad está oculto
   * 
   * @returns boolean
   */
  isPredictNacionalityHidden() {
    return document.getElementById('predict-nationality-component')?.classList.contains('d-none');
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
