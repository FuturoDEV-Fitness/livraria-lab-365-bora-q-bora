const fs = require('fs')

class LeitorCrud {

    constructor() {
        this.filePath = './src/files/leitores.json';
    }

    consultar(paraConsultar){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));

        const leitorEncontrado = conteudoAtual.find(leitor => leitor.nome == paraConsultar);

        if(leitorEncontrado){
            console.log(leitorEncontrado)
        }else{
            console.log("Leitor não encontrado")
        }
    }

    criar(leitor){
         console.log(leitor.getNome)
        
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        console.log(conteudoAtual)

        conteudoAtual.push({
            codigo: leitor.getCodigo,
            nome: leitor.getNome,
            cpf: leitor.getCpf,
            dataDeNascimento: leitor.getDataDeNascimento
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )
    }

}

module.exports = LeitorCrud;