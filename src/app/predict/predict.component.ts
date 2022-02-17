import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {

  /**
   * Nombre del usuario
   * 
   * @type {string}
   */
  name: string;

  constructor() {
    this.name = '';
  }

  ngOnInit(): void {
  }

  /**
   * Cambia la propiedad name
   * 
   * @param name Nombre del usuario
   * @returns void
   */
  setName(name:string) {
    this.name = name;
  }

  /**
   * Detecta si un string está vacío
   * 
   * @param string String a evaluar
   * @returns boolean 
   */
  isEmpty(string:string) {
    if (string.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Función que se ejecuta al hacer click en el botón de "Predict"
   * 
   * @param name Nombre del usuario
   * @returns false para evitar el submit del formulario
   */
  predict(name:string) {
    if (!this.isEmpty(name)) {
      if (this.hasNameError()) {
        this.toggleNameError();
      }
      this.setName(name);
    } else {
      if (!this.hasNameError()) {
        this.toggleNameError();
      }
    }
    return false;
  }


  /**
   * Detecta si el input 'name' tiene el mensaje de error
   * 
   * @returns boolean
   */
  hasNameError() {
    if (document.getElementById('name')?.classList.contains('invalid')) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Muestra o oculta los mensajes de error en el input de nombre
   * 
   * @returns void
   */
  toggleNameError() {
    if (document.getElementById('name')?.classList.contains('invalid')) {
      document.getElementById('name')?.classList.remove('invalid');
      document.getElementsByClassName('name-invalid')[0].setAttribute("style", "display: none");
    } else {
      document.getElementById('name')?.classList.add('invalid');
      document.getElementsByClassName('name-invalid')[0].setAttribute("style", "display: block");
    }
  }

}
