import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h2>la base es: {{ base }}</h2>

        <button (click)="acumular( base )" > + {{ base }} </button>


        <span> {{ numero }} </span>


        <button (click)="acumular( - base )"> - {{ base }} </button>
    `
})

export class ContadorComponent {

    public titulo: string = 'Contador App';
    numero: number = 0;
    base: number = 5;

    acumular(valor: number){

    this.numero += valor;
  }

}