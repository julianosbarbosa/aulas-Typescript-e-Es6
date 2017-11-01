"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//classe é um molde do objeto
var Veiculo = (function () {
    function Veiculo() {
        this.velocidade = 0; //private a visisbilidade é somente dentro da classe e public eh global
    }
    //método do objeto
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.default = Veiculo;
