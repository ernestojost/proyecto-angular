import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {

  name: string;

  constructor() {
    this.name = '';
  }

  ngOnInit(): void {
  }

  predict(name:string) {
    this.name = name;
    return false;
  }

}
