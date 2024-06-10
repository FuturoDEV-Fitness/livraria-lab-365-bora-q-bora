const readline = require('readline/promises');
const Livro = require('./classes/Livro');
const LivroCrud = require('./classes/LivroCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const quantidadePages =  await rl.question('Qual é a quantidade de paginas do livro?: ')
            const nome =  await rl.question('Qual é o nome do livro?: ')
            const genero =  await rl.question('Qual é o gênero literario do livro?: ')
            const autor =  await rl.question('Qual é o autor do livro?: ')
            const livro = new Livro(nome, quantidadePages, genero, autor)
            livro.setQuantidadePages = quantidadePages
            livro.setNome = nome
            livro.setGenero = genero
            livro.setAutor = autor
            const crud = new LivroCrud()
            crud.writeBook(livro)
            rl.close();
            break;
        case 'deletar': {
            const crudConsultar = new LivroCrud()
            crudConsultar.readAllBooks()
            const palavra = await rl.question('Escreva o nome do livro a eliminar: ')
            crudConsultar.deleteBook(palavra)
            rl.close();
            break;
        }
        case 'consultar': {
            const crudConsultar = new LivroCrud()
            crudConsultar.readAllBooks()
            const palavra = await rl.question('Escreva o nome do livro a consultar?: ')
            const crud = new LivroCrud()
            crud.readBook(palavra)
            rl.close();
            break;
        }
        case 'alterar': {
            const crudConsultar = new LivroCrud()
            crudConsultar.readAllBooks()
            const bookName = await rl.question('Escreva o nome do livro a alterar: ')
            let livroEncontrado = crudConsultar.readBook(bookName)
            if(livroEncontrado === false){
                console.log(`Não existe livro com o nome ${bookName} no cadastro`)
                rl.close
                break
            }
            const attribBook = await rl.question('Escreva qual campo do livro quer alterar: ')
            const newAttribBook = await rl.question(`Escreva o novo campo do livro ${bookName}: `)
            crudConsultar.editBook(bookName, attribBook, newAttribBook)
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
            
    }

  

}

run();
