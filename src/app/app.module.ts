import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app, se importan los locales y el register
import { registerLocaleData } from '@angular/common'
import localeEs from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
//una vez importados se registran nuestros locales en el registerLocal
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LOCALE_ID, useValue:'es-MX' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
