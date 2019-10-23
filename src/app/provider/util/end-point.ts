import { PassageiroModel } from '../model/passageiro-model';

export class EndPoint {

    private static INDUSTRIA_API : string = 'http://localhost:9090';


    //Url´s
    public static gravaPassageiro() : any{
        return this.INDUSTRIA_API + '/passageiro/cadastrar';
    }

    public static gravaBagagem() : any{
        return this.INDUSTRIA_API + '/bagagem/cadastrar';
    }

    public static buscaNomePassageiro() : any{
      return this.INDUSTRIA_API + '/passageiro/buscarNome'
    }

    public static buscaIdPassageiro() : any{
      return this.INDUSTRIA_API + '/passageiro/buscarId/{id}'
    }

    public static buscaBagagem() : any{
      return this.INDUSTRIA_API + '/bagagem/buscarhashArduino/{hash_arduino}'
    }
}
