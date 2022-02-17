import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PredictAge } from '../models/PredictAge';

@Component({
  selector: 'app-predict-age',
  templateUrl: './predict-age.component.html',
  styleUrls: ['./predict-age.component.css'],
  providers: [DataService]
})
export class PredictAgeComponent implements OnInit {

  // Nombre obtenido del input
  @Input('name') name: string;

  predictAge: PredictAge;

  // Servicios para consumir el API
  dataService: DataService;

  constructor(dataService: DataService) {
    this.name = ''; 
    this.dataService = dataService;
    this.predictAge = new PredictAge(0, 0);
  }

  // Obtiene la edad
  getAge() {
    return this.predictAge.age;
  }

  // Obtiene la cantidad
  getCount() {
    return this.predictAge.count;
  }

  // Obtiene el nombre 
  getName() {
    return this.name;
  }

  // Cambia la edad
  setAge(age:number) {
    this.predictAge.age = age;
  }

  // Cambia la cantidad
  setCount(count:number) {
    this.predictAge.count = count;
  }

  // Cambia el nombre
  setName(name:string) {
    this.name = name;
  }

  ngOnInit(): void {
  }

  // Se llama cuando se modifica el nombre y se envía
  ngOnChanges() {
    this.name = this.trim(this.name);
    if (!this.isEmpty(this.name)) {
      this.predictAgeByName(this.name);
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
  predictAgeByName(name:string) {
    this.setAge(0);
    this.dataService.predictAgeFromName(name).subscribe(
      data => {
        this.setAge(data.age);
        this.setCount(data.count);
      }
    )
  }
}
