class Leitor {

    #codigo 
    #nome = ""
    #cpf = ""
    #dataDeNascimento = ""

    constructor(nome, cpf, dataDeNascimento, codigo) {
       
        this.#codigo = Date.now()
        this.#nome = nome;
        this.#cpf = cpf;
        this.#dataDeNascimento = dataDeNascimento;
       
    }

    get getNome(){
       return this.#nome;
    }

    set setNome(nome) {
        this.#nome = nome;
    }

    get getCodigo(){
        return this.#codigo;
     }
 
     set setCodigo(codigo) {
         this.#codigo = codigo;
     }

    get getCpf(){
        return this.#cpf;
     }

    set setCpf(cpf) {
        this.#cpf = cpf;
    }

     get getDataDeNascimento(){
        return this.#dataDeNascimento;
     }

    set setDataDeNascimento(dataDeNascimento) {
        this.#dataDeNascimento = dataDeNascimento;
    }

}

module.exports = Leitor;
