class Livro {
    #codigo = 0
    #nome = ''
    #quantidadePages = 0
    #genero = ''
    #autor = ''

    constructor(nome, quantidadePages, genero, autor) {
       this.#codigo = crypto.randomUUID()
       this.#nome = nome
       this.#quantidadePages = quantidadePages
       this.#genero = genero
       this.#autor = autor
    }



    get getCodigo(){
        return this.#codigo
     }

     set setCodigo(codigo){
        return this.#codigo
     }


     get getNome(){
        return this.#nome
     }

     set setNome(nome){
        return this.#nome
     }

     get getQuantidadePages() {
        return this.#quantidadePages
     }

     set setQuantidadePages(quantidadePages) {
        return this.#quantidadePages
     }


     get getGenero() {
        return this.#genero
     }

     set setGenero(Genero) {
        return this.#genero
     }


     get getAutor() {
        return this.#autor
     }
     set setAutor(autor) {
        return this.#autor
     }

     exibir(){
        console.log(`nome: ${this.#nome}, quantidade de paginas: ${this.#quantidadePages}, genero: ${this.#genero}, autor: ${this.#autor}, codigo: ${this.#codigo}`)
     }

}

module.exports = Livro;