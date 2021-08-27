import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {
  enMayusculas: boolean =true;
  ordenarPor:string ='nombre';
  heroes:Heroe[]=[
    {
    nombre: 'Superman',
    vuela:true,
    color:Color.azul
  },
    {
    nombre: 'Batman',
    vuela:false,
    color:Color.negro
  },
    {
    nombre: 'Green Lantern',
    vuela:true,
    color:Color.verde
  },
    {
    nombre: 'Daredevil',
    vuela:false,
    color:Color.rojo
  },
];
  change(){
    this.enMayusculas=!this.enMayusculas;
  }

  changeSort(valor: string){
    this.ordenarPor=valor;
    
  }
}
