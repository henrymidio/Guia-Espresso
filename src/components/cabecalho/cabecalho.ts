import { Component } from '@angular/core';

/**
 * Generated class for the CabecalhoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cabecalho',
  templateUrl: 'cabecalho.html'
})
export class CabecalhoComponent {

  text: string;

  constructor() {
    console.log('Hello CabecalhoComponent Component');
    this.text = 'Hello World';
  }

}
