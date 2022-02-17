import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PredictAge } from './models/PredictAge';
import { PredictGender } from './models/PredictGender';
import { Countries } from './models/CountryCodes';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private countries = Countries;

  constructor(private http: HttpClient) {
  }

  predictAgeFromName(name:string) {
    return this.http.get<PredictAge>('https://api.agify.io/?name=' + name);
  }

  predictGenderFromName(name:string) {
    return this.http.get<PredictGender>('https://api.genderize.io/?name=' + name);
  }

  predictNationalityFromName(name:string) {
    return this.http.get<any>('https://api.nationalize.io/?name=' + name);
  }

  getCountryName(country_id:string) {
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].code === country_id) {
        return this.countries[i].name;
      }
    }
    return 'Unknown';
  }

  getIP() {
    return this.http.get<any>('https://api.ipify.org/?format=json');
  }

  getDataByIP(ip:string) {    
    return this.http.get<any>('https://api.ipdata.co/' + ip + '?api-key=ceddb20240a562554b508745b08b3b1f34a0586f50f3ee1b23000a65');
  }
}
