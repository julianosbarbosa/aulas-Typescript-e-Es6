"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PessoaDao = (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_Pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log("Logica de insert");
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log("Logica de Update");
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log("Logica de Delete");
        return null;
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log("Logica de select");
        return null;
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log("Logica de GetAll");
        return [new Array];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
