import { AssentosEnum } from './assentos-enum.enum';
import { BagagemModel } from './bagagem-model';

export class PassageiroModel {

    id : number;
    nome : string;
    cpf : number;
    assento : AssentosEnum;
    voo: string;
    bagagens : Array<BagagemModel>;
}
