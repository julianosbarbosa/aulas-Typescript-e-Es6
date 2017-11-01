"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao = (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_consecionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log("Logica de insert");
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log("Logica de Update");
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log("Logica de Delete");
        return null;
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log("Logica de select");
        return null;
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log("Logica de GetAll");
        return [new Array];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
