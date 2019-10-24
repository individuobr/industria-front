import { PassageiroModel } from '../model/passageiro-model';

export class EndPoint {

    private static INDUSTRIA_API : string = 'http://localhost:8080';
    public static SOCKET : string = "ws://localhost:8080/socket";

    
    //Url´s
    public static gravaPassageiro() : any{
        return this.INDUSTRIA_API + '/passageiro/cadastrar';
    }

    public static gravaBagagem() : any{
        return this.INDUSTRIA_API + '/bagagem/cadastrar';
    }
}
