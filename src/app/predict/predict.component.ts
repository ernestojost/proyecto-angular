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
   * Quita espacios en blanco al inicio y al final de un string y quita # del string
   * 
   * @param str String a evaluar
   * @returns string
   */
  trim(str:string) {
    str = str.replace('#', '');
    return str.replace(/^\s+|\s+$/g, '');
  }

  /**
   * Función que se ejecuta al hacer click en el botón de "Predict"
   * 
   * @param name Nombre del usuario
   * @returns false para evitar el submit del formulario
   */
  predict(name:string) {
    this.showSpinner();
    this.disableButton();
    if (!this.isEmpty(this.trim(name)) && this.name != this.trim(name)) {
      this.hideError();
      this.setName(this.trim(name));
    } else if (this.name != this.trim(name)) {
      this.showError();
      this.hideSpinner();
      this.enableButton();
    } else {
      this.hideSpinner();
      this.enableButton();
    }
    return false;
  }


  /**
   * Muestra el mensaje de error
   * 
   * @returns void
   */
  showError() {
    document.getElementById('name')?.classList.add('invalid');
    document.getElementsByClassName('name-invalid')[0].setAttribute("style", "display: block");
  }

  /**
   * Oculta el mensaje de error
   * 
   * @returns void
   */
  hideError() {
    document.getElementById('name')?.classList.remove('invalid');
    document.getElementsByClassName('name-invalid')[0].setAttribute("style", "display: none");
  }

  /**
   * Muestra el spinner de carga
   * 
   * @returns void
   */
  showSpinner() {
    document.getElementById('spinner-name')?.classList.remove('d-none');
    document.getElementById('spinner-name')?.classList.add('d-block');
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

  /**
   * Deshabilita el botón de "Predict"
   * 
   * @returns void
   */
  disableButton() {
    document.getElementById('predict-button')?.classList.add('disabled');
  }

  /**
   * Habilita el botón de "Predict"
   * 
   * @returns void
   */
  enableButton() {
    document.getElementById('predict-button')?.classList.remove('disabled');
  }

}
