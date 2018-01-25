import { Blind } from './blind';
import { Jogador } from './jogador';
import { Rateio } from './rateio';

export class Etapa{
    id:number;
    nome:string;
    blinds:Blind[] = [];
    addOn:number = 0;
    jogadores:Jogador[] = [];
    stackInicial:number;
    buyin:number;
    rateios:Rateio[];
    nivelStopRebuy:number;
    timeBankInMinutes:number;    
}