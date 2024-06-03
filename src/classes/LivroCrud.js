const fs = require('fs');



class LivroCrud {

    constructor() {
        this.filePath = './src/files/livros.json';
    }
    
    writeBook(book) {
            const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))                    
            conteudoAtual.push({
                    codigo: book.getCodigo,
                    nome: book.getNome,
                    quantidadePages: book.getQuantidadePages,
                    genero: book.getGenero,
                    autor: book.getAutor
            })
            fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )

    }


    readAllBooks() {
        const allBoooks = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        console.log('----------------- ---------------- -----------------')
        console.log('Nomes de todos os livros cadastrados: ')

        allBoooks.forEach(book => {
            console.log('*', book.nome)
        })
        console.log('----------------- ---------------- -----------------')
    }


    readBook(palavra) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))        
        const livroFind = conteudoAtual.find(book => book.nome === palavra)
        let bookFindValidate = false
        if(livroFind) {
            bookFindValidate = true
            console.log(livroFind)
        } else {
            console.log('livro não encontrado')
        }
        return bookFindValidate
    }

    deleteBook(palavra) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))        
        const bookFilter = conteudoAtual.filter(book => book.nome !== palavra)
        if (conteudoAtual.length === bookFilter.length){
            console.log('livro não encontrado')
        } else {
            fs.writeFileSync(
                this.filePath,
                JSON.stringify(bookFilter, null, 2),
                'utf-8'
            )
            console.log('livro eliminado com sucesso');
        }
    }

    editBook(bookName, attribBook, newAttribBook) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8')) 
        let bookFind = false    
        const bookFilter = conteudoAtual.map(book => {
            if (book.nome === bookName){
                bookFind = true
                if(book.hasOwnProperty(attribBook)) {
                    book[attribBook] = newAttribBook
                } else{
                    bookFind = false
                    console.log(`campo ${attribBook} não encontrado`)
                }
            }
            return book
        })
        if (bookFind === true) {
            fs.writeFileSync(
                this.filePath,
                JSON.stringify(bookFilter, null, 2),
                'utf-8'
            )
            console.log('Livro alterado com sucesso');
        } else {
            console.log(`Não existe campo com o nome ${attribBook} no ${bookName}`)
        }
    return bookFind
    }

}


   
// deletar usar filter para remover para alterar array, 
//salva o novo array 

module.exports = LivroCrud;
