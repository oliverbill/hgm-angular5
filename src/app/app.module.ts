import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { JogadorComponent } from './jogador/jogador.component';
import { EtapaComponent } from './etapa/etapa.component';
import { EstruturaBlindsComponent } from './estrutura-blinds/estrutura-blinds.component';
import { PainelInicioEtapaComponent } from './painel-inicio-etapa/painel-inicio-etapa.component';
import { MessageComponent } from './message/message.component';
import { JogadorDetalheComponent } from './jogador-detalhe/jogador-detalhe.component';
import { JogadorSearchComponent } from './jogador-search/jogador-search.component';
import { JogadorService } from './jogador.service';
import { AppMessageService } from './app-message.service';
import { JogadorConsultasService } from './jogador-consultas.service';


@NgModule({
  declarations: [
    AppComponent,
    JogadorComponent,
    EtapaComponent,
    EstruturaBlindsComponent,
    PainelInicioEtapaComponent,
    MessageComponent,
    JogadorDetalheComponent,
    JogadorSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [JogadorService,AppMessageService,JogadorConsultasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
