import { PassageiroModel } from '../model/passageiro-model';

export class EndPoint {

    private static INDUSTRIA_API : string = 'http://localhost:8080';

    
    //Url´s
    public static gravaPassageiro() : any{
        return this.INDUSTRIA_API + '/passageiro/cadastrar';
    }

    public static gravaBagagem() : any{
        return this.INDUSTRIA_API + '/bagagem/cadastrar';
    }
}
