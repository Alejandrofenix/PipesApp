import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {TreeModule} from 'primeng/tree';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  exports: [

    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule, 
    ToolbarModule,
    TreeModule,TableModule
  ]
})
export class PrimeNgModule { }
