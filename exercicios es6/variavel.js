var serie = 'Friends' //Varaivel no escopo global
const filme = 'Rambo' // Variavel que nao pode ser modificada e nao recebem outras atribuiçoes e nao eh elevado para o escopo global

if (true) {
  var serie = 'The walking dead' //variavel que é elevada para o escopo global 
  let serie2 = 'Game Of Thrones' // varaivel que so eh executada somente dentro do bloco
  console.log(serie2)
}

console.log(serie)