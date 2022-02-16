import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PredictAge } from './models/PredictAge';
import { PredictGender } from './models/PredictGender';
import { PredictNationality } from './models/PredictNationality';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  predictAgeFromName(name:string) {
    return this.http.get<PredictAge>('https://api.agify.io/?name=' + name);
  }

  predictGenderFromName(name:string) {
    return this.http.get<PredictGender>('https://api.genderize.io/?name=' + name);
  }

  predictNationalityFromName(name:string) {
    var a = this.http.get('https://api.nationalize.io/?name=' + name);
    console.log('dasdasdas');
    
    console.log(a);
    
    return a;
  }
}
