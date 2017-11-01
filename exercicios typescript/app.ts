//para transformar em ecma 5 eh so execultar tsc nome do arquivo
//tsc -init cria tsconfig onde vc pode habilitar "outDir": "./dist"
//tsc -w assite todas alterações 

let ola = (nome: string) => {
  console.log("Olá " + nome)
}
ola("Juliano")
// variaveis tipadas
let mesagem: string = "Seja bem vindo"
let temporadas: number = 10
let estudandoAngular: boolean = true
let listaDeFrutas: Array<string> = ['Uva', 'Banana', 'Abacaxi']
let listaDeFrutas2: string[] = ['Uva', 'Banana', 'Abacaxi']
let notasDasProvas: Array<number> = [7.5, 8, 9]

