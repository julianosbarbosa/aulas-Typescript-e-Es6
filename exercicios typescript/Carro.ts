import Veiculo from './Veiculo'
//classe é um molde do objeto
export default class Carro extends Veiculo {// apos o importar a class que vai ser herdade deve passa o comando extends
  //atributos da classe
  private numeroDePortas: number

  //construtor informa os parametros que irao ser informados na instancia do objeto
  constructor(modelo: string, numeroDePortas: number) {
    //this referencia a classe
    super() //super eh um ajuste de contextos para herança no typescript
    this.modelo = modelo
    this.numeroDePortas = numeroDePortas
  }
}