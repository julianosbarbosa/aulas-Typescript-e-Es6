//classe é um molde do objeto
export default class Veiculo {
  //atributos da classe
  protected modelo: string //protected a visisbilidade é somente dentro das classes filhas
  protected velocidade: number = 0//private a visisbilidade é somente dentro da classe e public eh global

  //método do objeto
  public acelerar(): void {
    this.velocidade = this.velocidade + 10
  }

  public parar(): void {
    this.velocidade = 0
  }

  public velocidadeAtual(): number {
    return this.velocidade
  }
}