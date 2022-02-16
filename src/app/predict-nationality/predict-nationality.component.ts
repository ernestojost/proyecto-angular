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
    console.log(this.predictNationality);

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
    str.replace(/ /g,'');
    return (!str || 0 === str.length);
  }

  // Consume el API para obtener la edad
  predictNationalityByName(name:string) {
    this.clearPredictNationality();
    this.dataService.predictNationalityFromName(name).subscribe(
      data => {
        console.log('acaaa');
        console.log(data);
        /* data.forEach(country => {
          this.predictNationality.push(country);
        }); */
        console.log(this.predictNationality);
      }
    )
  }

}
