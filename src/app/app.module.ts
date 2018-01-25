import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JogadorComponent } from './jogador/jogador.component';
import { EtapaComponent } from './etapa/etapa.component';
import { EstruturaBlindsComponent } from './estrutura-blinds/estrutura-blinds.component';
import { PainelInicioEtapaComponent } from './painel-inicio-etapa/painel-inicio-etapa.component';


@NgModule({
  declarations: [
    AppComponent,
    JogadorComponent,
    EtapaComponent,
    EstruturaBlindsComponent,
    PainelInicioEtapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
