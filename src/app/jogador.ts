import { Endereco } from './endereco';

export class Jogador{
    id:number;
    nome:string;
    idade:number;
    apelido:string;
    apartamentoBloco:string;
    endereco:Endereco = null;
}