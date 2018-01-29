import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { EstruturaBlindsComponent } from '../estrutura-blinds/estrutura-blinds.component';
import { JogadorComponent } from '../jogador/jogador.component';
import { EtapaComponent } from '../etapa/etapa.component';
import { PainelInicioEtapaComponent } from '../painel-inicio-etapa/painel-inicio-etapa.component';
import { JogadorDetalheComponent } from '../jogador-detalhe/jogador-detalhe.component';

const ROUTES:Routes = [
  { path: '',component: EtapaComponent},
  { path: 'jogadores',component: JogadorComponent},
  { path: 'detalhe/:id',component: JogadorDetalheComponent},
  { path: 'etapa',component: EtapaComponent},
  { path: 'inicio', component: PainelInicioEtapaComponent},
  { path: 'blinds', component: EstruturaBlindsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
