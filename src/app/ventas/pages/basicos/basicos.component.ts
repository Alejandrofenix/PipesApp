import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

    nombreLower: string = 'alejandro';
    nombreUpper: string = 'ALEJANDRO';
    nombreCompleto: string = 'aLeJaNdRO PiNEDo';
    fecha: Date = new Date(); // El dia actual
  
}
