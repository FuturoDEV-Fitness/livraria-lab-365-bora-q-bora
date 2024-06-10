const Leitor = require ('./classes/Leitor');
const readline = require('readline/promises');
const LeitorCrud = require('./classes/LeitorCrud');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function run() {

    const resposta = await input.question('Escolha uma ação (criar, deletar, consultar): ');

    switch (resposta) {
        case 'criar':

            const nome = await input.question('Digite o nome do leitor: ');

            const cpf = await input.question('Digite o CPF do leitor: ');

            const dataNascimento = await input.question('Digite a data de nascimento do leitor: ');

            const leitor = new Leitor(nome, cpf, dataNascimento);
           /*  leitor.setNome = nome;
            leitor.setCpf = cpf;
            leitor.setDataDeNascimento = dataNascimento */
           /*  leitor.setNome = nome
            leitor.setCpf = cpf
            leitor.setDataDeNascimento = dataNascimento */
            

            console.log(`Leitor criado com nome: ${leitor.getNome}\nCPF: ${leitor.getCpf}\nData de nascimento:${leitor.getDataDeNascimento}`)

            const crud = new LeitorCrud()
            crud.criar(leitor)
            
            input.close();
            break;

        case 'deletar': {
            /* Coloque sua resposta aqui */
            const nome = await input.question('Informe o nome do usuário que deseja deletar: ');
            
            const leitorCrud = new LeitorCrud();
            leitorCrud.deleteLeitor(nome);
            input.close();
            break;
        }

        case 'consultar': {

            const paraConsultar = await input.question("Qual é o nome do usuário? " )

            const crud = new LeitorCrud()
            crud.consultar(paraConsultar)


            /* Coloque sua resposta aqui */
            input.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            input.close();
    }

}

run();


/* const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        conteudoAtual.push({
            codigo: autor.getCodigo,
            nome: autor.getNome,
            generoLiterario: autor.getGeneroLiterario
        })

        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual),
            'utf-8'
        ) */