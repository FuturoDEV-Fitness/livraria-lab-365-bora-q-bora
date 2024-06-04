const crypto = require('crypto');
const AuditorioCrud = require('./AuditorioCrud');

class Auditorio {
  #nome = '';
  #codigo = '';
  #descricao = '';
  #qtdPessoasSuportadas = 0;

  constructor(nome, descricao, qtdPessoasSuportadas) {
    this.#nome = nome;
    this.#codigo = crypto.randomUUID(); // Gera um código único para o auditório
    this.#descricao = descricao;
    this.#qtdPessoasSuportadas = qtdPessoasSuportadas;
  }

  set setNome(nome) {
    this.#nome = nome;
  }

  get getNome() {
    return this.#nome;
  }

  set setDescricao(descricao) {
    this.#descricao = descricao;
  }

  get getDescricao() {
    return this.#descricao;
  }

  set setQtdPessoasSuportadas(qtdPessoasSuportadas) {
    this.#qtdPessoasSuportadas = qtdPessoasSuportadas;
  }

  get getQtdPessoasSuportadas() {
    return this.#qtdPessoasSuportadas;
  }

  get getCodigo() {
    return this.#codigo;
  }
}

module.exports = Auditorio;
