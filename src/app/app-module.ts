import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ConfiguracionComponent } from './configuracion-component/configuracion-component';
import { FormsModule } from '@angular/forms';
import { Juego } from './juego/juego';

@NgModule({
  declarations: [
    App,
    ConfiguracionComponent,
    Juego,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [ConfiguracionComponent]
})
export class AppModule { }
