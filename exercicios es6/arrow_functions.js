//na arrow function nao usa o nome function, apos os parametros usa => 
//... se for so um retorno nao precisas de () mas se for vazio ou
// mais de um parametro e nao precisa usar {} e declarar return se nao excultar return

var dobroDoValor2 = numero => numero * 2
console.log(dobroDoValor2(7))

var dobroDoValor = function(numero) {
  return numero * 2
}

console.log(dobroDoValor(7))