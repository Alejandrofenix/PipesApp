import { Component,  } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{
  //i18nSelect
  nombre:string = 'Alejandro';
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'

  }

  cambiarNombre(){
    this.nombre = 'Andrea';
    this.genero='femenino';
  }
  //i18nPlural

  clientes:string[]=['Maria','Juan','Susana','Jose'];
  clientesMap={
    '=0':'no tenemos clientes esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'
  }

  borrarCliente(){
    if(this.clientes.length==0)return;
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre:'Alejandro',
    edad:24,
    direccion:'México, México'
  }

  heroes=[
    {
    nombre:'Superman',
    vuela:true
  },
    {
    nombre:'Batman',
    vuela:false
  },
    {
    nombre:'Aquaman',
    vuela:false
  },
    {
    nombre:'Wonder Woman',
    vuela:true
  },
]



}
