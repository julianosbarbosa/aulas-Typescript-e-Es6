import {DaoInterface} from './DaoInterface'

export class ConcessionariaDao implements DaoInterface{
  nomeTabela: string ='tb_consecionaria'
  
    inserir(object: any): boolean{
      console.log("Logica de insert")
      return true
    }
    atualizar(object: any): boolean{
      console.log("Logica de Update")
      return true
    }
    remover(id:number):any{
      console.log("Logica de Delete")
      return null
    }
    selecionar(id:number):any{
      console.log("Logica de select")
      return null
    }
    selecionarTodos():[any]{
      console.log("Logica de GetAll")
      return [new Array]
    }
}